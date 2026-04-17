'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError('');
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) { setError(data.error || 'Fehler.'); return; }
    setDone(true);
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .auth-page { min-height:100vh; background:#f8f9fa; display:flex; align-items:center; justify-content:center; padding:80px 20px 40px; }
        .auth-card { background:white; border-radius:20px; padding:40px; width:100%; max-width:420px; box-shadow:0 4px 30px rgba(0,87,168,0.1); }
        .auth-title { font-size:26px; font-weight:800; color:#1d1d1f; margin-bottom:6px; letter-spacing:-0.01em; }
        .auth-subtitle { font-size:15px; color:#6e6e73; margin-bottom:32px; }
        .auth-label { display:block; font-size:13px; font-weight:600; color:#1d1d1f; margin-bottom:6px; }
        .auth-input { width:100%; padding:12px 14px; border:1.5px solid #d2d2d7; border-radius:10px; font-size:15px; color:#1d1d1f; outline:none; transition:border 0.15s; margin-bottom:18px; font-family:inherit; }
        .auth-input:focus { border-color:#0057a8; }
        .auth-btn { width:100%; padding:14px; background:linear-gradient(135deg,#0057a8 0%,#00a896 100%); color:white; font-size:16px; font-weight:700; border:none; border-radius:12px; cursor:pointer; }
        .auth-btn:disabled { opacity:0.6; cursor:not-allowed; }
        .auth-error { background:#fff0f0; color:#c0392b; border-radius:10px; padding:12px 14px; font-size:14px; margin-bottom:18px; }
        .auth-success { background:#f0fff8; color:#006b5f; border-radius:10px; padding:20px; font-size:15px; text-align:center; line-height:1.5; }
        .auth-success-icon { font-size:36px; margin-bottom:12px; }
        .auth-switch { text-align:center; margin-top:20px; font-size:14px; color:#6e6e73; }
        .auth-switch a { color:#0057a8; font-weight:600; }
      `}} />
      <Header showNav={false} />
      <div className="auth-page">
        <div className="auth-card">
          <h1 className="auth-title">Willkommen zurück</h1>
          <p className="auth-subtitle">Gib deine E-Mail ein – du erhältst einen Magic-Link.</p>
          {done ? (
            <div className="auth-success">
              <div className="auth-success-icon">📬</div>
              <strong>Link gesendet!</strong><br /><br />
              Prüfe dein E-Mail-Postfach und klicke auf den Login-Link.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && <div className="auth-error">{error}</div>}
              <label className="auth-label">E-Mail-Adresse</label>
              <input className="auth-input" type="email" placeholder="deine@email.ch" value={email} onChange={e => setEmail(e.target.value)} required />
              <button className="auth-btn" type="submit" disabled={loading}>
                {loading ? 'Wird gesendet...' : 'Login-Link senden →'}
              </button>
            </form>
          )}
          <div className="auth-switch">
            Noch kein Konto? <Link href="/register">Kostenlos registrieren</Link>
          </div>
        </div>
      </div>
    </>
  );
}
