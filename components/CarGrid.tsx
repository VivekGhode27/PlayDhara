'use client';
import { useState, useCallback, useRef } from 'react';
import { Arrow, Level } from '@/lib/types';
import { canExit, isLevelComplete } from '@/lib/gameLogic';
import { BLOCKED_MEMES, WIN_MEMES, SLOW_MEMES, getRandomMeme } from '@/lib/memes';
import MemePopup from './MemePopup';

interface CarGridProps {
  level: Level;
  onComplete: () => void;
}

const CELL = 54;
const GAP = 4;

const DIR_ICONS: Record<string, string> = {
  right: '→',
  left:  '←',
  up:    '↑',
  down:  '↓',
};

export default function CarGrid({ level, onComplete }: CarGridProps) {
  const [arrows, setArrows] = useState<Arrow[]>(level.arrows.map(a => ({ ...a })));
  const [meme, setMeme] = useState<string | null>(null);
  const [shakingId, setShakingId] = useState<string | null>(null);
  const [moves, setMoves] = useState(0);
  const lastMemeTime = useRef(0);
  const slowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleTap = useCallback((arrowId: string) => {
    setArrows(prev => {
      const arrow = prev.find(a => a.id === arrowId);
      if (!arrow || arrow.exited) return prev;

      const canGo = canExit(arrow, prev, level.grid);
      if (!canGo) {
        setShakingId(arrowId);
        setTimeout(() => setShakingId(null), 350);
        showMeme(BLOCKED_MEMES);
        return prev;
      }

      setMoves(m => m + 1);
      resetSlowTimer();

      // Mark as exited
      const updated = prev.map(a => a.id === arrowId ? { ...a, exited: true } : a);

      if (isLevelComplete(updated)) {
        showMeme(WIN_MEMES);
        setTimeout(onComplete, 2000);
      }

      return updated;
    });
  }, [level.grid, onComplete, showMeme, resetSlowTimer]);

  const getStyle = (arrow: Arrow): React.CSSProperties => {
    const isVert = arrow.direction === 'up' || arrow.direction === 'down';
    const w = isVert ? CELL : arrow.size * CELL + (arrow.size - 1) * GAP;
    const h = isVert ? arrow.size * CELL + (arrow.size - 1) * GAP : CELL;
    const left = arrow.col * (CELL + GAP);
    const top  = arrow.row * (CELL + GAP);

    return {
      position: 'absolute',
      left, top, width: w, height: h,
      background: arrow.exited ? 'transparent' : arrow.color,
      borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: arrow.size >= 2 ? 28 : 22,
      color: 'white',
      fontWeight: 700,
      cursor: arrow.exited ? 'default' : 'pointer',
      boxShadow: arrow.exited ? 'none' : '0 4px 12px rgba(0,0,0,0.25)',
      transition: 'background 0.25s, box-shadow 0.25s, transform 0.15s',
      userSelect: 'none',
      zIndex: 2,
      opacity: arrow.exited ? 0 : 1,
    };
  };

  const exitedCount = arrows.filter(a => a.exited).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>

      {/* Dot progress */}
      <div style={{ display: 'flex', gap: 8 }}>
        {arrows.map(a => (
          <div key={a.id} style={{
            width: 10, height: 10, borderRadius: '50%',
            background: a.exited ? '#2ECC71' : a.color,
            transition: 'background 0.3s',
            border: '1.5px solid rgba(0,0,0,0.1)',
          }} />
        ))}
      </div>

      {/* Grid */}
      <div style={{
        position: 'relative',
        width: gridPx, height: gridPx,
        background: '#16213E',
        borderRadius: 18,
        boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
      }}>
        {/* Cell backgrounds */}
        {Array.from({ length: level.grid }).map((_, r) =>
          Array.from({ length: level.grid }).map((_, c) => (
            <div key={`${r}-${c}`} style={{
              position: 'absolute',
              left: c * (CELL + GAP), top: r * (CELL + GAP),
              width: CELL, height: CELL,
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 8,
            }} />
          ))
        )}

        {/* Exit indicators on all 4 edges */}
        {/* Right exits */}
        {Array.from({ length: level.grid }).map((_, r) => (
          <div key={`er-${r}`} style={{
            position: 'absolute',
            right: -22, top: r * (CELL + GAP) + CELL / 2 - 10,
            fontSize: 16, color: 'rgba(255,255,255,0.3)',
          }}>→</div>
        ))}
        {/* Left exits */}
        {Array.from({ length: level.grid }).map((_, r) => (
          <div key={`el-${r}`} style={{
            position: 'absolute',
            left: -22, top: r * (CELL + GAP) + CELL / 2 - 10,
            fontSize: 16, color: 'rgba(255,255,255,0.3)',
          }}>←</div>
        ))}
        {/* Bottom exits */}
        {Array.from({ length: level.grid }).map((_, c) => (
          <div key={`eb-${c}`} style={{
            position: 'absolute',
            bottom: -22, left: c * (CELL + GAP) + CELL / 2 - 8,
            fontSize: 16, color: 'rgba(255,255,255,0.3)',
          }}>↓</div>
        ))}
        {/* Top exits */}
        {Array.from({ length: level.grid }).map((_, c) => (
          <div key={`et-${c}`} style={{
            position: 'absolute',
            top: -22, left: c * (CELL + GAP) + CELL / 2 - 8,
            fontSize: 16, color: 'rgba(255,255,255,0.3)',
          }}>↑</div>
        ))}

        {/* Arrows */}
        {arrows.map(arrow => (
          <div
            key={arrow.id}
            style={getStyle(arrow)}
            className={shakingId === arrow.id ? 'car-shake' : ''}
            onClick={() => handleTap(arrow.id)}
          >
            {!arrow.exited && (
              <span style={{ fontSize: arrow.size >= 2 ? 32 : 24, lineHeight: 1 }}>
                {DIR_ICONS[arrow.direction]}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#9CA3AF' }}>
        <span>✅ {exitedCount}/{arrows.length} nikle</span>
        <span>👆 {moves} taps</span>
      </div>

      {meme && <MemePopup text={meme} onClose={() => setMeme(null)} />}
    </div>
  );
}
