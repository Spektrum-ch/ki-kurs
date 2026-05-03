import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .ft {
          background: #1A1A1A;
          color: rgba(255,255,255,0.45);
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 13px;
        }
        .ft-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 32px 48px;
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 48px 80px;
          align-items: start;
        }
        /* --- Brand --- */
        .ft-brand-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 14px;
          display: inline-block;
        }
        .ft-brand-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          max-width: 300px;
          margin-bottom: 10px;
        }
        .ft-brand-tagline {
          font-size: 12px;
          color: rgba(255,255,255,0.25);
          font-style: italic;
          line-height: 1.6;
          max-width: 280px;
        }
        .ft-social {
          display: flex;
          gap: 10px;
          margin-top: 22px;
        }
        .ft-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .ft-social-link:hover {
          border-color: #00C853;
          color: #00C853;
        }
        /* --- Columns --- */
        .ft-col-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 16px;
        }
        .ft-col-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ft-col-links a {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .ft-col-links a:hover { color: #F5E642; }
        /* --- Bottom bar --- */
        .ft-bar {
          border-top: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          padding: 20px 32px;
          font-size: 12px;
          color: rgba(255,255,255,0.25);
        }

        @media (max-width: 720px) {
          .ft-inner {
            grid-template-columns: 1fr 1fr;
            gap: 40px 32px;
          }
          .ft-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .ft-inner { grid-template-columns: 1fr; }
          .ft-brand { grid-column: 1; }
        }
      `}} />

      <footer className="ft">
        <div className="ft-inner">

          {/* Brand */}
          <div className="ft-brand">
            <div className="ft-brand-name">SPEKTRUM</div>
            <p className="ft-brand-desc">
              KI-Weiterbildung für Raumplaner, Architekten und Gemeinden – praxisnah und zertifiziert.
            </p>
            <p className="ft-brand-tagline">
              KI soll unterstützen, nicht ersetzen. Der Mensch bleibt Autor seiner Entscheidungen.
            </p>
            <div className="ft-social">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/andreasrupf/" target="_blank" rel="noopener noreferrer" className="ft-social-link" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Website */}
              <a href="https://spekt.ch" target="_blank" rel="noopener noreferrer" className="ft-social-link" aria-label="SPEKTRUM Website">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </a>
              {/* E-Mail */}
              <a href="mailto:kurs@spekt.ch" className="ft-social-link" aria-label="E-Mail">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Plattform */}
          <div>
            <div className="ft-col-title">Plattform</div>
            <div className="ft-col-links">
              <Link href="/kurse">Alle Kurse</Link>
              <Link href="/kurs">KI für die Planungswelt</Link>
              <Link href="/kurs-allgemein">KI-Grundkurs: Einsteiger</Link>
              <Link href="/kurs-gemeinden">KI für Gemeinden</Link>
              <Link href="/kurs-buero">KI im Büroalltag</Link>
              <Link href="/register">Registrieren</Link>
            </div>
          </div>

          {/* Unternehmen */}
          <div>
            <div className="ft-col-title">Unternehmen</div>
            <div className="ft-col-links">
              <a href="https://spekt.ch" target="_blank" rel="noopener noreferrer">SPEKTRUM Partner GmbH</a>
              <a href="https://spekt.ch/ki-beratung.html" target="_blank" rel="noopener noreferrer">KI-Beratung</a>
              <a href="https://spekt.ch/ki-workshop.html" target="_blank" rel="noopener noreferrer">Workshops</a>
              <a href="https://minu-ai.ch" target="_blank" rel="noopener noreferrer">MINU-AI</a>
              <a href="https://interessenabwaegung.ch" target="_blank" rel="noopener noreferrer" title="KI-Interessenabwägung RPG">Interessenabwägung.ch</a>
              <a href="https://bauzonenkapazitaet.ch" target="_blank" rel="noopener noreferrer" title="Bauzonenkapazität berechnen">Bauzonenkapazität.ch</a>
              <a href="https://uvp.interessenabwaegung.ch" target="_blank" rel="noopener noreferrer" title="UVP-Screening mit KI">uvp.interessenabwaegung.ch</a>
              <a href="mailto:kurs@spekt.ch">Kontakt</a>
              <a href="https://spekt.ch/datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutz</a>
              <a href="https://spekt.ch/impressum.html" target="_blank" rel="noopener noreferrer">Impressum</a>
            </div>
          </div>

        </div>

        <div className="ft-bar">
          © {year} SPEKTRUM Partner GmbH · Andreas Rupf · kurs.spekt.ch
        </div>
      </footer>
    </>
  );
}
