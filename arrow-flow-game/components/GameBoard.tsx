'use client';
import { useState, useCallback, useRef } from 'react';
import { Cell, Level, rotateDirection, checkComplete } from '@/lib/levels';
import { MISTAKE_MEMES, SLOW_MEMES, WIN_MEMES, getRandomMeme } from '@/lib/memes';
import ArrowIcon from './ArrowIcon';
import MemePopup from './MemePopup';

interface GameBoardProps {
  level: Level;
  onComplete: () => void;
}

export default function GameBoard({ level, onComplete }: GameBoardProps) {
  const [cells, setCells] = useState<Cell[][]>(() =>
    level.cells.map(row => row.map(cell => ({ ...cell })))
  );
  const [meme, setMeme] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const lastMemeTime = useRef(0);
  const slowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showMeme = useCallback((pool: string[]) => {
    const now = Date.now();
    if (now - lastMemeTime.current < 3000) return;
    lastMemeTime.current = now;
    setMeme(getRandomMeme(pool));
  }, []);

  const resetSlowTimer = useCallback(() => {
    if (slowTimer.current) clearTimeout(slowTimer.current);
    slowTimer.current = setTimeout(() => {
      showMeme(SLOW_MEMES);
    }, 25000);
  }, [showMeme]);

  const handleCellClick = useCallback((row: number, col: number) => {
    if (completed) return;
    resetSlowTimer();

    setCells(prev => {
      const next = prev.map(r => r.map(c => ({ ...c })));
      const cell = next[row][col];
      const oldDir = cell.direction;
      cell.direction = rotateDirection(cell.direction);

      // Was this cell already correct and now it's wrong? Mistake!
      const wasCorrect = oldDir === cell.correct;
      const isNowCorrect = cell.direction === cell.correct;

      if (wasCorrect && !isNowCorrect) {
        setMistakes(m => {
          const newCount = m + 1;
          if (newCount % 2 === 0) showMeme(MISTAKE_MEMES);
          return newCount;
        });
      }

      if (checkComplete(next)) {
        setCompleted(true);
        setTimeout(() => {
          showMeme(WIN_MEMES);
          setTimeout(onComplete, 2200);
        }, 400);
      }

      return next;
    });
  }, [completed, onComplete, showMeme, resetSlowTimer]);

  const cellSize = level.grid <= 3 ? 80 : level.grid === 4 ? 68 : 56;
  const iconSize = level.grid <= 3 ? 36 : level.grid === 4 ? 30 : 24;
  const gap = 8;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${level.grid}, ${cellSize}px)`,
          gap: `${gap}px`,
          padding: '20px',
          background: 'white',
          borderRadius: '20px',
          border: '1px solid #E5E7EB',
        }}
      >
        {cells.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={cell.id}
              className={`arrow-cell ${cell.direction === cell.correct ? 'cell-correct' : ''}`}
              onClick={() => handleCellClick(r, c)}
              style={{
                width: cellSize,
                height: cellSize,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                background: cell.direction === cell.correct ? '#F0FBF4' : '#F8F8F6',
                border: `1.5px solid ${cell.direction === cell.correct ? '#BBE0CC' : '#E5E7EB'}`,
                transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              <ArrowIcon
                direction={cell.direction}
                correct={cell.correct}
                size={iconSize}
              />
            </div>
          ))
        )}
      </div>

      {/* Mistakes */}
      {mistakes > 0 && (
        <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0 }}>
          {mistakes} wrong {mistakes === 1 ? 'move' : 'moves'}
        </p>
      )}

      {completed && (
        <div style={{
          color: '#2D7A4F',
          fontWeight: 500,
          fontSize: '18px',
          animation: 'popIn 0.3s ease',
        }}>
          Sahi kiya! 🎉
        </div>
      )}

      {meme && <MemePopup text={meme} onClose={() => setMeme(null)} />}
    </div>
  );
}
