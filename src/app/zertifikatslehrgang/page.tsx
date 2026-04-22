import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LEHRGAENGE, getLehrgangDetails } from '@/data/zertifikatslehrgaenge';
import { getUserFromCookie } from '@/lib/auth';

export default function ZertifikatslehrgangPage() {
  const auth = getUserFromCookie();
  const lehrgaenge = LEHRGAENGE.map(l => getLehrgangDetails(l.slug)!).filter(Boolean);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .zl-page { background: #fbfbfd; min-height: 100vh; padding-top: 64px; }
        .zl-hero {
          padding: 80px 24px 48px;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }
        .zl-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #0057a8;
          background: rgba(0,87,168,0.08);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 18px;
        }
        .zl-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .zl-sub {
          font-size: 18px;
          color: #6e6e73;
          line-height: 1.6;
          max-width: 680px;
          margin: 0 auto 32px;
        }
        .zl-benefits {
          max-width: 1100px;
          margin: 0 auto 60px;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }
        .zl-benefit {
          background: white;
          padding: 24px;
          border-radius: 14px;
          border: 1px solid #e8e8ed;
        }
        .zl-benefit-icon {
          font-size: 26px;
          margin-bottom: 10px;
        }
        .zl-benefit-title {
          font-weight: 700;
          font-size: 15px;
          color: #1d1d1f;
          margin-bottom: 4px;
        }
        .zl-benefit-text {
          font-size: 13px;
          color: #6e6e73;
          line-height: 1.5;
        }

        .zl-tracks {
          max-width: 1100px;
          margin: 0 auto 80px;
          padding: 0 24px;
          display: grid;
          gap: 32px;
        }
        .zl-track {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e8e8ed;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        }
        .zl-track-head {
          padding: 32px 36px 24px;
          color: white;
          position: relative;
        }
        .zl-track-emoji {
          font-size: 40px;
          margin-bottom: 10px;
          line-height: 1;
        }
        .zl-track-title {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .zl-track-subtitle {
          font-size: 15px;
          opacity: 0.92;
          line-height: 1.5;
          max-width: 680px;
        }
        .zl-savings-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.3);
        }

        .zl-track-body {
          padding: 28px 36px 32px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 32px;
        }
        @media (max-width: 740px) {
          .zl-track-body { grid-template-columns: 1fr; }
          .zl-track-head { padding: 28px 24px 20px; }
          .zl-track-body { padding: 24px; }
        }

        .zl-section-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #6e6e73;
          margin-bottom: 10px;
        }
        .zl-courses-list {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
        }
        .zl-course-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f5;
        }
        .zl-course-item:last-child { border-bottom: none; }
        .zl-course-num {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: #f0f0f5;
          color: #0057a8;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .zl-course-info { flex: 1; min-width: 0; }
        .zl-course-title {
          font-size: 14px;
          font-weight: 600;
          color: #1d1d1f;
          margin-bottom: 2px;
        }
        .zl-course-meta {
          font-size: 12px;
          color: #6e6e73;
        }
        .zl-course-link {
          font-size: 12px;
          color: #0057a8;
          text-decoration: none;
          font-weight: 600;
        }
        .zl-course-link:hover { text-decoration: underline; }

        .zl-outcomes {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
        }
        .zl-outcomes li {
          font-size: 13px;
          color: #1d1d1f;
          padding: 6px 0 6px 24px;
          position: relative;
          line-height: 1.5;
        }
        .zl-outcomes li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #00a896;
          font-weight: 700;
        }

        .zl-price-box {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 18px 20px;
          margin-bottom: 14px;
        }
        .zl-price-big {
          font-size: 32px;
          font-weight: 800;
          color: #1d1d1f;
          line-height: 1;
        }
        .zl-price-strike {
          font-size: 14px;
          color: #6e6e73;
          text-decoration: line-through;
          margin-left: 8px;
        }
        .zl-price-label {
          font-size: 12px;
          color: #6e6e73;
          margin-top: 4px;
        }
        .zl-team-prices {
          font-size: 12px;
          color: #6e6e73;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid #e8e8ed;
        }
        .zl-team-prices strong { color: #1d1d1f; }

        .zl-cta {
          display: inline-block;
          width: 100%;
          text-align: center;
          padding: 13px 24px;
          background: #1d1d1f;
          color: white;
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.15s;
          margin-bottom: 8px;
        }
        .zl-cta:hover { background: #0057a8; }
        .zl-cta-team {
          display: inline-block;
          width: 100%;
          text-align: center;
          padding: 11px 24px;
          background: white;
          color: #1d1d1f;
          border: 1px solid #1d1d1f;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.15s;
        }
        .zl-cta-team:hover { background: #f8f9fa; }

        .zl-target-roles {
          font-size: 12px;
          color: #6e6e73;
          line-height: 1.6;
          margin-top: 14px;
          padding: 12px 14px;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .zl-target-roles strong { color: #1d1d1f; display: block; margin-bottom: 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; }

        .zl-trust {
          max-width: 900px;
          margin: 0 auto 60px;
          padding: 40px 24px;
          text-align: center;
        }
        .zl-trust h2 {
          font-size: 24px;
          font-weight: 800;
          color: #1d1d1f;
          margin-bottom: 14px;
        }
        .zl-trust p {
          font-size: 15px;
          color: #6e6e73;
          line-height: 1.7;
          max-width: 680px;
          margin: 0 auto;
        }
      `}} />

      <Header userEmail={auth?.email} />

      <div className="zl-page">
        <section className="zl-hero">
          <span className="zl-eyebrow">Neu · Zertifikatslehrgänge</span>
          <h1 className="zl-title">Vier Lehrgänge, ein klarer Kompetenznachweis.</h1>
          <p className="zl-sub">
            Drei aufeinander abgestimmte Kurse pro Track, ein SPEKTRUM-Abschlusszertifikat – strukturierte KI-Weiterbildung für
            Schweizer Gemeinden, Verwaltungen und Planungsbüros. Berufsbegleitend, ortsunabhängig, ab CHF 29.
          </p>
        </section>

        <section className="zl-benefits">
          <div className="zl-benefit">
            <div className="zl-benefit-icon">🎯</div>
            <div className="zl-benefit-title">Strukturierter Lernpfad</div>
            <div className="zl-benefit-text">Drei Kurse in sinnvoller Reihenfolge – vom Grundwissen zur anwendbaren Kompetenz.</div>
          </div>
          <div className="zl-benefit">
            <div className="zl-benefit-icon">📜</div>
            <div className="zl-benefit-title">Offizielles Abschluss­zertifikat</div>
            <div className="zl-benefit-text">Kompetenzprofil statt einzelner Teilnahme­bestätigungen. Dauerhaft gültig.</div>
          </div>
          <div className="zl-benefit">
            <div className="zl-benefit-icon">💰</div>
            <div className="zl-benefit-title">15–25 % günstiger</div>
            <div className="zl-benefit-text">Bundle-Preis statt Einzelkauf. Team-Lizenzen ab 5 Personen mit zusätzlichem Rabatt.</div>
          </div>
          <div className="zl-benefit">
            <div className="zl-benefit-icon">⏱️</div>
            <div className="zl-benefit-title">180 Tage Zugang</div>
            <div className="zl-benefit-text">Doppelt so lang wie beim Einzelkurs – berufs­begleitend in Ihrem Tempo.</div>
          </div>
        </section>

        <section className="zl-tracks">
          {lehrgaenge.map(l => (
            <article key={l.slug} id={l.slug} className="zl-track">
              <div className="zl-track-head" style={{ background: l.color }}>
                {l.savingsPercent > 0 && (
                  <div className="zl-savings-badge">−{l.savingsPercent} % gespart</div>
                )}
                <div className="zl-track-emoji">{l.emoji}</div>
                <h2 className="zl-track-title">{l.title}</h2>
                <p className="zl-track-subtitle">{l.subtitle}</p>
              </div>
              <div className="zl-track-body">
                <div>
                  <div className="zl-section-label">Kurse im Lehrgang ({l.totalHours} h Aufwand)</div>
                  <ul className="zl-courses-list">
                    {l.courses.map((c, i) => (
                      <li key={c.slug} className="zl-course-item">
                        <div className="zl-course-num">{i + 1}</div>
                        <div className="zl-course-info">
                          <div className="zl-course-title">{c.course.title}</div>
                          <div className="zl-course-meta">{c.level} · {c.priceLabel}</div>
                        </div>
                        <Link href={c.href} className="zl-course-link">Details →</Link>
                      </li>
                    ))}
                  </ul>

                  <div className="zl-section-label">Nach Abschluss können Sie</div>
                  <ul className="zl-outcomes">
                    {l.outcomes.map((o, i) => <li key={i}>{o}</li>)}
                  </ul>

                  <div className="zl-target-roles">
                    <strong>Für:</strong> {l.targetRoles.join(' · ')}
                  </div>
                </div>

                <div>
                  <div className="zl-price-box">
                    <div className="zl-price-big">
                      {l.bundlePriceLabel}
                      {l.singleTotal > l.bundlePrice && (
                        <span className="zl-price-strike">CHF {l.singleTotal}</span>
                      )}
                    </div>
                    <div className="zl-price-label">Einzelperson · inkl. Abschluss­zertifikat</div>
                    <div className="zl-team-prices">
                      <strong>Team-Lizenzen:</strong><br />
                      5&nbsp;Pers. {l.teamPrices.team5.label} · 10&nbsp;Pers. {l.teamPrices.team10.label} · 25&nbsp;Pers. {l.teamPrices.team25.label}
                    </div>
                  </div>

                  <a
                    href={`mailto:andreas.rupf@spekt.ch?subject=${encodeURIComponent(`Zertifikatslehrgang buchen: ${l.title}`)}&body=${encodeURIComponent(`Guten Tag Andreas\n\nIch möchte den Lehrgang «${l.title}» buchen.\n\nName:\nOrganisation:\nAnzahl Personen:\n\nBeste Grüsse`)}`}
                    className="zl-cta"
                  >
                    Lehrgang buchen →
                  </a>
                  <Link href="/fuer-gemeinden" className="zl-cta-team">
                    Team-Lizenz besprechen
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="zl-trust">
          <h2>Warum ein Zertifikatslehrgang von SPEKTRUM?</h2>
          <p>
            Die Inhalte entstehen aus der täglichen Praxis: SPEKTRUM Partner GmbH betreibt den KI-Assistenten <a href="https://minu-ai.ch" style={{ color: '#0057a8' }}>MINU-AI</a>,
            das Tool <a href="https://interessenabwägung.ch" style={{ color: '#0057a8' }}>Interessenabwägung.ch</a> und erstellt
            Bauzonenberichte für Schweizer Gemeinden. Andreas Rupf leitete das Programm «ETH RAUM» an der ETH Zürich und kennt die
            Anforderungen von Verwaltung, Planungsbüro und Gremium aus erster Hand.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
