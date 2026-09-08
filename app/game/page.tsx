'use client';
import { useState, useEffect } from 'react';
import { useUser, UserButton, SignInButton } from '@clerk/nextjs';
import { LEVELS } from '@/lib/levels';
import { getUserProgress, saveUserProgress } from '@/lib/supabase';
import CarGrid from '@/components/CarGrid';

export default function GamePage() {
  const { isSignedIn, user } = useUser();
  const [levelIdx, setLevelIdx] = useState(0);
  const [gameKey, setGameKey] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showSaveNudge, setShowSaveNudge] = useState(false);
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    async function load() {
      if (isSignedIn && user) {
        const saved = await getUserProgress(user.id);
        const idx = LEVELS.findIndex(l => l.id === saved);
        setLevelIdx(idx >= 0 ? idx : 0);
      } else {
        const local = localStorage.getItem('playdhara_level');
        if (local) {
          const idx = LEVELS.findIndex(l => l.id === parseInt(local));
          setLevelIdx(idx >= 0 ? idx : 0);
        }
      }
      setLoaded(true);
    }
    load();
  }, [isSignedIn, user]);

  const handleComplete = async () => {
    const nextIdx = levelIdx + 1;
    if (nextIdx >= LEVELS.length) {
      setAllDone(true);
      return;
    }
    const nextLevel = LEVELS[nextIdx];
    if (isSignedIn && user) {
      await saveUserProgress(user.id, nextLevel.id);
    } else {
      localStorage.setItem('playdhara_level', String(nextLevel.id));
      if (nextIdx % 2 === 0) setShowSaveNudge(true);
    }
    setLevelIdx(nextIdx);
    setGameKey(k => k + 1);
  };

  const handleRestart = () => setGameKey(k => k + 1);

  const level = LEVELS[levelIdx];

  if (!loaded) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#9CA3AF' }}>Loading...</div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#F8F8F6', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 20px', background: 'white',
        borderBottom: '1px solid #E5E7EB',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: '#0D1B3E', letterSpacing: '-0.03em' }}>
          PlayDhara 🚗
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 13, color: '#9CA3AF' }}>
            Level {level?.id}/{LEVELS.length}
          </span>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button style={{
                background: 'transparent', border: '1.5px solid #D1D5DB',
                borderRadius: 10, padding: '7px 14px', fontSize: 13,
                cursor: 'pointer', color: '#0D1B3E',
              }}>
                Save progress
              </button>
            </SignInButton>
          )}
        </div>
      </header>

      {/* Main */}
      <main style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '24px 16px', gap: 20,
      }}>
        {allDone ? (
          <div style={{
            textAlign: 'center', padding: 40, background: 'white',
            borderRadius: 20, border: '1px solid #E5E7EB', maxWidth: 300,
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🏆</div>
            <h2 style={{ color: '#0D1B3E', margin: '0 0 8px', fontSize: 22 }}>
              Parking Master!
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 14, margin: 0 }}>
              Saari gaadiyaan nikal gayi! Tu champion hai bhai! 🎉
            </p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                fontSize: 22, fontWeight: 700, color: '#0D1B3E',
                margin: '0 0 4px', letterSpacing: '-0.02em',
              }}>
                {level?.title}
              </h1>
              <p style={{ color: '#9CA3AF', fontSize: 13, margin: 0 }}>
                Swipe cars to move · Sab ko bahar nikalo
              </p>
            </div>

            {level && (
              <CarGrid
                key={gameKey}
                level={level}
                onComplete={handleComplete}
              />
            )}

            <button
              onClick={handleRestart}
              style={{
                background: 'transparent', border: '1.5px solid #D1D5DB',
                borderRadius: 12, padding: '10px 24px', fontSize: 14,
                cursor: 'pointer', color: '#0D1B3E',
              }}
            >
              Restart 🔄
            </button>
          </>
        )}
      </main>

      {/* Save nudge */}
      {showSaveNudge && !isSignedIn && (
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: '#0D1B3E', color: 'white', borderRadius: 14,
          padding: '14px 20px', display: 'flex', alignItems: 'center',
          gap: 12, fontSize: 14, maxWidth: '90vw', zIndex: 50,
          boxShadow: '0 4px 20px rgba(13,27,62,0.2)',
        }}>
          <span>Login karke progress save karo 💾</span>
          <SignInButton mode="modal">
            <button style={{
              background: 'white', color: '#0D1B3E', border: 'none',
              borderRadius: 8, padding: '7px 14px', fontSize: 13,
              fontWeight: 500, cursor: 'pointer',
            }}>Login</button>
          </SignInButton>
          <button onClick={() => setShowSaveNudge(false)} style={{
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer', fontSize: 18, lineHeight: 1,
          }}>×</button>
        </div>
      )}
    </div>
  );
}
