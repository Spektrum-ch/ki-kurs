'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';

function RegisterForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(''); setMessage('');

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, redirect }),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) { setError(data.error || 'Fehler.'); return; }
    setDone(true);
    setMessage(data.message);
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .auth-page {
          min-height: 100vh;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px 40px;
        }
        .auth-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 4px 30px rgba(0,87,168,0.1);
        }
        .auth-title {
          font-size: 26px;
          font-weight: 800;
          color: #1d1d1f;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .auth-subtitle {
          font-size: 15px;
          color: #6e6e73;
          margin-bottom: 32px;
        }
        .auth-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #1d1d1f;
          margin-bottom: 6px;
        }
        .auth-input {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid #d2d2d7;
          border-radius: 10px;
          font-size: 15px;
          color: #1d1d1f;
          outline: none;
          transition: border 0.15s;
          margin-bottom: 18px;
          font-family: inherit;
        }
        .auth-input:focus { border-color: #0057a8; }
        .auth-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white;
          font-size: 16px;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
        }
        .auth-btn:hover { opacity: 0.92; transform: translateY(-1px); }
        .auth-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .auth-error {
          background: #fff0f0;
          color: #c0392b;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          margin-bottom: 18px;
        }
        .auth-success {
          background: #f0fff8;
          color: #006b5f;
          border-radius: 10px;
          padding: 20px;
          font-size: 15px;
          text-align: center;
          line-height: 1.5;
        }
        .auth-success-icon { font-size: 36px; margin-bottom: 12px; }
        .auth-switch {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #6e6e73;
        }
        .auth-switch a { color: #0057a8; font-weight: 600; }
        .auth-free-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f0fff8;
          color: #006b5f;
          border: 1px solid #00a89640;
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
        }
      `}} />
      <Header showNav={false} />
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-free-badge">✅ 100% kostenlos</div>
          <h1 className="auth-title">Kurs starten</h1>
          <p className="auth-subtitle">Kein Passwort nötig – du erhältst einen Magic-Link per E-Mail.</p>

          {done ? (
            <div className="auth-success">
              <div className="auth-success-icon">📬</div>
              <strong>Fast geschafft!</strong><br /><br />
              {message}<br /><br />
              Prüfe dein E-Mail-Postfach und klicke auf den Link.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && <div className="auth-error">{error}</div>}
              <label className="auth-label">Dein Name</label>
              <input
                className="auth-input"
                type="text"
                placeholder="Anna Muster"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <label className="auth-label">E-Mail-Adresse</label>
              <input
                className="auth-input"
                type="email"
                placeholder="deine@email.ch"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button className="auth-btn" type="submit" disabled={loading}>
                {loading ? 'Wird gesendet...' : 'Kostenlos registrieren →'}
              </button>
            </form>
          )}

          <div className="auth-switch">
            Bereits registriert? <Link href={redirect ? `/login?redirect=${encodeURIComponent(redirect)}` : '/login'}>Einloggen</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px' }}>Laden...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
