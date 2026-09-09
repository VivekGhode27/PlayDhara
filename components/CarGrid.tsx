'use client';
import { useState, useCallback, useRef } from 'react';
import { Level } from '@/lib/types';
import { canExit, isLevelComplete } from '@/lib/gameLogic';
import { BLOCKED_MEMES, WIN_MEMES, SLOW_MEMES, COMBO_MEMES, getRandomMeme } from '@/lib/memes';
import MemePopup from './MemePopup';

interface CarGridProps {
  level: Level & { variant?: string };
  onComplete: (moves: number) => void;
}

const CELL = 54;
const GAP = 4;

const DIR_ICON: Record<string, string> = { right:'→', left:'←', up:'↑', down:'↓' };
const EXIT_TRANSLATE: Record<string, string> = {
  right: 'translateX(120px)',
  left:  'translateX(-120px)',
  up:    'translateY(-120px)',
  down:  'translateY(120px)',
};

export default function CarGrid({ level, onComplete }: CarGridProps) {
  const [arrows, setArrows] = useState(() => level.arrows.map(a => ({ ...a, animating: false, exited: false })));
  const [meme, setMeme] = useState<string | null>(null);
  const [shakingId, setShakingId] = useState<string | null>(null);
  const [moves, setMoves] = useState(0);
  const lastMemeTime = useRef(0);
  const slowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastExitTime = useRef(0);
  const consecutiveExits = useRef(0);

  const gridPx = level.grid * CELL + (level.grid - 1) * GAP;

  const showMeme = useCallback((pool: string[]) => {
    const now = Date.now();
    if (now - lastMemeTime.current < 2500) return;
    lastMemeTime.current = now;
    setMeme(getRandomMeme(pool));
  }, []);

  const resetSlowTimer = useCallback(() => {
    if (slowTimer.current) clearTimeout(slowTimer.current);
    slowTimer.current = setTimeout(() => showMeme(SLOW_MEMES), 18000);
  }, [showMeme]);

  const handleTap = useCallback((arrowId: string) => {
    setArrows(prev => {
      const arrow = prev.find(a => a.id === arrowId);
      if (!arrow || arrow.exited || arrow.animating) return prev;

      const canGo = canExit(arrow, prev, level.grid);
      if (!canGo) {
        setShakingId(arrowId);
        setTimeout(() => setShakingId(null), 350);
        showMeme(BLOCKED_MEMES);
        consecutiveExits.current = 0;
        return prev;
      }

      // Start exit animation
      const animating = prev.map(a => a.id === arrowId ? { ...a, animating: true } : a);

      // After animation, mark exited
      setTimeout(() => {
        setArrows(curr => {
          const updated = curr.map(a => a.id === arrowId ? { ...a, exited: true, animating: false } : a);

          // Check combo
          const now = Date.now();
          if (now - lastExitTime.current < 1500) {
            consecutiveExits.current++;
            if (consecutiveExits.current >= 2) showMeme(COMBO_MEMES);
          } else {
            consecutiveExits.current = 1;
          }
          lastExitTime.current = now;

          if (isLevelComplete(updated)) {
            showMeme(WIN_MEMES);
            setTimeout(() => onComplete(moves + 1), 1800);
          }
          return updated;
        });
      }, 320);

      setMoves(m => m + 1);
      resetSlowTimer();
      return animating;
    });
  }, [level.grid, moves, onComplete, showMeme, resetSlowTimer]);

  const exitedCount = arrows.filter(a => a.exited).length;

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:20 }}>

      {/* Progress dots */}
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center', maxWidth: gridPx }}>
        {arrows.map(a => (
          <div key={a.id} style={{
            width:10, height:10, borderRadius:'50%',
            background: a.exited ? '#2ECC71' : a.color,
            transition:'background 0.4s',
            border:'1.5px solid rgba(0,0,0,0.15)',
            transform: a.exited ? 'scale(1.3)' : 'scale(1)',
          }} />
        ))}
      </div>

      {/* Grid */}
      <div style={{
        position:'relative',
        width:gridPx, height:gridPx,
        background:'#16213E',
        borderRadius:18,
        boxShadow:'0 8px 32px rgba(0,0,0,0.4)',
        overflow:'hidden',
      }}>
        {/* Cell backgrounds */}
        {Array.from({length:level.grid}).map((_,r) =>
          Array.from({length:level.grid}).map((_,c) => (
            <div key={`${r}-${c}`} style={{
              position:'absolute',
              left:c*(CELL+GAP), top:r*(CELL+GAP),
              width:CELL, height:CELL,
              background:'rgba(255,255,255,0.04)',
              borderRadius:8,
            }} />
          ))
        )}

        {/* Arrows */}
        {arrows.map(arrow => {
          const isVert = arrow.direction==='up'||arrow.direction==='down';
          const w = isVert ? CELL : arrow.size*CELL+(arrow.size-1)*GAP;
          const h = isVert ? arrow.size*CELL+(arrow.size-1)*GAP : CELL;
          const left = arrow.col*(CELL+GAP);
          const top  = arrow.row*(CELL+GAP);

          return (
            <div
              key={arrow.id}
              onClick={() => handleTap(arrow.id)}
              className={shakingId===arrow.id ? 'car-shake' : ''}
              style={{
                position:'absolute',
                left, top, width:w, height:h,
                background: arrow.color,
                borderRadius:12,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize: arrow.size>=2 ? 28 : 22,
                color:'white', fontWeight:700,
                cursor: arrow.exited ? 'default' : 'pointer',
                boxShadow: arrow.exited ? 'none' : '0 4px 14px rgba(0,0,0,0.3)',
                userSelect:'none', zIndex:2,
                // Exit animation
                transform: arrow.animating ? EXIT_TRANSLATE[arrow.direction] : 'translate(0,0)',
                opacity: arrow.exited ? 0 : arrow.animating ? 0.3 : 1,
                transition: arrow.animating
                  ? 'transform 0.32s cubic-bezier(0.4,0,1,1), opacity 0.32s ease'
                  : 'opacity 0.2s',
                pointerEvents: arrow.exited || arrow.animating ? 'none' : 'auto',
              }}
            >
              {!arrow.exited && (
                <span style={{ fontSize: arrow.size>=2 ? 30 : 22, lineHeight:1 }}>
                  {DIR_ICON[arrow.direction]}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div style={{ display:'flex', gap:20, fontSize:14, color:'#9CA3AF' }}>
        <span>✅ {exitedCount}/{arrows.length} nikle</span>
        <span>👆 {moves} taps</span>
      </div>

      {meme && <MemePopup text={meme} onClose={() => setMeme(null)} />}
    </div>
  );
}
