'use client';

import React, { useState, useEffect, useRef } from 'react';

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
  /**
   * Startet den Checkout automatisch beim Mounten (für den Rücksprung nach
   * Login/Registrierung via ?checkout=1). Der Trigger-Parameter wird dabei aus
   * der URL entfernt, damit ein «Zurück» im Browser keine Endlosschleife auslöst.
   */
  autoStart?: boolean;
}

export default function BuyButton({
  courseSlug,
  lehrgangSlug,
  tier = 'basis',
  label,
  color = '#0057a8',
  fullWidth = false,
  variant = 'custom',
  autoStart = false,
}: Props) {
  const [loading, setLoading] = useState(false);
  const autoStarted = useRef(false);

  // Auto-Checkout nach Login/Registrierung: genau einmal feuern.
  useEffect(() => {
    if (autoStart && !autoStarted.current) {
      autoStarted.current = true;
      // ?checkout aus der URL entfernen, damit «Zurück» nicht erneut auslöst.
      try {
        window.history.replaceState({}, '', window.location.pathname);
      } catch {}
      handleBuy();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart]);

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
        // Nicht eingeloggt → zur Registrierung (fängt neue UND bestehende Konten ab).
        // ?checkout=1 sorgt dafür, dass der Kauf nach dem Magic-Link automatisch startet.
        const ret = lehrgangSlug
          ? `/zertifikatslehrgang?checkout=1#${lehrgangSlug}`
          : `/${courseSlug ?? 'kurse'}?checkout=1`;
        window.location.href = `/register?redirect=${encodeURIComponent(ret)}`;
      } else if (res.status === 503) {
        // Stripe-Preis noch nicht konfiguriert
        alert('Dieser Kauf ist momentan noch nicht buchbar. Bitte melde dich direkt bei info@spekt.ch – wir melden uns innerhalb von 24 h.');
        setLoading(false);
      } else {
        alert(data.error || 'Fehler beim Checkout. Bitte nochmals versuchen oder info@spekt.ch kontaktieren.');
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
