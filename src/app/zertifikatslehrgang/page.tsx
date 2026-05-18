import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BuyButton from '@/components/BuyButton';
import { LEHRGAENGE, getLehrgangDetails, TIER_PRICES } from '@/data/zertifikatslehrgaenge';
import { getUserFromCookie } from '@/lib/auth';

export default function ZertifikatslehrgangPage() {
  const auth = getUserFromCookie();
  const lehrgaenge = LEHRGAENGE.map(l => getLehrgangDetails(l.slug)!).filter(Boolean);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .zl-page { background: #fbfbfd; min-height: 100vh; padding-top: 64px; }
        .zl-hero { padding: 80px 24px 40px; max-width: 1100px; margin: 0 auto; text-align: center; }
        .zl-eyebrow {
          display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #0057a8; background: rgba(0,87,168,0.08);
          padding: 6px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .zl-title {
          font-size: clamp(32px, 5vw, 48px); font-weight: 800; color: #1d1d1f;
          letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 20px;
        }
        .zl-sub {
          font-size: 18px; color: #6e6e73; line-height: 1.6;
          max-width: 720px; margin: 0 auto 16px;
        }

        .zl-founders-banner {
          max-width: 900px; margin: 0 auto 36px; padding: 0 24px;
        }
        .zl-founders-banner-inner {
          background: linear-gradient(135deg, #fef7e3 0%, #fff9ec 100%);
          border: 1px solid #f5d989; border-radius: 14px;
          padding: 20px 24px; font-size: 14px; line-height: 1.55; color: #5a3e00;
        }
        .zl-founders-banner-inner strong { color: #1d1d1f; }

        .zl-benefits {
          max-width: 1100px; margin: 0 auto 60px; padding: 0 24px;
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;
        }
        .zl-benefit { background: white; padding: 24px; border-radius: 14px; border: 1px solid #e8e8ed; }
        .zl-benefit-icon { font-size: 26px; margin-bottom: 10px; }
        .zl-benefit-title { font-weight: 700; font-size: 15px; color: #1d1d1f; margin-bottom: 4px; }
        .zl-benefit-text { font-size: 13px; color: #6e6e73; line-height: 1.5; }

        .zl-tracks { max-width: 1200px; margin: 0 auto 80px; padding: 0 24px; display: grid; gap: 40px; }
        .zl-track { background: white; border-radius: 20px; overflow: hidden; border: 1px solid #e8e8ed; box-shadow: 0 4px 24px rgba(0,0,0,0.04); }
        .zl-track-head { padding: 32px 36px 28px; color: white; }
        .zl-track-emoji { font-size: 40px; margin-bottom: 10px; line-height: 1; }
        .zl-track-title { font-size: 26px; font-weight: 800; letter-spacing: -0.01em; margin-bottom: 8px; line-height: 1.2; }
        .zl-track-subtitle { font-size: 15px; opacity: 0.92; line-height: 1.5; max-width: 680px; }

        .zl-track-body {
          padding: 28px 36px 36px;
          display: grid;
          grid-template-columns: 0.9fr 2fr;
          gap: 36px;
        }
        @media (max-width: 900px) {
          .zl-track-body { grid-template-columns: 1fr; gap: 24px; padding: 24px; }
        }

        .zl-section-label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1.2px; color: #6e6e73; margin-bottom: 10px;
        }
        .zl-courses-list { list-style: none; padding: 0; margin: 0 0 20px; }
        .zl-course-item {
          display: flex; align-items: center; gap: 14px; padding: 12px 0;
          border-bottom: 1px solid #f0f0f5;
        }
        .zl-course-item:last-child { border-bottom: none; }
        .zl-course-num {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
          background: #f0f0f5; color: #0057a8; font-size: 13px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
        }
        .zl-course-info { flex: 1; min-width: 0; }
        .zl-course-title { font-size: 14px; font-weight: 600; color: #1d1d1f; margin-bottom: 2px; }
        .zl-course-meta { font-size: 12px; color: #6e6e73; }

        .zl-outcomes { list-style: none; padding: 0; margin: 0 0 16px; }
        .zl-outcomes li {
          font-size: 13px; color: #1d1d1f; padding: 5px 0 5px 22px;
          position: relative; line-height: 1.5;
        }
        .zl-outcomes li::before {
          content: '✓'; position: absolute; left: 0; color: #00a896; font-weight: 700;
        }
        .zl-target-roles {
          font-size: 12px; color: #6e6e73; line-height: 1.6;
          padding: 10px 12px; background: #f8f9fa; border-radius: 8px;
        }
        .zl-target-roles strong {
          color: #1d1d1f; display: block; margin-bottom: 4px; font-size: 11px;
          text-transform: uppercase; letter-spacing: 0.8px;
        }

        /* ============ TIER-KARTEN ============ */
        .zl-tiers {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
        }
        @media (max-width: 900px) { .zl-tiers { grid-template-columns: 1fr; } }

        .zl-tier {
          border: 1.5px solid #e8e8ed; border-radius: 14px; padding: 22px 18px;
          display: flex; flex-direction: column; background: white;
          position: relative;
        }
        .zl-tier-plus {
          border-color: #0057a8;
          box-shadow: 0 6px 24px rgba(0,87,168,0.12);
          transform: translateY(-4px);
        }
        @media (max-width: 900px) { .zl-tier-plus { transform: none; } }
        .zl-tier-badge {
          position: absolute; top: -11px; left: 50%; transform: translateX(-50%);
          background: #0057a8; color: white; font-size: 10px; font-weight: 800;
          padding: 4px 10px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.8px;
          white-space: nowrap;
        }
        .zl-tier-name {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1.2px; color: #6e6e73; margin-bottom: 8px;
        }
        .zl-tier-plus .zl-tier-name { color: #0057a8; }
        .zl-tier-price { font-size: 28px; font-weight: 800; color: #1d1d1f; line-height: 1; margin-bottom: 3px; }
        .zl-tier-priceunit { font-size: 11px; color: #6e6e73; margin-bottom: 14px; }
        .zl-tier-features { list-style: none; padding: 0; margin: 0 0 16px; flex: 1; }
        .zl-tier-features li {
          font-size: 12.5px; color: #1d1d1f; padding: 4px 0 4px 18px;
          position: relative; line-height: 1.45;
        }
        .zl-tier-features li::before {
          content: '✓'; position: absolute; left: 0; color: #00a896; font-weight: 700; font-size: 12px;
        }
        .zl-tier-features .muted { color: #9a9aa0; }
        .zl-tier-features .muted::before { content: '·'; color: #ccc; }

        .zl-tier-cta {
          display: block; width: 100%; text-align: center; padding: 11px 14px;
          border-radius: 9px; font-weight: 700; font-size: 13px;
          text-decoration: none; transition: all 0.15s; cursor: pointer;
          border: none;
        }
        .zl-tier-cta-basis { background: #f0f0f5; color: #1d1d1f; }
        .zl-tier-cta-basis:hover { background: #e4e4eb; }
        .zl-tier-cta-plus { background: #0057a8; color: white; }
        .zl-tier-cta-plus:hover { background: #004a8f; }
        .zl-tier-cta-business { background: white; color: #1d1d1f; border: 1px solid #1d1d1f; }
        .zl-tier-cta-business:hover { background: #f8f9fa; }

        .zl-trust {
          max-width: 900px; margin: 0 auto 60px; padding: 40px 24px; text-align: center;
        }
        .zl-trust h2 { font-size: 24px; font-weight: 800; color: #1d1d1f; margin-bottom: 14px; }
        .zl-trust p { font-size: 15px; color: #6e6e73; line-height: 1.7; max-width: 680px; margin: 0 auto; }
      `}} />

      <Header userEmail={auth?.email} />

      <div className="zl-page">
        <section className="zl-hero">
          <span className="zl-eyebrow">KI-Intensivprogramme</span>
          <h1 className="zl-title">Vier Lehrgänge, ein klarer Kompetenznachweis.</h1>
          <p className="zl-sub">
            Strukturierte KI-Weiterbildung für Schweizer Gemeinden, Verwaltungen und Planungsbüros —
            mit direktem Zugang zum Gründer.
          </p>
        </section>

        <div className="zl-founders-banner">
          <div className="zl-founders-banner-inner">
            <strong>🚀 Founder's Circle — für die ersten Plus-Kunden.</strong> Statt Gruppen-Q&A
            erhalten Sie während Ihres Lehrgangs <strong>zwei persönliche 30-min-Strategie-Sessions</strong> mit
            Andreas Rupf – plus monatliche aufgezeichnete Office Hours mit aktuellen KI-Themen.
          </div>
        </div>

        <section className="zl-benefits">
          <div className="zl-benefit">
            <div className="zl-benefit-icon">🎯</div>
            <div className="zl-benefit-title">Strukturierter Lernpfad</div>
            <div className="zl-benefit-text">Drei Kurse in sinnvoller Reihenfolge – vom Grundwissen zur anwendbaren Kompetenz.</div>
          </div>
          <div className="zl-benefit">
            <div className="zl-benefit-icon">📜</div>
            <div className="zl-benefit-title">Teilnahmebestätigung</div>
            <div className="zl-benefit-text">Auf Wunsch als PDF – für den Arbeitgeber oder die persönliche Ablage.</div>
          </div>
          <div className="zl-benefit">
            <div className="zl-benefit-icon">👤</div>
            <div className="zl-benefit-title">Direkter Gründer-Zugang</div>
            <div className="zl-benefit-text">Plus-Tier: persönliche Sessions mit Andreas Rupf. Keine anonymen Massen-Kurse.</div>
          </div>
          <div className="zl-benefit">
            <div className="zl-benefit-icon">⏱️</div>
            <div className="zl-benefit-title">180 Tage Zugang</div>
            <div className="zl-benefit-text">Berufs­begleitend in Ihrem Tempo. Lektionen, Quizze und Materialien jederzeit abrufbar.</div>
          </div>
        </section>

        <section className="zl-tracks">
          {lehrgaenge.map(l => (
            <article key={l.slug} id={l.slug} className="zl-track">
              <div className="zl-track-head" style={{ background: l.color }}>
                <div className="zl-track-emoji">{l.emoji}</div>
                <h2 className="zl-track-title">{l.title}</h2>
                <p className="zl-track-subtitle">{l.subtitle}</p>
              </div>
              <div className="zl-track-body">
                <div>
                  <div className="zl-section-label">Kurse im Lehrgang ({l.totalHours} h)</div>
                  <ul className="zl-courses-list">
                    {l.courses.map((c, i) => (
                      <li key={c.slug} className="zl-course-item">
                        <div className="zl-course-num">{i + 1}</div>
                        <div className="zl-course-info">
                          <div className="zl-course-title">{c.course.title}</div>
                          <div className="zl-course-meta">{c.level}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="zl-section-label">Nach Abschluss</div>
                  <ul className="zl-outcomes">
                    {l.outcomes.slice(0, 3).map((o, i) => <li key={i}>{o}</li>)}
                  </ul>

                  <div className="zl-target-roles">
                    <strong>Für:</strong> {l.targetRoles.slice(0, 3).join(' · ')}
                  </div>
                </div>

                <div className="zl-tiers">
                  {/* Basis */}
                  <div className="zl-tier">
                    <div className="zl-tier-name">Basis</div>
                    <div className="zl-tier-price">{TIER_PRICES.basis.priceLabel}</div>
                    <div className="zl-tier-priceunit">einmalig · Einzelperson</div>
                    <ul className="zl-tier-features">
                      <li>3 Kurse · 180 Tage Zugang</li>
                      <li>Alle Lektionen, Übungen, Quizze</li>
                      <li>Teilnahmebestätigung als PDF</li>
                      <li className="muted">Kein persönlicher Kontakt</li>
                      <li className="muted">Kein 1:1-Call</li>
                    </ul>
                    <BuyButton
                      lehrgangSlug={l.slug}
                      tier="basis"
                      label="Basis buchen"
                      fullWidth
                      variant="subtle"
                    />
                  </div>

                  {/* Plus */}
                  <div className="zl-tier zl-tier-plus">
                    <div className="zl-tier-badge">Empfohlen · Founder's Circle</div>
                    <div className="zl-tier-name">Plus</div>
                    <div className="zl-tier-price">{TIER_PRICES.plus.priceLabel}</div>
                    <div className="zl-tier-priceunit">einmalig · Einzelperson</div>
                    <ul className="zl-tier-features">
                      <li><strong>Alles aus Basis</strong></li>
                      <li><strong>2× persönliche 30-min-Sessions</strong> mit Andreas Rupf</li>
                      <li>Monatliche Office-Hours (Aufzeichnung)</li>
                      <li>Strategie-Sparring zu eigenen Fällen</li>
                      <li>Direkter E-Mail-Support</li>
                    </ul>
                    <BuyButton
                      lehrgangSlug={l.slug}
                      tier="plus"
                      label="Plus buchen →"
                      fullWidth
                      variant="primary"
                    />
                  </div>

                  {/* Business */}
                  <div className="zl-tier">
                    <div className="zl-tier-name">Business</div>
                    <div className="zl-tier-price">{TIER_PRICES.business.priceLabel}</div>
                    <div className="zl-tier-priceunit">ab · für Organisationen</div>
                    <ul className="zl-tier-features">
                      <li><strong>Alles aus Plus</strong></li>
                      <li>Bis zu 10 Team-Mitglieder</li>
                      <li>Halbtägige Vor-Ort-Session inklusive</li>
                      <li>KI-Readiness-Assessment (PDF)</li>
                      <li>Individuelle Terminabsprache</li>
                    </ul>
                    <a
                      href={`mailto:andreas.rupf@spekt.ch?subject=${encodeURIComponent(`Business-Lehrgang: ${l.title}`)}&body=${encodeURIComponent(`Guten Tag Andreas\n\nWir interessieren uns für den Business-Lehrgang «${l.title}».\n\nOrganisation:\nAnzahl Teilnehmende:\nAnsprechperson:\nWunschtermin Workshop:\n\nBeste Grüsse`)}`}
                      className="zl-tier-cta zl-tier-cta-business"
                    >
                      Anfragen
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="zl-trust">
          <h2>Warum ein KI-Intensivprogramm von SPEKTRUM?</h2>
          <p>
            Die Inhalte entstehen aus der täglichen Praxis: SPEKTRUM Partner GmbH betreibt den KI-Assistenten{' '}
            <a href="https://minu-ai.ch" style={{ color: '#0057a8' }}>MINU-AI</a>, das Tool{' '}
            <a href="https://interessenabwägung.ch" style={{ color: '#0057a8' }}>Interessenabwägung.ch</a> und
            erstellt Bauzonenberichte für Schweizer Gemeinden. Andreas Rupf leitete das Programm «ETH RAUM» an
            der ETH Zürich und kennt die Anforderungen von Verwaltung, Planungsbüro und Gremium aus erster Hand.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
