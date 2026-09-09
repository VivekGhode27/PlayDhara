'use client';
import { useState, useEffect } from 'react';
import { useUser, UserButton, SignInButton } from '@clerk/nextjs';
import { getLevel, TOTAL_LEVELS } from '@/lib/levels';
import { getUserProgress, saveUserProgress } from '@/lib/supabase';
import { MILESTONE_MEMES } from '@/lib/memes';
import CarGrid from '@/components/CarGrid';

export default function GamePage() {
  const { isSignedIn, user } = useUser();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [levelData, setLevelData] = useState(() => getLevel(1));
  const [gameKey, setGameKey] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showSaveNudge, setShowSaveNudge] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const [milestone, setMilestone] = useState<string | null>(null);
  const [showMilestone, setShowMilestone] = useState(false);

  useEffect(() => {
    async function load() {
      let startLevel = 1;
      if (isSignedIn && user) {
        startLevel = await getUserProgress(user.id);
      } else {
        const local = localStorage.getItem('playdhara_level');
        if (local) startLevel = Math.max(1, parseInt(local));
      }
      startLevel = Math.min(startLevel, TOTAL_LEVELS);
      setCurrentLevel(startLevel);
      setLevelData(getLevel(startLevel));
      setLoaded(true);
    }
    load();
  }, [isSignedIn, user]);

  const handleComplete = async (moves: number) => {
    const nextLevel = currentLevel + 1;

    // Milestone check
    if (MILESTONE_MEMES[currentLevel]) {
      setMilestone(MILESTONE_MEMES[currentLevel]);
      setShowMilestone(true);
      setTimeout(() => setShowMilestone(false), 3500);
    }

    if (nextLevel > TOTAL_LEVELS) {
      setAllDone(true);
      return;
    }

    // Save progress
    if (isSignedIn && user) {
      await saveUserProgress(user.id, nextLevel);
    } else {
      localStorage.setItem('playdhara_level', String(nextLevel));
      if (nextLevel % 3 === 0) setShowSaveNudge(true);
    }

    setCurrentLevel(nextLevel);
    setLevelData(getLevel(nextLevel)); // random variant!
    setGameKey(k => k + 1);
  };

  const handleRestart = () => {
    setLevelData(getLevel(currentLevel)); // new random variant on restart too!
    setGameKey(k => k + 1);
  };

  if (!loaded) return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#F8F8F6' }}>
      <div style={{ color:'#9CA3AF', fontSize:15 }}>Loading...</div>
    </div>
  );

  return (
    <div style={{ minHeight:'100vh', background:'#F8F8F6', display:'flex', flexDirection:'column' }}>
      {/* Header */}
      <header style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'14px 20px', background:'white',
        borderBottom:'1px solid #E5E7EB',
        position:'sticky', top:0, zIndex:10,
      }}>
        <span style={{ fontWeight:700, fontSize:18, color:'#0D1B3E', letterSpacing:'-0.03em' }}>
          PlayDhara 🎯
        </span>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ fontSize:13, color:'#9CA3AF' }}>
            Level {currentLevel}
          </span>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button style={{
                background:'transparent', border:'1.5px solid #D1D5DB',
                borderRadius:10, padding:'7px 14px', fontSize:13,
                cursor:'pointer', color:'#0D1B3E',
              }}>
                Save progress
              </button>
            </SignInButton>
          )}
        </div>
      </header>

      {/* Main */}
      <main style={{
        flex:1, display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        padding:'24px 16px', gap:20,
        overflowY:'auto',
      }}>
        {allDone ? (
          <div style={{
            textAlign:'center', padding:40, background:'white',
            borderRadius:20, border:'1px solid #E5E7EB', maxWidth:300,
          }}>
            <div style={{ fontSize:56, marginBottom:12 }}>🏆</div>
            <h2 style={{ color:'#0D1B3E', margin:'0 0 8px', fontSize:24 }}>
              Parking Master!
            </h2>
            <p style={{ color:'#9CA3AF', fontSize:14, margin:0 }}>
              Saare levels clear kar diye! Tu toh legend hai bhai! 🔥
            </p>
          </div>
        ) : (
          <>
            <div style={{ textAlign:'center' }}>
              <h1 style={{
                fontSize:22, fontWeight:700, color:'#0D1B3E',
                margin:'0 0 4px', letterSpacing:'-0.02em',
              }}>
                {levelData?.title}
              </h1>
              <p style={{ color:'#9CA3AF', fontSize:13, margin:0 }}>
                Tap to release · Sab ko bahar nikalo
              </p>
            </div>

            {levelData && (
              <CarGrid
                key={gameKey}
                level={levelData}
                onComplete={handleComplete}
              />
            )}

            <button onClick={handleRestart} style={{
              background:'transparent', border:'1.5px solid #D1D5DB',
              borderRadius:12, padding:'10px 24px', fontSize:14,
              cursor:'pointer', color:'#0D1B3E',
            }}>
              Restart 🔄
            </button>
          </>
        )}
      </main>

      {/* Milestone popup */}
      {showMilestone && milestone && (
        <div style={{
          position:'fixed', inset:0, zIndex:200,
          display:'flex', alignItems:'center', justifyContent:'center',
          background:'rgba(0,0,0,0.5)',
        }}>
          <div className="meme-popup" style={{
            background:'white', borderRadius:24,
            padding:'32px 40px', textAlign:'center',
            boxShadow:'0 20px 60px rgba(0,0,0,0.3)',
            maxWidth:'85vw',
          }}>
            <div style={{ fontSize:52, marginBottom:12 }}>🏅</div>
            <div style={{ fontSize:13, color:'#9CA3AF', marginBottom:8, fontWeight:500 }}>
              MILESTONE UNLOCKED
            </div>
            <div style={{ fontSize:22, fontWeight:700, color:'#0D1B3E' }}>
              {milestone}
            </div>
          </div>
        </div>
      )}

      {/* Save nudge */}
      {showSaveNudge && !isSignedIn && (
        <div style={{
          position:'fixed', bottom:24, left:'50%', transform:'translateX(-50%)',
          background:'#0D1B3E', color:'white', borderRadius:14,
          padding:'14px 20px', display:'flex', alignItems:'center',
          gap:12, fontSize:14, maxWidth:'90vw', zIndex:50,
          boxShadow:'0 4px 20px rgba(13,27,62,0.2)',
        }}>
          <span>Login karke progress save karo 💾</span>
          <SignInButton mode="modal">
            <button style={{
              background:'white', color:'#0D1B3E', border:'none',
              borderRadius:8, padding:'7px 14px', fontSize:13,
              fontWeight:500, cursor:'pointer',
            }}>Login</button>
          </SignInButton>
          <button onClick={() => setShowSaveNudge(false)} style={{
            background:'none', border:'none', color:'rgba(255,255,255,0.6)',
            cursor:'pointer', fontSize:18, lineHeight:1,
          }}>×</button>
        </div>
      )}
    </div>
  );
}
