'use client';

import React, { useState } from 'react';

interface Props {
  courseSlug: string;
  label: string;
  color?: string;
}

export default function BuyButton({ courseSlug, label, color = '#0057a8' }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseSlug }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Fehler beim Checkout.');
        setLoading(false);
      }
    } catch {
      alert('Verbindungsfehler. Bitte nochmals versuchen.');
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: loading ? '#ccc' : color,
        color: 'white',
        padding: '14px 28px',
        borderRadius: '10px',
        fontWeight: 700,
        fontSize: '15px',
        border: 'none',
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'opacity 0.15s, transform 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {loading ? '⏳ Weiterleitung…' : label}
    </button>
  );
}
