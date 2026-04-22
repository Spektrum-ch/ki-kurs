'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';

function MagicLinkContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');
  const redirect = searchParams.get('redirect') || '/kurse';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleConfirm() {
    if (!token) return;
    setLoading(true);
    const res = await fetch('/api/auth/magic-link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, redirect }),
    });
    const data = await res.json();
    if (data.success) {
      router.push(data.redirect || '/kurse');
    } else {
      setError(data.error || 'Ungültiger Link.');
      setLoading(false);
    }
  }

  if (!token) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#c0392b' }}>Kein Token vorhanden.</div>;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .ml-page { min-height:100vh; background:#f8f9fa; display:flex; align-items:center; justify-content:center; padding:80px 20px; }
        .ml-card { background:white; border-radius:20px; padding:48px 40px; max-width:400px; width:100%; text-align:center; box-shadow:0 4px 30px rgba(0,87,168,0.1); }
        .ml-icon { font-size:48px; margin-bottom:20px; }
        .ml-title { font-size:24px; font-weight:700; color:#1d1d1f; margin-bottom:10px; }
        .ml-text { font-size:15px; color:#6e6e73; margin-bottom:32px; line-height:1.5; }
        .ml-btn { width:100%; padding:14px; background:linear-gradient(135deg,#0057a8 0%,#00a896 100%); color:white; font-size:16px; font-weight:700; border:none; border-radius:12px; cursor:pointer; }
        .ml-btn:disabled { opacity:0.6; }
        .ml-error { background:#fff0f0; color:#c0392b; border-radius:10px; padding:12px; font-size:14px; margin-bottom:16px; }
      `}} />
      <div className="ml-page">
        <div className="ml-card">
          <div className="ml-icon">🔐</div>
          <h1 className="ml-title">Login bestätigen</h1>
          <p className="ml-text">Klicke auf den Button, um dich sicher einzuloggen.</p>
          {error && <div className="ml-error">{error}</div>}
          <button className="ml-btn" onClick={handleConfirm} disabled={loading}>
            {loading ? 'Wird eingeloggt...' : 'Jetzt einloggen →'}
          </button>
        </div>
      </div>
    </>
  );
}

export default function MagicLinkPage() {
  return (
    <>
      <Header showNav={false} />
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px' }}>Laden...</div>}>
        <MagicLinkContent />
      </Suspense>
    </>
  );
}
