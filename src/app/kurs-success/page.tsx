'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';

type Status = 'loading' | 'success-course' | 'success-lehrgang' | 'error';

function KursSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  const courseSlug = searchParams.get('course');
  const lehrgangSlug = searchParams.get('lehrgang');
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    if (!sessionId || (!courseSlug && !lehrgangSlug)) {
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
        if (data.success && data.type === 'lehrgang') {
          setStatus('success-lehrgang');
          // Kein Auto-Redirect — User soll auf Zertifikatsübersicht klicken können
        } else if (data.success) {
          setStatus('success-course');
          setTimeout(() => router.push(`/${courseSlug}`), 3000);
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }, [sessionId, courseSlug, lehrgangSlug, router]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .success-page {
          min-height: 100vh; background: #f8f9fa;
          display: flex; align-items: center; justify-content: center; padding: 80px 20px;
        }
        .success-card {
          background: white; border-radius: 20px; padding: 56px 48px;
          max-width: 520px; width: 100%; text-align: center;
          box-shadow: 0 4px 30px rgba(0,87,168,0.1);
        }
        .success-icon { font-size: 56px; margin-bottom: 20px; }
        .success-title { font-size: 28px; font-weight: 800; color: #1d1d1f; margin-bottom: 10px; }
        .success-text { font-size: 16px; color: #6e6e73; line-height: 1.6; margin-bottom: 24px; }
        .success-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white; padding: 14px 32px; border-radius: 10px;
          font-weight: 700; font-size: 15px; text-decoration: none;
        }
        .success-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: white; color: #1d1d1f; border: 1px solid #1d1d1f;
          padding: 12px 24px; border-radius: 10px;
          font-weight: 600; font-size: 14px; text-decoration: none;
          margin-left: 10px;
        }
        .loading-spinner {
          width: 40px; height: 40px; border: 3px solid #e8e8ed;
          border-top-color: #0057a8; border-radius: 50%;
          animation: spin 0.8s linear infinite; margin: 0 auto 24px;
        }
        .success-unlocked {
          background: #f0f9f6; border: 1px solid #bde5d4;
          border-radius: 10px; padding: 14px 18px; margin-bottom: 24px;
          font-size: 13px; color: #0d5c42; line-height: 1.6;
          text-align: left;
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
          {status === 'success-course' && (
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
          {status === 'success-lehrgang' && (
            <>
              <div className="success-icon">🎓</div>
              <div className="success-title">KI-Intensivprogramm freigeschaltet!</div>
              <p className="success-text">
                Alle drei Kurse deines Lehrgangs stehen jetzt bereit. Nach Abschluss kannst du
                auf Wunsch eine Teilnahmebestätigung als PDF herunterladen.
              </p>
              <div className="success-unlocked">
                <strong>✓ Freigeschaltet:</strong> 3 Kurse mit insgesamt 15–18 h Lerninhalt · 180 Tage Zugang · Teilnahmebestätigung auf Wunsch
              </div>
              <Link href="/kurse" className="success-btn">
                Zu meinen Kursen →
              </Link>
              <Link href="/zertifikat" className="success-btn-secondary">
                Zertifikatsstatus
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
