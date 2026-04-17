'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  showNav?: boolean;
  userEmail?: string;
}

export default function Header({ showNav = true, userEmail }: HeaderProps) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .kk-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #e0e0da;
          padding: 0 2rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1000;
        }
        .kk-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .kk-logo-wordmark {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1A1A1A;
          line-height: 1;
        }
        .kk-logo-divider {
          width: 1px;
          height: 16px;
          background: #e0e0da;
        }
        .kk-logo-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #555;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .kk-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .kk-nav-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #555;
          padding: 6px 14px;
          border-radius: 50px;
          transition: color 0.2s;
          text-decoration: none;
        }
        .kk-nav-link:hover {
          color: #1A1A1A;
        }
        .kk-nav-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1A1A1A;
          padding: 8px 20px;
          border: 1.5px solid #1A1A1A;
          border-radius: 50px;
          cursor: pointer;
          background: transparent;
          transition: all 0.2s;
          text-decoration: none;
        }
        .kk-nav-btn:hover {
          background: #1A1A1A;
          color: #fff;
        }
        .kk-nav-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: #1A1A1A;
          color: white;
          border: 2px solid #1A1A1A;
          padding: 8px 20px;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .kk-nav-btn-primary:hover {
          background: #00C853;
          border-color: #00C853;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0,200,83,0.3);
        }
        .kk-user-email {
          font-size: 0.75rem;
          color: #555;
          padding: 6px 12px;
          background: #f5f5f0;
          border-radius: 50px;
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border: 1px solid #e0e0da;
        }
      `}} />
      <header className="kk-header">
        <Link href="/" className="kk-logo">
          <span className="kk-logo-wordmark">SPEKTRUM</span>
          <span className="kk-logo-divider" />
          <span className="kk-logo-sub">KI-Kurse</span>
        </Link>
        {showNav && (
          <nav className="kk-nav">
            {userEmail ? (
              <>
                <Link href="/kurse" className="kk-nav-link">Kurse</Link>
                <span className="kk-user-email">{userEmail}</span>
                <button
                  className="kk-nav-btn"
                  onClick={handleLogout}
                  disabled={loggingOut}
                >
                  {loggingOut ? '...' : 'Ausloggen'}
                </button>
              </>
            ) : (
              <>
                <Link href="/kurse" className="kk-nav-link">Kurse</Link>
                <Link href="/login" className="kk-nav-btn">Einloggen</Link>
                <Link href="/register" className="kk-nav-btn-primary">Kostenlos starten</Link>
              </>
            )}
          </nav>
        )}
      </header>
      <div style={{ height: 64 }} />
    </>
  );
}
