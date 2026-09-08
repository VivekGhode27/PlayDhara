'use client';
import { useState, useRef, useCallback } from 'react';
import { Car, Level } from '@/lib/types';
import { buildGrid, canMove, moveCar, isLevelComplete } from '@/lib/gameLogic';
import { BLOCKED_MEMES, SLOW_MEMES, WIN_MEMES, getRandomMeme } from '@/lib/memes';
import MemePopup from './MemePopup';

interface CarGridProps {
  level: Level;
  onComplete: () => void;
}

const CELL = 56; // px per cell
const GAP = 3;

export default function CarGrid({ level, onComplete }: CarGridProps) {
  const [cars, setCars] = useState<Car[]>(level.cars.map(c => ({ ...c })));
  const [meme, setMeme] = useState<string | null>(null);
  const [shakingId, setShakingId] = useState<string | null>(null);
  const [exitingIds, setExitingIds] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const lastMemeTime = useRef(0);
  const slowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStart = useRef<{ x: number; y: number; carId: string } | null>(null);

  const gridPx = level.grid * CELL + (level.grid - 1) * GAP;

  const showMeme = useCallback((pool: string[]) => {
    const now = Date.now();
    if (now - lastMemeTime.current < 3000) return;
    lastMemeTime.current = now;
    setMeme(getRandomMeme(pool));
  }, []);

  const resetSlowTimer = useCallback(() => {
    if (slowTimer.current) clearTimeout(slowTimer.current);
    slowTimer.current = setTimeout(() => showMeme(SLOW_MEMES), 20000);
  }, [showMeme]);

  const tryMove = useCallback((carId: string, direction: 'forward' | 'backward') => {
    setCars(prev => {
      const car = prev.find(c => c.id === carId);
      if (!car || car.exited) return prev;

      const canMov = canMove(car, direction, prev, level.grid);
      if (!canMov) {
        setShakingId(carId);
        setTimeout(() => setShakingId(null), 350);
        showMeme(BLOCKED_MEMES);
        return prev;
      }

      const { updatedCars, exited } = moveCar(car, direction, prev, level.grid);
      setMoves(m => m + 1);
      resetSlowTimer();

      if (exited) {
        setExitingIds(s => new Set([...s, carId]));
        setTimeout(() => {
          setCars(curr => {
            const final = curr.map(c => c.id === carId ? { ...c, exited: true } : c);
            if (isLevelComplete(final)) {
              showMeme(WIN_MEMES);
              setTimeout(onComplete, 2000);
            }
            return final;
          });
        }, 300);
      }

      return updatedCars;
    });
  }, [level.grid, onComplete, showMeme, resetSlowTimer]);

  // Touch/drag handlers
  const handlePointerDown = (e: React.PointerEvent, carId: string) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStart.current = { x: e.clientX, y: e.clientY, carId };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!dragStart.current) return;
    const { x, y, carId } = dragStart.current;
    dragStart.current = null;

    const dx = e.clientX - x;
    const dy = e.clientY - y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx < 8 && absDy < 8) return; // tap, ignore

    const car = cars.find(c => c.id === carId);
    if (!car) return;

    if (car.orientation === 'horizontal') {
      if (absDx > absDy) {
        tryMove(carId, dx > 0 ? 'forward' : 'backward');
      }
    } else {
      if (absDy > absDx) {
        tryMove(carId, dy > 0 ? 'forward' : 'backward');
      }
    }
  };

  const getCarStyle = (car: Car): React.CSSProperties => {
    const width = car.orientation === 'horizontal'
      ? car.size * CELL + (car.size - 1) * GAP
      : CELL;
    const height = car.orientation === 'vertical'
      ? car.size * CELL + (car.size - 1) * GAP
      : CELL;
    const left = car.col * (CELL + GAP);
    const top = car.row * (CELL + GAP);

    return {
      position: 'absolute',
      left, top, width, height,
      background: car.color,
      borderRadius: 10,
      cursor: car.orientation === 'horizontal' ? 'ew-resize' : 'ns-resize',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
      transition: 'left 0.15s ease, top 0.15s ease, opacity 0.3s',
      opacity: car.exited ? 0 : 1,
      userSelect: 'none',
      zIndex: 2,
    };
  };

  const activeCars = cars.filter(c => !c.exited);
  const exitedCount = cars.filter(c => c.exited).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      {/* Progress */}
      <div style={{ display: 'flex', gap: 8 }}>
        {cars.map(car => (
          <div key={car.id} style={{
            width: 10, height: 10, borderRadius: '50%',
            background: car.exited ? '#2ECC71' : car.color,
            transition: 'background 0.3s',
            border: '1.5px solid rgba(0,0,0,0.1)',
          }} />
        ))}
      </div>

      {/* Grid */}
      <div style={{
        position: 'relative',
        width: gridPx, height: gridPx,
        background: '#1a1a2e',
        borderRadius: 16,
        padding: 0,
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        overflow: 'visible',
      }}>
        {/* Grid lines */}
        {Array.from({ length: level.grid }).map((_, r) =>
          Array.from({ length: level.grid }).map((_, c) => (
            <div key={`${r}-${c}`} style={{
              position: 'absolute',
              left: c * (CELL + GAP),
              top: r * (CELL + GAP),
              width: CELL, height: CELL,
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 6,
            }} />
          ))
        )}

        {/* Cars */}
        {cars.map(car => (
          <div
            key={car.id}
            style={{
              ...getCarStyle(car),
            }}
            className={shakingId === car.id ? 'car-shake' : ''}
            onPointerDown={e => handlePointerDown(e, car.id)}
            onPointerUp={handlePointerUp}
          >
            {/* Car icon */}
            <svg width={car.orientation === 'horizontal' ? 32 : 20}
                 height={car.orientation === 'vertical' ? 32 : 20}
                 viewBox="0 0 24 24" fill="white" opacity={0.8}
                 style={{ transform: car.orientation === 'vertical' ? 'rotate(90deg)' : 'none' }}>
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          </div>
        ))}

        {/* Exit arrows on edges */}
        {Array.from({ length: level.grid }).map((_, i) => (
          <div key={`exit-r-${i}`} style={{
            position: 'absolute',
            right: -20, top: i * (CELL + GAP) + CELL / 2 - 8,
            fontSize: 14, opacity: 0.4, color: 'white',
          }}>→</div>
        ))}
        {Array.from({ length: level.grid }).map((_, i) => (
          <div key={`exit-b-${i}`} style={{
            position: 'absolute',
            bottom: -20, left: i * (CELL + GAP) + CELL / 2 - 8,
            fontSize: 14, opacity: 0.4, color: 'white',
          }}>↓</div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#9CA3AF' }}>
        <span>🚗 {exitedCount}/{cars.length} nikli</span>
        <span>🔄 {moves} moves</span>
      </div>

      {meme && <MemePopup text={meme} onClose={() => setMeme(null)} />}
    </div>
  );
}
