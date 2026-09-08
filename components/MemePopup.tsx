'use client';
import { useEffect } from 'react';

interface MemePopupProps {
  text: string;
  onClose: () => void;
}

export default function MemePopup({ text, onClose }: MemePopupProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 2200);
    return () => clearTimeout(t);
  }, [text, onClose]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <div className="meme-popup" style={{
        background: '#0D1B3E', color: 'white',
        borderRadius: '16px', padding: '18px 28px',
        fontSize: '18px', fontWeight: 500,
        maxWidth: '85vw', textAlign: 'center',
        boxShadow: '0 8px 32px rgba(13,27,62,0.25)',
        pointerEvents: 'auto', cursor: 'pointer',
        lineHeight: 1.4,
      }} onClick={onClose}>
        {text}
      </div>
    </div>
  );
}
