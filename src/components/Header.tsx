'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface HeaderProps {
  showNav?: boolean;
  userEmail?: string;
}

/**
 * Top-Navigation für alle Seiten.
 *
 * - Shortcuts zu den Haupt-Zielen (Kurse, Zertifikatslehrgänge, Für Gemeinden)
 * - Aktuelle Seite wird im Menü hervorgehoben
 * - Eingeloggte User sehen zusätzlich den Zertifikat-Link + E-Mail + Logout
 * - Mobile: kompaktes Burger-Menü mit denselben Links
 */
export default function Header({ showNav = true, userEmail }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [loggingOut, setLoggingOut] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  }

  // Mobile-Menü bei Pfadwechsel schliessen
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navLinks: { href: string; label: string }[] = [
    { href: '/kurse', label: 'Kurse' },
    { href: '/zertifikatslehrgang', label: 'Zertifikatslehrgänge' },
    { href: '/fuer-gemeinden', label: 'Für Gemeinden' },
  ];
  if (userEmail) {
    navLinks.push({ href: '/zertifikat', label: 'Zertifikat' });
  }

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname?.startsWith(href));

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
          gap: 4px;
        }
        .kk-nav-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #555;
          padding: 8px 14px;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
          text-decoration: none;
          white-space: nowrap;
        }
        .kk-nav-link:hover {
          color: #1A1A1A;
          background: #f5f5f0;
        }
        .kk-nav-link.active {
          color: #0057a8;
          background: #e7f0fa;
        }
        .kk-nav-separator {
          width: 1px;
          height: 20px;
          background: #e0e0da;
          margin: 0 8px;
        }
        .kk-nav-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #1A1A1A;
          padding: 8px 18px;
          border: 1.5px solid #1A1A1A;
          border-radius: 50px;
          cursor: pointer;
          background: transparent;
          transition: all 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .kk-nav-btn:hover {
          background: #1A1A1A;
          color: #fff;
        }
        .kk-nav-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .kk-nav-btn-primary:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(0,87,168,0.3);
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

        /* Burger */
        .kk-burger {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          width: 40px; height: 40px;
          align-items: center;
          justify-content: center;
        }
        .kk-burger svg { width: 22px; height: 22px; }

        /* Mobile drawer */
        .kk-mobile-menu {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: white;
          border-bottom: 1px solid #e0e0da;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          padding: 12px 20px 20px;
          z-index: 999;
          flex-direction: column;
          gap: 2px;
        }
        .kk-mobile-menu.open { display: flex; }
        .kk-mobile-link {
          display: block;
          padding: 12px 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #1A1A1A;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.15s;
        }
        .kk-mobile-link:hover { background: #f5f5f0; }
        .kk-mobile-link.active { background: #e7f0fa; color: #0057a8; }
        .kk-mobile-divider {
          height: 1px; background: #e8e8ed; margin: 8px 0;
        }
        .kk-mobile-email {
          font-size: 0.8rem; color: #6e6e73;
          padding: 8px 14px;
        }

        @media (max-width: 900px) {
          .kk-header { padding: 0 1rem; }
          .kk-nav { display: none; }
          .kk-burger { display: flex; }
        }
      `}} />
      <header className="kk-header">
        <Link href="/" className="kk-logo">
          <span className="kk-logo-wordmark">SPEKTRUM</span>
          <span className="kk-logo-divider" />
          <span className="kk-logo-sub">KI-Kurse</span>
        </Link>

        {showNav && (
          <>
            {/* Desktop Navigation */}
            <nav className="kk-nav" aria-label="Hauptnavigation">
              {navLinks.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`kk-nav-link${isActive(l.href) ? ' active' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
              <span className="kk-nav-separator" />
              {userEmail ? (
                <>
                  <span className="kk-user-email" title={userEmail}>{userEmail}</span>
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
                  <Link href="/login" className="kk-nav-btn">Login</Link>
                  <Link href="/register" className="kk-nav-btn-primary">Kostenlos starten</Link>
                </>
              )}
            </nav>

            {/* Mobile Burger */}
            <button
              className="kk-burger"
              aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
                </svg>
              )}
            </button>

            {/* Mobile Drawer */}
            <div className={`kk-mobile-menu${mobileOpen ? ' open' : ''}`}>
              {navLinks.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`kk-mobile-link${isActive(l.href) ? ' active' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="kk-mobile-divider" />
              {userEmail ? (
                <>
                  <div className="kk-mobile-email">{userEmail}</div>
                  <button
                    className="kk-mobile-link"
                    style={{ textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', width: '100%' }}
                    onClick={handleLogout}
                    disabled={loggingOut}
                  >
                    {loggingOut ? '…' : 'Ausloggen'}
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="kk-mobile-link">Login</Link>
                  <Link href="/register" className="kk-mobile-link" style={{ color: '#0057a8' }}>Kostenlos starten →</Link>
                </>
              )}
            </div>
          </>
        )}
      </header>
      <div style={{ height: 64 }} />
    </>
  );
}
