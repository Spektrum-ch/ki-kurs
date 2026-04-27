'use client';

import { useEffect } from 'react';

/**
 * Next.js Root-Error-Boundary: fängt alle nicht behandelten React-Fehler
 * in jedem Route-Segment ab. Sendet Report an /api/_error und zeigt
 * eine benutzerfreundliche Fallback-UI.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Chunk-Load-Fehler: Browser-Cache hat alte JS-Chunks, die nach neuem Build weg sind.
    // Einmalig automatisch neu laden, damit der User nicht im Fehlerbildschirm hängenbleibt.
    // sessionStorage verhindert Reload-Loop, falls der Fehler nicht am Cache liegt.
    const isChunkError = /Loading chunk|ChunkLoadError|Failed to fetch dynamically imported module/i.test(
      error.message || ''
    );
    if (isChunkError && typeof window !== 'undefined') {
      const reloadKey = 'kl-chunk-reload';
      if (!sessionStorage.getItem(reloadKey)) {
        sessionStorage.setItem(reloadKey, String(Date.now()));
        window.location.reload();
        return;
      }
    }

    fetch('/api/report-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        url: typeof window !== 'undefined' ? window.location.pathname : '',
        component: 'global-error',
      }),
    }).catch(() => {
      /* Reporting darf niemals den Fehlerbildschirm blockieren */
    });
  }, [error]);

  return (
    <html lang="de">
      <body style={{ fontFamily: 'Inter, -apple-system, sans-serif', margin: 0, background: '#f8f9fa' }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
        }}>
          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: '48px 40px',
            maxWidth: 480,
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 4px 30px rgba(0,87,168,0.08)',
          }}>
            <div style={{ fontSize: 42, marginBottom: 16 }}>⚠️</div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: '#1d1d1f', marginBottom: 10 }}>
              Etwas ist schiefgelaufen
            </h1>
            <p style={{ fontSize: 15, color: '#6e6e73', lineHeight: 1.6, marginBottom: 24 }}>
              Wir haben den Fehler automatisch registriert und die Entwickler informiert.
              Bitte versuchen Sie es in einem Moment erneut.
            </p>
            <button
              onClick={() => reset()}
              style={{
                background: 'linear-gradient(135deg, #0057a8 0%, #00a896 100%)',
                color: 'white',
                border: 'none',
                padding: '13px 28px',
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                marginRight: 10,
              }}
            >
              Nochmals versuchen
            </button>
            <a
              href="/kurse"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                borderRadius: 10,
                border: '1px solid #1d1d1f',
                color: '#1d1d1f',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Zur Übersicht
            </a>
            <p style={{ fontSize: 12, color: '#999', marginTop: 24 }}>
              Bei anhaltenden Problemen: <a href="mailto:andreas.rupf@spekt.ch" style={{ color: '#0057a8' }}>andreas.rupf@spekt.ch</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
