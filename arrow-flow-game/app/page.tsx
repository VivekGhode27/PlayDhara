'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8F8F6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 20px',
      textAlign: 'center',
    }}>
      {/* Logo mark */}
      <div style={{ marginBottom: '32px' }}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect width="56" height="56" rx="14" fill="#0D1B3E"/>
          <line x1="28" y1="42" x2="28" y2="18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <polyline points="19,26 28,17 37,26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <line x1="14" y1="28" x2="38" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
          <polyline points="32,22 39,28 32,34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <h1 style={{
        fontSize: '36px',
        fontWeight: 700,
        color: '#0D1B3E',
        margin: '0 0 12px',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
      }}>
        Arrow Flow
      </h1>

      <p style={{
        color: '#9CA3AF',
        fontSize: '16px',
        margin: '0 0 48px',
        maxWidth: '260px',
        lineHeight: 1.5,
      }}>
        Rotate the arrows.<br/>Find the flow.
      </p>

      {/* Sample mini-grid preview */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 52px)',
        gap: '6px',
        marginBottom: '48px',
        padding: '16px',
        background: 'white',
        borderRadius: '16px',
        border: '1px solid #E5E7EB',
      }}>
        {[
          { r: 180, ok: true },
          { r: 90,  ok: false },
          { r: 270, ok: false },
          { r: 90,  ok: true },
          { r: 90,  ok: true },
          { r: 180, ok: false },
          { r: 0,   ok: false },
          { r: 0,   ok: true },
          { r: 0,   ok: true },
        ].map((cell, i) => (
          <div key={i} style={{
            width: 52, height: 52,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '8px',
            background: cell.ok ? '#F0FBF4' : '#F8F8F6',
            border: `1.5px solid ${cell.ok ? '#BBE0CC' : '#E5E7EB'}`,
          }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none"
              style={{ transform: `rotate(${cell.r}deg)` }}>
              <line x1="16" y1="26" x2="16" y2="8" stroke={cell.ok ? '#2D7A4F' : '#0D1B3E'} strokeWidth="2.5" strokeLinecap="round"/>
              <polyline points="9,15 16,7 23,15" stroke={cell.ok ? '#2D7A4F' : '#0D1B3E'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        ))}
      </div>

      <button
        className="btn-primary"
        onClick={() => router.push('/game')}
        style={{ fontSize: '17px', padding: '16px 48px', borderRadius: '14px' }}
      >
        Play now
      </button>

      <p style={{ color: '#D1D5DB', fontSize: '12px', marginTop: '24px' }}>
        No signup needed · Free forever
      </p>
    </div>
  );
}
