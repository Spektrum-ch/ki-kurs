import type { Metadata } from 'next';
import { getUserFromCookie } from '@/lib/auth';
import { getProgress } from '@/lib/progress';
import { COURSE_INTERESSENABWAEGUNG } from '@/data/course-interessenabwaegung';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Interessenabwägung mit KI – Gratis Kurs | SPEKTRUM',
  description: 'Gratis Einführungskurs in das KI-Tool interessenabwaegung.ch. Methodik und Praxis der KI-gestützten Interessenabwägung nach Schweizer Raumplanungsrecht (RPG). Kostenlos zugänglich.',
  keywords: ['Interessenabwägung KI', 'interessenabwaegung.ch', 'RPG KI Schweiz', 'Raumplanung KI Tool', 'Interessenabwägung Tool', 'KI Raumplanungsrecht', 'Gratis KI Kurs Raumplanung'],
  alternates: { canonical: 'https://kurse.spekt.ch/kurs-interessenabwaegung' },
  openGraph: {
    title: 'Interessenabwägung mit KI – Gratis Kurs',
    description: 'Gratis Einführung in KI-gestützte Interessenabwägung nach Schweizer RPG – zugänglich für alle.',
    url: 'https://kurse.spekt.ch/kurs-interessenabwaegung',
    siteName: 'SPEKTRUM KI-Kurse',
    locale: 'de_CH',
    type: 'website',
  },
};

export default async function KursInteressenabwaegungPage() {
  const auth = getUserFromCookie();
  // Keine Weiterleitung – Kursübersichtsseiten sind öffentlich (SEO)
  const progress = auth ? getProgress(auth.email) : { completedLessons: [] as string[], quizResults: [], lastActivity: '' };
  const allLessonIds = COURSE_INTERESSENABWAEGUNG.modules.flatMap(m => m.lessons.map(l => `${m.slug}/${l.slug}`));
  const completedForCourse = progress.completedLessons.filter(id => allLessonIds.includes(id));
  const totalLessons = allLessonIds.length;
  const percent = totalLessons > 0 ? Math.round(completedForCourse.length / totalLessons * 100) : 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ---- Layout ---- */
        .kp-wrap { max-width: 820px; margin: 0 auto; padding: 40px 24px 100px; }

        /* ---- Breadcrumb ---- */
        .kp-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #6e6e73;
          text-decoration: none;
          margin-bottom: 32px;
          transition: color 0.15s;
        }
        .kp-back:hover { color: #b34700; }

        /* ---- Kurs-Header ---- */
        .kp-header { margin-bottom: 32px; }
        .kp-title-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .kp-title {
          font-size: clamp(26px, 4vw, 36px);
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .kp-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          border: 1.5px solid #e65c00;
          color: #b34700;
          background: #fff8f0;
          white-space: nowrap;
        }
        .kp-subtitle {
          font-size: 16px;
          color: #6e6e73;
          line-height: 1.5;
          margin: 0;
        }

        /* ---- Fortschritts-Card ---- */
        .kp-progress-card {
          background: linear-gradient(135deg, #fff8f0 0%, #fff3e0 100%);
          border-radius: 14px;
          padding: 20px 24px;
          margin-bottom: 40px;
          border: 1px solid #ffdcba;
        }
        .kp-progress-label {
          font-size: 12px;
          font-weight: 700;
          color: #b34700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 10px;
        }

        /* ---- Section-Heading ---- */
        .kp-section-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 20px;
        }
        .kp-section-heading svg { color: #e65c00; flex-shrink: 0; }

        /* ---- Modul-Card ---- */
        .kp-module-card {
          background: white;
          border: 1.5px solid #e8e8ed;
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 16px;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .kp-module-card:hover { border-color: #ffdcba; box-shadow: 0 4px 20px rgba(230,92,0,0.07); }
        .kp-module-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 6px;
        }
        .kp-module-card-desc {
          font-size: 14px;
          color: #6e6e73;
          line-height: 1.5;
          margin-bottom: 14px;
        }
        .kp-module-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: #6e6e73;
          padding-bottom: 16px;
          border-bottom: 1px solid #f0f0f5;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .kp-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .kp-meta-item svg { flex-shrink: 0; }
        .kp-quiz-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1.5px solid #e65c00;
          color: #b34700;
          font-size: 12px;
          font-weight: 600;
          background: transparent;
        }

        /* ---- Preis-Card ---- */
        .kp-price-card {
          background: white;
          border: 1.5px solid #e8e8ed;
          border-radius: 14px;
          padding: 24px 28px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .kp-price-amount {
          font-size: 36px;
          font-weight: 900;
          color: #1d1d1f;
          line-height: 1;
          margin-bottom: 5px;
          letter-spacing: -0.02em;
        }
        .kp-price-sub {
          font-size: 14px;
          color: #8e8e93;
          font-weight: 500;
        }
        .kp-buy-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e65c00;
          color: white;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: opacity 0.15s, transform 0.15s;
          white-space: nowrap;
        }
        .kp-buy-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        /* ---- Lektionsliste ---- */
        .kp-lessons { display: flex; flex-direction: column; gap: 8px; }
        .kp-lesson {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: #fafafa;
          border-radius: 10px;
          border: 1.5px solid #f0f0f5;
          text-decoration: none;
          color: #1d1d1f;
          transition: all 0.15s;
        }
        .kp-lesson:hover { border-color: #e65c00; background: #fff8f0; }
        .kp-lesson.done { border-color: #ffdcba; background: #fff8f0; }
        .kp-lesson-check {
          width: 22px; height: 22px;
          border-radius: 50%;
          border: 2px solid #d2d2d7;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
          transition: all 0.15s;
        }
        .kp-lesson-check.done { background: #e65c00; border-color: #e65c00; color: white; }
        .kp-lesson-title { font-size: 14px; font-weight: 500; flex: 1; }
        .kp-lesson-desc { font-size: 12px; color: #8e8e93; margin-top: 1px; }
        .kp-lesson-arrow { color: #b0b0b8; font-size: 16px; }

        /* ---- Abschlusstest-Card ---- */
        .kp-final-card {
          background: white;
          border: 1.5px solid #ffdcba;
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 16px;
        }
        .kp-final-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 17px;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 8px;
        }
        .kp-final-heading svg { color: #e65c00; }
        .kp-final-desc {
          font-size: 14px;
          color: #6e6e73;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .kp-cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 100px;
          border: 1.5px solid #e65c00;
          color: #b34700;
          font-size: 13px;
          font-weight: 600;
          background: #fff8f0;
        }

        /* ---- Unterer CTA ---- */
        .kp-cta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: white;
          border: 1.5px solid #e8e8ed;
          border-radius: 14px;
          padding: 20px 24px;
          margin-top: 8px;
          flex-wrap: wrap;
        }
        .kp-cta-text { font-size: 15px; color: #3a3a3c; }
        .kp-cta-text strong { color: #1d1d1f; }
        .kp-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #e65c00 0%, #f9d423 100%);
          color: white;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.15s, transform 0.15s;
        }
        .kp-cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        @media (max-width: 600px) {
          .kp-cta-bar { flex-direction: column; align-items: flex-start; }
          .kp-module-meta { gap: 10px; }
        }
      `}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Interessenabwägung mit KI',
        description: 'Gratis Einführungskurs in das KI-Tool interessenabwaegung.ch. Methodik und Praxis der KI-gestützten Interessenabwägung nach Schweizer Raumplanungsrecht (RPG).',
        url: 'https://kurse.spekt.ch/kurs-interessenabwaegung',
        provider: { '@type': 'Organization', name: 'SPEKTRUM Partner GmbH', url: 'https://spekt.ch' },
        instructor: { '@type': 'Person', name: 'Andreas Rupf', url: 'https://spekt.ch' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CHF', availability: 'https://schema.org/InStock', validFrom: '2024-01-01' },
        educationalLevel: 'Einsteiger',
        inLanguage: 'de',
        availableLanguage: 'de',
        coursePrerequisites: 'Keine Vorkenntnisse erforderlich',
        teaches: ['Interessenabwägung Methodik', 'KI-Tool interessenabwaegung.ch', 'RPG Schweiz', 'KI Raumplanungsrecht'],
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT3H', inLanguage: 'de' },
      }) }} />
      <Header userEmail={auth?.email} />
      <div className="kp-wrap">

        {/* Breadcrumb */}
        <Link href="/kurse" className="kp-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Alle Kurse
        </Link>

        {/* Kurs-Header */}
        <div className="kp-header">
          <div className="kp-title-row">
            <h1 className="kp-title">{COURSE_INTERESSENABWAEGUNG.title}</h1>
            <span className="kp-badge">Fortgeschritten</span>
          </div>
          <p className="kp-subtitle">{COURSE_INTERESSENABWAEGUNG.description}</p>
        </div>

        {/* Login-Prompt für nicht eingeloggte User */}
        {!auth && (
          <div style={{ background: '#f0f7ff', border: '1.5px solid #c0d4f0', borderRadius: 14, padding: '16px 24px', marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ fontSize: 14, color: '#0057a8', fontWeight: 600 }}>
              🔐 Einloggen oder registrieren um Zugang zu erhalten
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <a href="/login" style={{ padding: '8px 18px', borderRadius: 8, border: '1.5px solid #0057a8', color: '#0057a8', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Einloggen</a>
              <a href="/register" style={{ padding: '8px 18px', borderRadius: 8, background: '#0057a8', color: 'white', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Registrieren</a>
            </div>
          </div>
        )}

        {/* Fortschritts-Card */}
        {auth && (
          <div className="kp-progress-card">
            <div className="kp-progress-label">Dein Fortschritt</div>
            <ProgressBar
              percent={percent}
              label={`${completedForCourse.length} von ${totalLessons} Lektionen abgeschlossen`}
            />
          </div>
        )}

        {/* Kursmodule */}
        <div className="kp-section-heading">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
          Kursmodule
        </div>

        {COURSE_INTERESSENABWAEGUNG.modules.map((modul, mi) => {
          const quizCount = modul.lessons.reduce((s, l) => s + (l.quiz ? l.quiz.questions.length : 0), 0);
          const doneLessons = modul.lessons.filter(l =>
            progress.completedLessons.includes(`${modul.slug}/${l.slug}`)
          ).length;

          return (
            <div key={modul.id} className="kp-module-card">
              <div className="kp-module-card-title">
                Modul {mi + 1}: {modul.title}
              </div>
              <div className="kp-module-card-desc">{modul.description}</div>

              {/* Metadaten */}
              <div className="kp-module-meta">
                <span className="kp-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  {modul.lessons.length} Lektionen
                </span>
                {quizCount > 0 && (
                  <span className="kp-quiz-pill">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    {quizCount}-Fragen Quiz
                  </span>
                )}
                {doneLessons > 0 && (
                  <span className="kp-meta-item" style={{ color: '#e65c00', marginLeft: 'auto' }}>
                    {doneLessons}/{modul.lessons.length} abgeschlossen
                  </span>
                )}
              </div>

              {/* Lektionen */}
              <div className="kp-lessons">
                {modul.lessons.map(lektion => {
                  const lessonId = `${modul.slug}/${lektion.slug}`;
                  const done = progress.completedLessons.includes(lessonId);
                  return (
                    <Link
                      key={lektion.id}
                      href={`/kurs-interessenabwaegung/${modul.slug}/${lektion.slug}`}
                      className={`kp-lesson${done ? ' done' : ''}`}
                    >
                      <div className={`kp-lesson-check${done ? ' done' : ''}`}>
                        {done ? '✓' : ''}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="kp-lesson-title">{lektion.title}</div>
                        <div className="kp-lesson-desc">{lektion.description}</div>
                      </div>
                      <span className="kp-lesson-arrow">→</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Abschlusstest-Card */}
        <div className="kp-final-card">
          <div className="kp-final-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Abschlusstest & Zertifikat
          </div>
          <p className="kp-final-desc">
            Schliesse alle Module ab und beweise dein Wissen im finalen Test.
            Bei 70% oder mehr erhältst du dein persönliches Abschlusszertifikat.
          </p>
          <Link href="/zertifikat?course=kurs-interessenabwaegung" className="kp-cert-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Abschlusszertifikat öffnen →
          </Link>
        </div>

        {/* Unterer CTA */}
        <div className="kp-cta-bar">
          <span className="kp-cta-text">
            Frei zugänglich – alle {COURSE_INTERESSENABWAEGUNG.modules.length} Module inkl. Abschlusszertifikat.
          </span>
          <Link href="/register" className="kp-cta-btn">
            Jetzt ohne Kosten starten
          </Link>
        </div>

      </div>

      {/* SEO-Textblock */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 48px', color: '#6e6e73', fontSize: 14, lineHeight: 1.7 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#1d1d1f', marginBottom: 10 }}>KI-gestützte Interessenabwägung nach Schweizer Raumplanungsrecht</h2>
        <p>Die Interessenabwägung ist ein zentrales Instrument des Schweizer Raumplanungsrechts (RPG). Das KI-Tool interessenabwaegung.ch unterstützt Raumplanende dabei, öffentliche und private Interessen systematisch zu erfassen, zu gewichten und abzuwägen. Dieser Gratis-Kurs führt in die Methodik und Nutzung des Tools ein. Du lernst, wie KI den Abwägungsprozess strukturiert, beschleunigt und dokumentiert – und wie du die Ergebnisse in deiner Planungspraxis einsetzt. Kostenlos und ohne Vorkenntnisse zugänglich.</p>
      </div>

      <Footer />
    </>
  );
}
