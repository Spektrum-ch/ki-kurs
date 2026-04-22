'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';

function KursSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  const courseSlug = searchParams.get('course');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (!sessionId || !courseSlug) {
      setStatus('error');
      return;
    }

    fetch('/api/stripe/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          setStatus('success');
          setTimeout(() => router.push(`/${courseSlug}`), 3000);
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }, [sessionId, courseSlug, router]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .success-page {
          min-height: 100vh; background: #f8f9fa;
          display: flex; align-items: center; justify-content: center; padding: 80px 20px;
        }
        .success-card {
          background: white; border-radius: 20px; padding: 56px 48px;
          max-width: 480px; width: 100%; text-align: center;
          box-shadow: 0 4px 30px rgba(0,87,168,0.1);
        }
        .success-icon { font-size: 56px; margin-bottom: 20px; }
        .success-title { font-size: 28px; font-weight: 800; color: #1d1d1f; margin-bottom: 10px; }
        .success-text { font-size: 16px; color: #6e6e73; line-height: 1.6; margin-bottom: 32px; }
        .success-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white; padding: 14px 32px; border-radius: 10px;
          font-weight: 700; font-size: 15px; text-decoration: none;
        }
        .loading-spinner {
          width: 40px; height: 40px; border: 3px solid #e8e8ed;
          border-top-color: #0057a8; border-radius: 50%;
          animation: spin 0.8s linear infinite; margin: 0 auto 24px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}} />
      <div className="success-page">
        <div className="success-card">
          {status === 'loading' && (
            <>
              <div className="loading-spinner" />
              <div className="success-title">Zahlung wird bestätigt…</div>
              <p className="success-text">Einen Moment bitte.</p>
            </>
          )}
          {status === 'success' && (
            <>
              <div className="success-icon">🎉</div>
              <div className="success-title">Zugang freigeschaltet!</div>
              <p className="success-text">
                Dein Kurs ist jetzt verfügbar. Du wirst automatisch weitergeleitet…
              </p>
              <Link href={`/${courseSlug}`} className="success-btn">
                Jetzt starten →
              </Link>
            </>
          )}
          {status === 'error' && (
            <>
              <div className="success-icon">⚠️</div>
              <div className="success-title">Etwas ist schiefgelaufen</div>
              <p className="success-text">
                Bitte wende dich an <a href="mailto:info@spekt.ch">info@spekt.ch</a> mit deiner Bestellnummer.
              </p>
              <Link href="/kurse" className="success-btn">
                Zurück zu den Kursen
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default function KursSuccessPage() {
  return (
    <>
      <Header showNav={false} />
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px' }}>Laden…</div>}>
        <KursSuccessContent />
      </Suspense>
    </>
  );
}
