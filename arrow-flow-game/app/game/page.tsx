'use client';
import { useState, useEffect } from 'react';
import { useUser, UserButton, SignInButton } from '@clerk/nextjs';
import { LEVELS } from '@/lib/levels';
import { getUserProgress, saveUserProgress } from '@/lib/supabase';
import GameBoard from '@/components/GameBoard';

export default function GamePage() {
  const { isSignedIn, user } = useUser();
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [gameKey, setGameKey] = useState(0);
  const [showSaveNudge, setShowSaveNudge] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load progress on mount
  useEffect(() => {
    async function load() {
      if (isSignedIn && user) {
        const savedLevel = await getUserProgress(user.id);
        const idx = LEVELS.findIndex(l => l.id === savedLevel);
        setCurrentLevelIdx(idx >= 0 ? idx : 0);
      } else {
        // Guest: check localStorage
        const local = localStorage.getItem('arrow_flow_level');
        if (local) {
          const idx = LEVELS.findIndex(l => l.id === parseInt(local));
          setCurrentLevelIdx(idx >= 0 ? idx : 0);
        }
      }
      setLoaded(true);
    }
    load();
  }, [isSignedIn, user]);

  const currentLevel = LEVELS[currentLevelIdx];

  const handleLevelComplete = async () => {
    const nextIdx = currentLevelIdx + 1;

    if (nextIdx >= LEVELS.length) {
      // All levels done!
      if (isSignedIn && user) {
        await saveUserProgress(user.id, LEVELS[LEVELS.length - 1].id);
      } else {
        localStorage.setItem('arrow_flow_level', String(LEVELS[LEVELS.length - 1].id));
        setShowSaveNudge(true);
      }
      return;
    }

    const nextLevel = LEVELS[nextIdx];

    if (isSignedIn && user) {
      await saveUserProgress(user.id, nextLevel.id);
    } else {
      localStorage.setItem('arrow_flow_level', String(nextLevel.id));
      // Show save nudge after every 2 levels for guests
      if (nextIdx % 2 === 0) setShowSaveNudge(true);
    }

    setCurrentLevelIdx(nextIdx);
    setGameKey(k => k + 1);
  };

  const handleRestart = () => {
    setGameKey(k => k + 1);
  };

  if (!loaded) {
    return (
      <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ color: '#9CA3AF', fontSize: '15px' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8F8F6' }}>
      {/* Top bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        borderBottom: '1px solid #E5E7EB',
        background: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div>
          <span style={{ fontWeight: 600, fontSize: '17px', color: '#0D1B3E', letterSpacing: '-0.02em' }}>
            Arrow Flow
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: '#9CA3AF' }}>
            Level {currentLevel?.id ?? 1} / {LEVELS.length}
          </span>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button className="btn-ghost" style={{ padding: '8px 16px', fontSize: '13px' }}>
                Save progress
              </button>
            </SignInButton>
          )}
        </div>
      </header>

      {/* Game area */}
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px',
        gap: '16px',
      }}>
        {/* Level title */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h1 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: '#0D1B3E',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            {currentLevel?.title}
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '13px', margin: '6px 0 0' }}>
            Tap to rotate · match all arrows
          </p>
        </div>

        {/* Board */}
        {currentLevel && (
          <GameBoard
            key={gameKey}
            level={currentLevel}
            onComplete={handleLevelComplete}
          />
        )}

        {/* Controls */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
          <button className="btn-ghost" onClick={handleRestart} style={{ fontSize: '14px', padding: '10px 20px' }}>
            Restart
          </button>
        </div>

        {/* All done */}
        {currentLevelIdx >= LEVELS.length && (
          <div style={{
            textAlign: 'center',
            padding: '32px',
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #E5E7EB',
            maxWidth: '320px',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏆</div>
            <h2 style={{ color: '#0D1B3E', margin: '0 0 8px', fontSize: '20px' }}>
              Tu champion hai bhai!
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '14px', margin: 0 }}>
              All levels cleared. More coming soon!
            </p>
          </div>
        )}
      </main>

      {/* Save nudge for guests */}
      {showSaveNudge && !isSignedIn && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#0D1B3E',
          color: 'white',
          borderRadius: '14px',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          boxShadow: '0 4px 20px rgba(13,27,62,0.2)',
          maxWidth: '90vw',
          zIndex: 50,
        }}>
          <span>Login to save your progress 💾</span>
          <SignInButton mode="modal">
            <button style={{
              background: 'white',
              color: '#0D1B3E',
              border: 'none',
              borderRadius: '8px',
              padding: '7px 14px',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
            }}>
              Login
            </button>
          </SignInButton>
          <button
            onClick={() => setShowSaveNudge(false)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '18px', lineHeight: 1 }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
