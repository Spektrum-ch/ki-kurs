'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TIERS = [
  {
    name: 'Team 5',
    seats: 5,
    pricePerCourse: 99,
    pricePerPerson: 20,
    highlight: false,
    features: [
      '5 persönliche Zugänge, je 90 Tage',
      'Sammelrechnung an Gemeinde / Firma',
      'Individuelle Zertifikate für jede Person',
      'E-Mail-Onboarding (1×)',
    ],
  },
  {
    name: 'Team 10',
    seats: 10,
    pricePerCourse: 179,
    pricePerPerson: 18,
    highlight: true,
    badge: 'Beliebteste Wahl',
    features: [
      '10 persönliche Zugänge, je 90 Tage',
      'Sammelrechnung an Gemeinde / Firma',
      'Individuelle Zertifikate für jede Person',
      '30-Min-Kickoff-Call (Zoom) inklusive',
      'Prompt-Bibliothek als PDF',
    ],
  },
  {
    name: 'Team 25',
    seats: 25,
    pricePerCourse: 399,
    pricePerPerson: 16,
    highlight: false,
    features: [
      '25 persönliche Zugänge, je 90 Tage',
      'Sammelrechnung an Gemeinde / Firma',
      'Individuelle Zertifikate für jede Person',
      '60-Min-Kickoff + Abschluss-Call (Zoom)',
      'Prompt-Bibliothek als PDF',
      'Zugriff auf monatliche Q&A-Session',
    ],
  },
];

const POPULAR_COURSES = [
  { title: 'KI für Gemeinden', price: 29, level: 'Fortgeschritten', href: '/kurs-gemeinden' },
  { title: 'KI-Strategie für Gemeinden', price: 39, level: 'Experte', href: '/kurs-strategie' },
  { title: 'KI im Büroalltag', price: 19, level: 'Einsteiger', href: '/kurs-buero' },
  { title: 'KI für die Planungswelt', price: 19, level: 'Einsteiger', href: '/kurs' },
];

export default function FuerGemeindenPage() {
  const mailtoBody = encodeURIComponent(
    `Guten Tag Herr Rupf\n\nWir interessieren uns für eine Team-Lizenz der SPEKTRUM KI-Kurse.\n\nGemeinde / Firma:\nAnzahl Personen:\nGewünschter Kurs:\nGewünschter Starttermin:\n\nBitte kontaktieren Sie uns mit einer Offerte.\n\nFreundliche Grüsse`
  );
  const mailto = `mailto:andreas.rupf@spekt.ch?subject=Anfrage%20Team-Lizenz%20KI-Kurse&body=${mailtoBody}`;

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
          max-width: 620px; margin: 0 auto;
          line-height: 1.65;
        }

        /* Vorteile */
        .fg-benefits {
          max-width: 960px; margin: 0 auto;
          padding: 56px 24px 24px;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .fg-benefit {
          padding: 22px 20px;
          background: white;
          border: 1px solid #e0e0da;
          border-radius: 12px;
        }
        .fg-benefit-icon {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,200,83,0.12);
          color: #00C853;
          border-radius: 10px; margin-bottom: 12px;
        }
        .fg-benefit-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: 0.95rem;
          color: #1A1A1A; margin-bottom: 6px;
        }
        .fg-benefit-desc {
          font-size: 0.82rem; color: #555;
          line-height: 1.6;
        }

        /* Preise */
        .fg-pricing-section {
          padding: 72px 24px;
          max-width: 1080px; margin: 0 auto;
        }
        .fg-pricing-head {
          text-align: center; margin-bottom: 48px;
        }
        .fg-pricing-head h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          font-weight: 800; letter-spacing: -1px;
          line-height: 1.15; margin-bottom: 12px;
        }
        .fg-pricing-head p {
          font-size: 1rem; color: #555;
          max-width: 540px; margin: 0 auto;
          line-height: 1.6;
        }
        .fg-tiers {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .fg-tier {
          background: white;
          border: 1px solid #e0e0da;
          border-radius: 14px;
          padding: 32px 28px;
          display: flex; flex-direction: column;
          position: relative;
        }
        .fg-tier.highlight {
          border: 2px solid #00C853;
          box-shadow: 0 12px 48px rgba(0,200,83,0.12);
          transform: translateY(-4px);
        }
        .fg-tier-badge {
          position: absolute; top: -12px; left: 50%;
          transform: translateX(-50%);
          background: #00C853; color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 5px 14px; border-radius: 50px;
        }
        .fg-tier-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem; font-weight: 700;
          color: #00C853; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 8px;
        }
        .fg-tier-seats {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.2rem; font-weight: 800;
          color: #1A1A1A; letter-spacing: -1px;
          line-height: 1; margin-bottom: 8px;
        }
        .fg-tier-seats-sub {
          font-size: 0.85rem; color: #555;
          margin-bottom: 22px;
        }
        .fg-tier-price {
          display: flex; align-items: baseline; gap: 6px;
          padding-bottom: 16px; border-bottom: 1px solid #e0e0da;
          margin-bottom: 20px;
        }
        .fg-tier-price-main {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.8rem; font-weight: 800;
          color: #1A1A1A; letter-spacing: -0.5px;
        }
        .fg-tier-price-sub {
          font-size: 0.78rem; color: #888;
        }
        .fg-tier-price-per {
          font-size: 0.72rem; color: #00C853;
          font-weight: 600; margin-top: 2px;
        }
        .fg-tier-features {
          list-style: none; padding: 0; margin: 0 0 24px;
          flex: 1;
        }
        .fg-tier-features li {
          font-size: 0.86rem; color: #333;
          padding: 7px 0 7px 24px;
          position: relative; line-height: 1.5;
        }
        .fg-tier-features li::before {
          content: "✓"; position: absolute; left: 0;
          color: #00C853; font-weight: 700;
        }
        .fg-tier-cta {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 6px;
          padding: 12px 18px; border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          color: white; background: #1A1A1A;
          text-decoration: none;
          border: 2px solid #1A1A1A;
          transition: all 0.2s;
        }
        .fg-tier-cta:hover {
          background: #00C853; border-color: #00C853;
        }
        .fg-tier.highlight .fg-tier-cta {
          background: #00C853; border-color: #00C853;
        }
        .fg-tier.highlight .fg-tier-cta:hover {
          background: #1A1A1A; border-color: #1A1A1A;
        }

        /* Kurs-Empfehlung */
        .fg-courses-section {
          background: #f5f5f0;
          padding: 72px 24px;
          border-top: 1px solid #e0e0da;
        }
        .fg-courses-inner {
          max-width: 960px; margin: 0 auto;
        }
        .fg-courses-head {
          text-align: center; margin-bottom: 36px;
        }
        .fg-courses-head h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 800; letter-spacing: -1px;
          margin-bottom: 8px;
        }
        .fg-courses-head p {
          color: #555; font-size: 0.98rem;
        }
        .fg-courses-list {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .fg-course-item {
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 22px;
          background: white;
          border: 1px solid #e0e0da;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .fg-course-item:hover {
          border-color: #1A1A1A;
          transform: translateY(-2px);
        }
        .fg-course-info { flex: 1; }
        .fg-course-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: 0.95rem;
          color: #1A1A1A; margin-bottom: 4px;
        }
        .fg-course-level {
          font-size: 0.78rem; color: #555;
        }
        .fg-course-price {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: 0.9rem;
          color: #00C853;
        }

        /* Ablauf */
        .fg-process-section {
          padding: 72px 24px;
          max-width: 860px; margin: 0 auto;
        }
        .fg-process-head h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 800; letter-spacing: -1px;
          margin-bottom: 36px; text-align: center;
        }
        .fg-steps {
          display: grid; gap: 18px;
        }
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
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
        }
        .fg-step-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: 1rem;
          color: #1A1A1A; margin-bottom: 4px;
        }
        .fg-step-desc {
          color: #555; font-size: 0.88rem; line-height: 1.6;
        }

        /* FAQ */
        .fg-faq-section {
          background: white;
          padding: 72px 24px;
          border-top: 1px solid #e0e0da;
        }
        .fg-faq-inner {
          max-width: 820px;
          margin: 0 auto;
        }
        .fg-faq-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #00C853;
          margin-bottom: 14px;
          display: block;
        }
        .fg-faq-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #1A1A1A;
          letter-spacing: -1px;
          line-height: 1.15;
          margin-bottom: 10px;
        }
        .fg-faq-intro {
          font-size: 0.98rem;
          color: #555;
          line-height: 1.65;
          margin-bottom: 36px;
          max-width: 620px;
        }
        .fg-faq-item {
          border-bottom: 1px solid #e0e0da;
          padding: 22px 0;
        }
        .fg-faq-item:first-of-type { border-top: 1px solid #e0e0da; }
        .fg-faq-q {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.02rem;
          font-weight: 700;
          color: #1A1A1A;
          margin: 0 0 10px;
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .fg-faq-q::-webkit-details-marker { display: none; }
        .fg-faq-q::after {
          content: "+";
          font-size: 1.4rem;
          font-weight: 400;
          color: #00C853;
          flex-shrink: 0;
        }
        details[open] .fg-faq-q::after { content: "−"; }
        .fg-faq-a {
          font-size: 0.94rem;
          color: #444;
          line-height: 1.7;
          margin: 8px 0 4px;
        }

        /* CTA-Band */
        .fg-cta-band {
          background: #1A1A1A;
          color: white;
          padding: 64px 24px;
          text-align: center;
        }
        .fg-cta-band h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 800; letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .fg-cta-band p {
          color: rgba(255,255,255,0.7);
          max-width: 520px; margin: 0 auto 28px;
          font-size: 1rem; line-height: 1.65;
        }
        .fg-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          color: #1A1A1A; background: #00C853;
          text-decoration: none; border: 2px solid #00C853;
          transition: all 0.2s;
        }
        .fg-cta-btn:hover {
          background: white; border-color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .fg-benefits { grid-template-columns: repeat(2, 1fr); }
          .fg-tiers { grid-template-columns: 1fr; }
          .fg-tier.highlight { transform: none; }
        }
        @media (max-width: 600px) {
          .fg-benefits { grid-template-columns: 1fr; }
          .fg-courses-list { grid-template-columns: 1fr; }
        }
      `}} />

      <Header />

      <main className="fg-main">
        {/* Hero */}
        <section className="fg-hero">
          <span className="fg-hero-label">Team &amp; Gemeinde-Lizenzen</span>
          <h1>KI-Weiterbildung für Ihr ganzes Team</h1>
          <p>
            Schulen Sie Ihre Verwaltung, Ihr Planungsbüro oder Ihr Team mit den SPEKTRUM KI-Kursen.
            Ab 5 Plätzen zum Vorzugspreis, mit Sammelrechnung und individuellen Zertifikaten.
          </p>
        </section>

        {/* Benefits */}
        <section className="fg-benefits">
          <div className="fg-benefit">
            <div className="fg-benefit-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div className="fg-benefit-title">Sammelrechnung</div>
            <div className="fg-benefit-desc">Eine Rechnung für alle Plätze – direkt an die Gemeinde oder Firma.</div>
          </div>
          <div className="fg-benefit">
            <div className="fg-benefit-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div className="fg-benefit-title">Individuelle Zertifikate</div>
            <div className="fg-benefit-desc">Jede Person erhält nach Abschluss ein persönliches Zertifikat als PDF.</div>
          </div>
          <div className="fg-benefit">
            <div className="fg-benefit-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="fg-benefit-title">Flexibel lernen</div>
            <div className="fg-benefit-desc">90 Tage Zugang pro Person, selbst eingeteilt – kein Termindruck.</div>
          </div>
          <div className="fg-benefit">
            <div className="fg-benefit-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="fg-benefit-title">Onboarding inklusive</div>
            <div className="fg-benefit-desc">Ab 10 Plätzen: Kickoff-Call mit Andreas Rupf zur Einführung.</div>
          </div>
        </section>

        {/* Zertifikatslehrgang-Hinweis */}
        <section style={{ maxWidth: 1100, margin: '0 auto 40px', padding: '0 24px' }}>
          <Link href="/zertifikatslehrgang" style={{
            display: 'block', textDecoration: 'none', padding: '28px 32px',
            borderRadius: 18, background: 'white', border: '2px solid #0057a8',
            boxShadow: '0 4px 20px rgba(0,87,168,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 40, lineHeight: 1 }}>📜</div>
              <div style={{ flex: '1 1 280px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: '#0057a8', marginBottom: 4 }}>
                  Strukturierter Lernpfad
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#1d1d1f', marginBottom: 6 }}>
                  Oder direkt einen Zertifikatslehrgang buchen?
                </div>
                <div style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.5 }}>
                  4 Tracks mit je 3 Kursen und Abschlusszertifikat – auch als Team-Lizenz für Verwaltung, Planungsbüros oder KI-Profis.
                </div>
              </div>
              <div style={{ padding: '10px 18px', background: '#0057a8', color: 'white', borderRadius: 100, fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>
                Lehrgänge ansehen →
              </div>
            </div>
          </Link>
        </section>

        {/* Preise */}
        <section className="fg-pricing-section">
          <div className="fg-pricing-head">
            <h2>Lizenz-Pakete pro Kurs</h2>
            <p>Preise verstehen sich pro Kurs. Beispiel: 10 Personen im Kurs &laquo;KI für Gemeinden&raquo; = CHF 179 pauschal (statt 10 × CHF 29 = 290).</p>
          </div>
          <div className="fg-tiers">
            {TIERS.map(tier => {
              const baseSingle = 29; // Referenz für "statt"-Preis
              const sparnis = Math.round((1 - (tier.pricePerCourse / (tier.seats * baseSingle))) * 100);
              return (
                <div key={tier.name} className={`fg-tier${tier.highlight ? ' highlight' : ''}`}>
                  {tier.highlight && tier.badge && <span className="fg-tier-badge">{tier.badge}</span>}
                  <div className="fg-tier-name">{tier.name}</div>
                  <div className="fg-tier-seats">{tier.seats}</div>
                  <div className="fg-tier-seats-sub">Personen pro Kurs</div>
                  <div className="fg-tier-price">
                    <div>
                      <div>
                        <span className="fg-tier-price-main">CHF {tier.pricePerCourse}</span>
                        <span className="fg-tier-price-sub"> / Kurs</span>
                      </div>
                      <div className="fg-tier-price-per">
                        ≈ CHF {tier.pricePerPerson}/Person · spart ~{sparnis}%
                      </div>
                    </div>
                  </div>
                  <ul className="fg-tier-features">
                    {tier.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <a href={mailto} className="fg-tier-cta">
                    Offerte anfragen
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Kurs-Empfehlungen */}
        <section className="fg-courses-section">
          <div className="fg-courses-inner">
            <div className="fg-courses-head">
              <h2>Empfehlungen für Verwaltungen &amp; Büros</h2>
              <p>Diese Kurse eignen sich besonders für Teams in der öffentlichen Verwaltung und in Planungsbüros.</p>
            </div>
            <div className="fg-courses-list">
              {POPULAR_COURSES.map(c => (
                <Link key={c.href} href={c.href} className="fg-course-item">
                  <div className="fg-course-info">
                    <div className="fg-course-title">{c.title}</div>
                    <div className="fg-course-level">{c.level} · Einzelpreis CHF {c.price}</div>
                  </div>
                  <div className="fg-course-price">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="fg-process-section">
          <div className="fg-process-head">
            <h2>So einfach ist die Buchung</h2>
          </div>
          <div className="fg-steps">
            <div className="fg-step">
              <div className="fg-step-num">1</div>
              <div>
                <div className="fg-step-title">Anfrage per E-Mail</div>
                <div className="fg-step-desc">Sie schicken uns Gemeinde/Firma, Anzahl Personen und gewünschten Kurs. Wir antworten innerhalb von 1 Werktag.</div>
              </div>
            </div>
            <div className="fg-step">
              <div className="fg-step-num">2</div>
              <div>
                <div className="fg-step-title">Offerte &amp; Rechnung</div>
                <div className="fg-step-desc">Sie erhalten eine Offerte und nach Annahme eine Rechnung mit 30 Tagen Zahlungsziel.</div>
              </div>
            </div>
            <div className="fg-step">
              <div className="fg-step-num">3</div>
              <div>
                <div className="fg-step-title">Zugänge freischalten</div>
                <div className="fg-step-desc">Nach Zahlungseingang erhalten Sie die Teilnehmer-Zugänge per E-Mail. Alternativ liefern Sie uns die E-Mail-Liste – wir schalten direkt frei.</div>
              </div>
            </div>
            <div className="fg-step">
              <div className="fg-step-num">4</div>
              <div>
                <div className="fg-step-title">Kickoff &amp; Lernstart</div>
                <div className="fg-step-desc">Ab 10 Plätzen: Kickoff-Call (30 Min) mit Andreas Rupf für Einführung und Q&amp;A. Das Team startet danach selbstgesteuert.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="fg-faq-section">
          <div className="fg-faq-inner">
            <span className="fg-faq-label">Häufige Fragen</span>
            <h2 className="fg-faq-heading">So funktioniert die Team-Lizenz</h2>
            <p className="fg-faq-intro">
              Antworten zu Login, Freischaltung, Fortschritts-Reports und Datenschutz – das Wichtigste für Ihre Gemeinde oder Ihr Büro.
            </p>

            {[
              {
                q: 'Wie funktioniert eine Team-Lizenz technisch?',
                a: 'Jede Person Ihres Teams erhält einen eigenen persönlichen Zugang mit ihrer geschäftlichen E-Mail-Adresse. Das ist nötig, damit Fortschritt und Zertifikat pro Person gespeichert werden können. Es gibt keinen Sammel-Account – eine Person, eine E-Mail, ein Zertifikat.',
              },
              {
                q: 'Wie loggen sich die Teilnehmer ein?',
                a: 'Jeder Teilnehmer erhält eine E-Mail mit einem persönlichen Magic-Link. Ein Klick genügt – kein Passwort nötig. Der Login bleibt 60 Tage gültig; danach wird ein neuer Link per E-Mail angefordert.',
              },
              {
                q: 'Können mehrere Personen denselben Zugang nutzen?',
                a: 'Nein. Jede Person benötigt eine eigene E-Mail-Adresse. Das liegt daran, dass Zertifikate personalisiert ausgestellt werden und der Lernfortschritt pro Person gespeichert wird. Das schützt zudem Ihre Team-Lizenz vor Weitergabe.',
              },
              {
                q: 'Was braucht SPEKTRUM von uns zur Freischaltung?',
                a: 'Nach Rechnungsbegleichung liefern Sie uns eine Liste mit Name und E-Mail-Adresse aller Teilnehmer – per E-Mail, Excel oder CSV. Wir schalten die Zugänge innerhalb von 1 Werktag frei und jede Person erhält automatisch eine Willkommens-E-Mail mit Login-Link.',
              },
              {
                q: 'Können wir Personen nachträglich austauschen?',
                a: 'Ja, innerhalb der ersten 14 Tage nach Freischaltung kostenlos. Wenn eine Person den Kurs noch nicht gestartet hat, können wir sie durch eine andere ersetzen. Teilnehmer, die bereits Lektionen abgeschlossen haben, können aus Fairness-Gründen nicht ausgetauscht werden.',
              },
              {
                q: 'Wie lange hat jede Person Zugang?',
                a: '90 Tage ab individueller Freischaltung – unabhängig davon, wann die Person tatsächlich startet. In dieser Zeit kann sie alle Inhalte unbegrenzt oft durcharbeiten. Das Zertifikat bleibt nach Abschluss dauerhaft gültig.',
              },
              {
                q: 'Erhalten wir einen Überblick zum Lernfortschritt?',
                a: 'Ab Paket Team 10: Sie erhalten auf Wunsch alle 30 Tage einen anonymisierten Fortschrittsreport (wie viele Personen wie weit sind). Eine personenbezogene Auswertung gibt es aus Datenschutzgründen nur mit expliziter Zustimmung aller Teilnehmer.',
              },
              {
                q: 'Was passiert mit den Teilnehmer-Daten nach 90 Tagen?',
                a: 'Die Zugriffsrechte laufen aus, das Konto bleibt bestehen. Das Zertifikat kann jederzeit erneut heruntergeladen werden. Sie können jederzeit die Löschung des Kontos verlangen (E-Mail an andreas.rupf@spekt.ch).',
              },
            ].map((item, i) => (
              <details key={i} className="fg-faq-item" {...(i < 2 ? { open: true } : {})}>
                <summary className="fg-faq-q">{item.q}</summary>
                <p className="fg-faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="fg-cta-band">
          <h2>Offerte in 24 Stunden</h2>
          <p>Schreiben Sie uns mit wenigen Angaben – wir melden uns spätestens am nächsten Werktag mit einem Angebot.</p>
          <a href={mailto} className="fg-cta-btn">
            Jetzt Offerte anfragen
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
