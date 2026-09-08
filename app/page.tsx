'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: '100vh', background: '#F8F8F6',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px 20px', textAlign: 'center',
    }}>
      {/* Logo */}
      <div style={{
        width: 72, height: 72, borderRadius: 18,
        background: '#0D1B3E', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: 36, marginBottom: 24,
        boxShadow: '0 4px 20px rgba(13,27,62,0.2)',
      }}>
        🚗
      </div>

      <h1 style={{
        fontSize: 38, fontWeight: 800, color: '#0D1B3E',
        margin: '0 0 10px', letterSpacing: '-0.03em',
      }}>
        PlayDhara
      </h1>

      <p style={{
        color: '#9CA3AF', fontSize: 16,
        margin: '0 0 12px', lineHeight: 1.5,
      }}>
        Parking se gaadi nikalo.<br/>Sab khali karo. Jeet jao.
      </p>

      {/* Mini preview grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 44px)',
        gridTemplateRows: 'repeat(4, 44px)',
        gap: 3, margin: '28px 0',
        background: '#1a1a2e', padding: 10,
        borderRadius: 14,
        boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
        position: 'relative',
      }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} style={{
            width: 44, height: 44,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 6,
          }} />
        ))}
        {/* Preview cars */}
        <div style={{
          position: 'absolute', left: 10, top: 10,
          width: 91, height: 44,
          background: '#E74C3C', borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>🚗</div>
        <div style={{
          position: 'absolute', left: 57, top: 57,
          width: 44, height: 91,
          background: '#3498DB', borderRadius: 8,
        }} />
        <div style={{
          position: 'absolute', left: 104, top: 104,
          width: 91, height: 44,
          background: '#2ECC71', borderRadius: 8,
        }} />
      </div>

      <button
        onClick={() => router.push('/game')}
        style={{
          background: '#0D1B3E', color: 'white',
          border: 'none', borderRadius: 14,
          padding: '16px 52px', fontSize: 17,
          fontWeight: 600, cursor: 'pointer',
          letterSpacing: '-0.01em',
          boxShadow: '0 4px 16px rgba(13,27,62,0.3)',
        }}
      >
        Khelo Abhi 🚀
      </button>

      <p style={{ color: '#D1D5DB', fontSize: 12, marginTop: 20 }}>
        No signup needed · Free forever
      </p>
    </div>
  );
}
