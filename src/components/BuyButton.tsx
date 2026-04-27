'use client';

import React, { useState } from 'react';

interface Props {
  /** Einzelkurs. Mutually exclusive mit lehrgangSlug. */
  courseSlug?: string;
  /** Zertifikatslehrgang. Mutually exclusive mit courseSlug. */
  lehrgangSlug?: string;
  /** Nur bei Lehrgang: Basis oder Plus (Business läuft per Anfrage). */
  tier?: 'basis' | 'plus';
  label: string;
  color?: string;
  fullWidth?: boolean;
  /** Visueller Stil: 'primary' (blau gefüllt), 'subtle' (grau), 'custom' (color-Prop). */
  variant?: 'primary' | 'subtle' | 'custom';
}

export default function BuyButton({
  courseSlug,
  lehrgangSlug,
  tier = 'basis',
  label,
  color = '#0057a8',
  fullWidth = false,
  variant = 'custom',
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const payload = lehrgangSlug
        ? { type: 'lehrgang', lehrgangSlug, tier }
        : { type: 'course', courseSlug };
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else if (res.status === 401) {
        const ret = lehrgangSlug ? `/zertifikatslehrgang#${lehrgangSlug}` : `/${courseSlug ?? 'kurse'}`;
        window.location.href = `/login?redirect=${encodeURIComponent(ret)}`;
      } else {
        alert(data.error || 'Fehler beim Checkout.');
        setLoading(false);
      }
    } catch {
      alert('Verbindungsfehler. Bitte nochmals versuchen.');
      setLoading(false);
    }
  }

  // Legacy-Stil (bestehende Einzelkurs-Buttons): grösser, unverändert
  // Tier-Stil (neu, Lehrgang-Karten): kompakter
  const isCompact = variant === 'primary' || variant === 'subtle';
  const padding = isCompact ? '11px 18px' : '14px 28px';
  const fontSize = isCompact ? '13px' : '15px';

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: { background: loading ? '#a8bfd8' : '#0057a8', color: 'white', border: 'none' },
    subtle:  { background: loading ? '#ddd'    : '#f0f0f5', color: '#1d1d1f', border: 'none' },
    custom:  { background: loading ? '#ccc'    : color,     color: 'white', border: 'none' },
  };

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      style={{
        display: fullWidth ? 'block' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding,
        borderRadius: '10px',
        fontWeight: 700,
        fontSize,
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'opacity 0.15s, transform 0.15s',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        ...variantStyles[variant],
      }}
    >
      {loading ? '⏳ Weiterleitung…' : label}
    </button>
  );
}
