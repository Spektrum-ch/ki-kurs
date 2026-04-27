'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PATHS = [
  {
    emoji: '👤',
    label: 'Einzelperson',
    heading: 'Ich lerne für mich',
    desc: 'Sie buchen direkt online – kein Gespräch nötig. Wählen Sie ein KI-Intensivprogramm und starten Sie sofort.',
    price: 'Ab CHF 290',
    priceNote: 'Basis-Zugang · 180 Tage · Teilnahmebestätigung auf Wunsch',
    cta: 'Programm wählen',
    href: '/zertifikatslehrgang',
    highlight: false,
  },
  {
    emoji: '🏛️',
    label: 'Team, Gemeinde oder Büro',
    heading: 'Wir buchen für mehrere Personen',
    desc: 'Mehrere Zugänge, eine Rechnung. Jede Person lernt in ihrem Tempo und erhält auf Wunsch eine persönliche Teilnahmebestätigung.',
    price: 'CHF 2\'900',
    priceNote: 'Pro KI-Intensivprogramm · unbegrenzte Plätze · Sammelrechnung',
    cta: 'Anfrage senden',
    href: '#anfrage',
    highlight: true,
  },
];

const FAQS = [
  {
    q: 'Wie viele Personen kann ein Team-Zugang nutzen?',
    a: 'Unbegrenzt viele – der Business-Zugang (CHF 2\'900 pro KI-Intensivprogramm) ist als Teamlizenz konzipiert. Jede Person erhält einen eigenen Login mit ihrer geschäftlichen E-Mail-Adresse.',
  },
  {
    q: 'Wie loggen sich die Teilnehmer ein?',
    a: 'Per Magic-Link – ein Klick, kein Passwort. Jeder erhält eine E-Mail mit persönlichem Zugangslink. Der Login bleibt 60 Tage gültig.',
  },
  {
    q: 'Gibt es eine Sammelrechnung?',
    a: 'Ja. Bei Team-Buchungen erhalten Sie eine einzige Rechnung mit 30 Tagen Zahlungsziel – auf Ihren Firmen- oder Gemeinde-Namen.',
  },
  {
    q: 'Was brauchen Sie von uns zur Freischaltung?',
    a: 'Nach Rechnungsbegleichung liefern Sie uns eine Liste mit Namen und E-Mail-Adressen der Teilnehmer. Wir schalten innerhalb von 1 Werktag frei.',
  },
  {
    q: 'Wie lange haben die Teilnehmer Zugang?',
    a: '180 Tage ab individueller Freischaltung – unabhängig davon, wann die Person tatsächlich startet.',
  },
  {
    q: 'Gibt es einen Kickoff-Call?',
    a: 'Ja – optional. Bei Interesse organisieren wir einen 30-minütigen Einführungs-Call mit Andreas Rupf. Einfach in der Anfrage erwähnen.',
  },
];

export default function FuerGemeindenPage() {
  const mailtoBody = encodeURIComponent(
    `Guten Tag Herr Rupf\n\nWir interessieren uns für eine Team-Buchung der SPEKTRUM KI-Intensivprogramme.\n\nGemeinde / Firma:\nAnzahl Personen (ungefähr):\nGewünschtes Programm (z.B. KI für Verwaltung & Gemeinden):\nGewünschter Starttermin:\nKickoff-Call gewünscht: ja / nein\n\nBitte kontaktieren Sie uns mit einer Offerte.\n\nFreundliche Grüsse`
  );
  const mailto = `mailto:andreas.rupf@spekt.ch?subject=Anfrage%20Team-Buchung%20KI-Intensivprogramm&body=${mailtoBody}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        main.fg-main { background: #fbfbfd; }

        /* Hero */
        .fg-hero {
          background: #1A1A1A;
          padding: 96px 24px 72px;
          text-align: center;
          color: white;
        }
        .fg-hero-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #00C853; margin-bottom: 18px;
          display: inline-block;
        }
        .fg-hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 800; letter-spacing: -2px;
          line-height: 1.1; margin: 0 auto 20px;
          max-width: 780px;
        }
        .fg-hero p {
          font-size: 1.08rem;
          color: rgba(255,255,255,0.7);
          max-width: 580px; margin: 0 auto;
          line-height: 1.65;
        }

        /* Für-wen Section */
        .fg-paths-section {
          max-width: 900px; margin: 0 auto;
          padding: 72px 24px 56px;
        }
        .fg-paths-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #00C853; margin-bottom: 14px;
          display: block; text-align: center;
        }
        .fg-paths-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800; letter-spacing: -1.5px;
          text-align: center; margin: 0 0 48px;
          color: #1A1A1A;
        }
        .fg-paths-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .fg-path {
          background: white;
          border: 1.5px solid #e0e0da;
          border-radius: 20px;
          padding: 40px 36px;
          display: flex; flex-direction: column;
          transition: box-shadow 0.2s;
        }
        .fg-path.highlight {
          border-color: #00C853;
          box-shadow: 0 16px 56px rgba(0,200,83,0.12);
        }
        .fg-path-emoji {
          font-size: 2.4rem;
          margin-bottom: 16px;
          line-height: 1;
        }
        .fg-path-chip {
          display: inline-block;
          background: #f5f5f0;
          color: #555;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 1.2px; text-transform: uppercase;
          padding: 5px 12px; border-radius: 50px;
          margin-bottom: 16px; width: fit-content;
        }
        .fg-path.highlight .fg-path-chip {
          background: rgba(0,200,83,0.12);
          color: #00C853;
        }
        .fg-path-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.45rem; font-weight: 800;
          color: #1A1A1A; letter-spacing: -0.5px;
          margin-bottom: 12px;
        }
        .fg-path-desc {
          font-size: 0.93rem; color: #555;
          line-height: 1.65; flex: 1;
          margin-bottom: 28px;
        }
        .fg-path-price {
          margin-bottom: 20px;
          padding: 16px 0;
          border-top: 1px solid #e0e0da;
        }
        .fg-path-price-main {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem; font-weight: 800;
          color: #1A1A1A; letter-spacing: -1px;
          line-height: 1; margin-bottom: 6px;
        }
        .fg-path-price-note {
          font-size: 0.78rem; color: #888;
          line-height: 1.55;
        }
        .fg-path-btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 8px;
          padding: 14px 24px; border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          text-decoration: none;
          transition: all 0.2s;
          color: #1A1A1A; background: #f5f5f0;
          border: 2px solid transparent;
        }
        .fg-path-btn:hover {
          background: #1A1A1A; color: white;
        }
        .fg-path.highlight .fg-path-btn {
          background: #00C853; color: white;
        }
        .fg-path.highlight .fg-path-btn:hover {
          background: #1A1A1A;
        }

        /* Ablauf */
        .fg-process-section {
          background: #f5f5f0;
          border-top: 1px solid #e0e0da;
          padding: 72px 24px;
        }
        .fg-process-inner {
          max-width: 820px; margin: 0 auto;
        }
        .fg-process-inner h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 800; letter-spacing: -1px;
          margin-bottom: 36px; text-align: center;
          color: #1A1A1A;
        }
        .fg-steps { display: grid; gap: 16px; }
        .fg-step {
          display: grid; grid-template-columns: 44px 1fr; gap: 20px;
          align-items: start;
          padding: 20px 24px;
          background: white;
          border: 1px solid #e0e0da;
          border-radius: 12px;
        }
        .fg-step-num {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          background: #1A1A1A; color: white;
          border-radius: 50%;
          font-family: 'Space Grotesk', sans-serif; font-weight: 700;
        }
        .fg-step-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: 1rem;
          color: #1A1A1A; margin-bottom: 4px;
        }
        .fg-step-desc { color: #555; font-size: 0.88rem; line-height: 1.6; }

        /* Anfrage-Anker */
        .fg-anfrage-section {
          padding: 72px 24px;
          max-width: 680px; margin: 0 auto;
          text-align: center;
        }
        .fg-anfrage-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #00C853; margin-bottom: 14px;
          display: block;
        }
        .fg-anfrage-section h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 800; letter-spacing: -1px;
          margin-bottom: 14px; color: #1A1A1A;
        }
        .fg-anfrage-section p {
          color: #555; font-size: 0.98rem;
          line-height: 1.65; margin-bottom: 32px;
        }
        .fg-anfrage-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 16px 32px; border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.88rem; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          color: white; background: #1A1A1A;
          text-decoration: none; border: 2px solid #1A1A1A;
          transition: all 0.2s;
        }
        .fg-anfrage-btn:hover {
          background: #00C853; border-color: #00C853;
          transform: translateY(-2px);
        }
        .fg-anfrage-note {
          font-size: 0.8rem; color: #888;
          margin-top: 14px;
        }

        /* FAQ */
        .fg-faq-section {
          background: white;
          padding: 72px 24px;
          border-top: 1px solid #e0e0da;
        }
        .fg-faq-inner { max-width: 820px; margin: 0 auto; }
        .fg-faq-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #00C853; margin-bottom: 14px; display: block;
        }
        .fg-faq-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 800; color: #1A1A1A;
          letter-spacing: -1px; margin-bottom: 36px;
        }
        .fg-faq-item {
          border-bottom: 1px solid #e0e0da; padding: 22px 0;
        }
        .fg-faq-item:first-of-type { border-top: 1px solid #e0e0da; }
        .fg-faq-q {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.02rem; font-weight: 700;
          color: #1A1A1A; margin: 0 0 10px;
          cursor: pointer; list-style: none;
          display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
        }
        .fg-faq-q::-webkit-details-marker { display: none; }
        .fg-faq-q::after {
          content: "+"; font-size: 1.4rem; font-weight: 400;
          color: #00C853; flex-shrink: 0;
        }
        details[open] .fg-faq-q::after { content: "−"; }
        .fg-faq-a { font-size: 0.94rem; color: #444; line-height: 1.7; margin: 8px 0 4px; }

        @media (max-width: 700px) {
          .fg-paths-grid { grid-template-columns: 1fr; }
        }
      `}} />

      <Header />

      <main className="fg-main">

        {/* Hero */}
        <section className="fg-hero">
          <span className="fg-hero-label">Für Gemeinden &amp; Planungsbüros</span>
          <h1>KI-Weiterbildung – für Sie oder Ihr ganzes Team</h1>
          <p>
            Einzeln direkt buchen oder als Team anfragen. Kein Kleingedrucktes, keine Lizenzpakete.
          </p>
        </section>

        {/* Für wen? */}
        <section className="fg-paths-section">
          <span className="fg-paths-label">Für wen bist du?</span>
          <h2 className="fg-paths-heading">So funktioniert's</h2>
          <div className="fg-paths-grid">
            {PATHS.map(p => (
              <div key={p.label} className={`fg-path${p.highlight ? ' highlight' : ''}`}>
                <div className="fg-path-emoji">{p.emoji}</div>
                <div className="fg-path-chip">{p.label}</div>
                <div className="fg-path-heading">{p.heading}</div>
                <p className="fg-path-desc">{p.desc}</p>
                <div className="fg-path-price">
                  <div className="fg-path-price-main">{p.price}</div>
                  <div className="fg-path-price-note">{p.priceNote}</div>
                </div>
                {p.href.startsWith('#') ? (
                  <a href={p.href} className="fg-path-btn">
                    {p.cta}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                ) : (
                  <Link href={p.href} className="fg-path-btn">
                    {p.cta}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Ablauf Team-Buchung */}
        <section className="fg-process-section">
          <div className="fg-process-inner">
            <h2>So läuft eine Team-Buchung ab</h2>
            <div className="fg-steps">
              <div className="fg-step">
                <div className="fg-step-num">1</div>
                <div>
                  <div className="fg-step-title">Anfrage per E-Mail</div>
                  <div className="fg-step-desc">Sie schreiben uns: Gemeinde oder Firma, ungefähre Teilnehmerzahl und gewünschtes KI-Intensivprogramm. Wir antworten innerhalb von 1 Werktag.</div>
                </div>
              </div>
              <div className="fg-step">
                <div className="fg-step-num">2</div>
                <div>
                  <div className="fg-step-title">Offerte &amp; Rechnung</div>
                  <div className="fg-step-desc">Sie erhalten eine Offerte auf Ihren Firmen- oder Gemeinde-Namen, nach Annahme mit 30 Tagen Zahlungsziel.</div>
                </div>
              </div>
              <div className="fg-step">
                <div className="fg-step-num">3</div>
                <div>
                  <div className="fg-step-title">Zugänge freischalten</div>
                  <div className="fg-step-desc">Nach Zahlungseingang liefern Sie uns die E-Mail-Adressen der Teilnehmer. Wir schalten innerhalb von 1 Werktag frei – jede Person erhält einen persönlichen Login-Link.</div>
                </div>
              </div>
              <div className="fg-step">
                <div className="fg-step-num">4</div>
                <div>
                  <div className="fg-step-title">Lernen – je nach Tempo</div>
                  <div className="fg-step-desc">Jede Person startet selbstgesteuert und hat 180 Tage Zeit. Auf Wunsch gibt es einen kurzen Kickoff-Call mit Andreas Rupf.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anfrage-CTA */}
        <section id="anfrage" className="fg-anfrage-section">
          <span className="fg-anfrage-label">Team-Buchung</span>
          <h2>Offerte anfordern</h2>
          <p>
            Schreiben Sie uns kurz wer Sie sind, wie viele Personen teilnehmen sollen und welches KI-Intensivprogramm Sie interessiert. Wir melden uns innert 24 Stunden mit einer Offerte.
          </p>
          <a href={mailto} className="fg-anfrage-btn">
            Anfrage senden
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <p className="fg-anfrage-note">Oder direkt: andreas.rupf@spekt.ch</p>
        </section>

        {/* FAQ */}
        <section className="fg-faq-section">
          <div className="fg-faq-inner">
            <span className="fg-faq-label">Häufige Fragen</span>
            <h2 className="fg-faq-heading">Praktisches zur Team-Buchung</h2>
            {FAQS.map((item, i) => (
              <details key={i} className="fg-faq-item" {...(i < 2 ? { open: true } : {})}>
                <summary className="fg-faq-q">{item.q}</summary>
                <p className="fg-faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
