import type { Metadata } from 'next';
import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { getProgress } from '@/lib/progress';
import { COURSE_STRATEGIE } from '@/data/course-strategie';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import Link from 'next/link';
import BuyButton from '@/components/BuyButton';
import { hasCourseAccess, getCourseExpiry, formatExpiry, daysRemaining } from '@/lib/courseAccess';

export const metadata: Metadata = {
  title: 'KI-Strategie für Gemeinden – Strategiekurs für Verwaltungen | SPEKTRUM',
  description: 'Strategischer KI-Kurs für Führungskräfte und KI-Verantwortliche in Gemeindeverwaltungen. Governance, Rahmenbedingungen und Implementierungsstrategie für KI in der öffentlichen Hand. CHF 39.',
  keywords: ['KI Strategie Gemeinden', 'KI Digitalstrategie Verwaltung', 'KI Governance öffentliche Hand', 'KI Policy Gemeinden DACH', 'KI Strategie Kurs Deutschland Österreich Schweiz', 'Digitale Transformation Verwaltung KI'],
  alternates: { canonical: 'https://kurse.spekt.ch/kurs-strategie' },
  openGraph: {
    title: 'KI-Strategie für Gemeinden – Strategiekurs',
    description: 'KI-Governance, Rahmenbedingungen und Implementierungsstrategie für Führungskräfte in Verwaltungen.',
    url: 'https://kurse.spekt.ch/kurs-strategie',
    siteName: 'SPEKTRUM KI-Kurse',
    locale: 'de_CH',
    type: 'website',
  },
};

export default async function KursStrategiePage() {
  const auth = getUserFromCookie();
  // Keine Weiterleitung – Kursübersichtsseiten sind öffentlich (SEO)
  const user = auth ? getUserByEmail(auth.email) : null;
  const progress = auth ? getProgress(auth.email) : { completedLessons: [] as string[], quizResults: [], lastActivity: '' };
  const allLessonIds = COURSE_STRATEGIE.modules.flatMap(m => m.lessons.map(l => `${m.slug}/${l.slug}`));
  const completedForCourse = progress.completedLessons.filter(id => allLessonIds.includes(id));
  const totalLessons = allLessonIds.length;
  const percent = totalLessons > 0 ? Math.round(completedForCourse.length / totalLessons * 100) : 0;
  const purchased = hasCourseAccess(user, 'kurs-strategie');
  const expiry = getCourseExpiry(user, 'kurs-strategie');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .kp-wrap { max-width: 820px; margin: 0 auto; padding: 40px 24px 100px; }
        .kp-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; color: #6e6e73; text-decoration: none;
          margin-bottom: 32px; transition: color 0.15s;
        }
        .kp-back:hover { color: #1a6b3c; }
        .kp-header { margin-bottom: 32px; }
        .kp-title-row {
          display: flex; align-items: center; gap: 14px;
          flex-wrap: wrap; margin-bottom: 8px;
        }
        .kp-title {
          font-size: clamp(26px, 4vw, 36px); font-weight: 800;
          color: #1d1d1f; letter-spacing: -0.02em; margin: 0;
        }
        .kp-badge {
          display: inline-flex; align-items: center;
          padding: 4px 12px; border-radius: 100px; font-size: 13px;
          font-weight: 600; border: 1.5px solid #1a6b3c;
          color: #145230; background: #f0fff8; white-space: nowrap;
        }
        .kp-subtitle { font-size: 16px; color: #6e6e73; line-height: 1.5; margin: 0; }
        .kp-progress-card {
          background: linear-gradient(135deg, #f0fff8 0%, #f0f7ff 100%);
          border-radius: 14px; padding: 20px 24px; margin-bottom: 40px;
          border: 1px solid #b8ddc8;
        }
        .kp-progress-label {
          font-size: 12px; font-weight: 700; color: #1a6b3c;
          text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 10px;
        }
        .kp-section-heading {
          display: flex; align-items: center; gap: 10px;
          font-size: 20px; font-weight: 700; color: #1d1d1f; margin-bottom: 20px;
        }
        .kp-section-heading svg { color: #1a6b3c; flex-shrink: 0; }
        .kp-module-card {
          background: white; border: 1.5px solid #e8e8ed;
          border-radius: 14px; padding: 24px; margin-bottom: 16px;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .kp-module-card:hover { border-color: #a0d4b8; box-shadow: 0 4px 20px rgba(26,107,60,0.07); }
        .kp-module-card-title { font-size: 17px; font-weight: 700; color: #1d1d1f; margin-bottom: 6px; }
        .kp-module-card-desc { font-size: 14px; color: #6e6e73; line-height: 1.5; margin-bottom: 14px; }
        .kp-module-meta {
          display: flex; align-items: center; gap: 12px; font-size: 13px;
          color: #6e6e73; padding-bottom: 16px; border-bottom: 1px solid #f0f0f5;
          margin-bottom: 16px; flex-wrap: wrap;
        }
        .kp-meta-item { display: flex; align-items: center; gap: 5px; }
        .kp-meta-item svg { flex-shrink: 0; }
        .kp-quiz-pill {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 3px 10px; border-radius: 100px;
          border: 1.5px solid #1a6b3c; color: #145230;
          font-size: 12px; font-weight: 600; background: transparent;
        }
        .kp-price-card {
          background: white; border: 1.5px solid #e8e8ed; border-radius: 14px;
          padding: 24px 28px; margin-bottom: 32px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
        }
        .kp-price-amount {
          font-size: 36px; font-weight: 900; color: #1d1d1f;
          line-height: 1; margin-bottom: 5px; letter-spacing: -0.02em;
        }
        .kp-price-sub { font-size: 14px; color: #8e8e93; font-weight: 500; }
        .kp-buy-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #1a6b3c 0%, #0057a8 100%);
          color: white; padding: 14px 28px; border-radius: 10px;
          font-weight: 700; font-size: 15px; text-decoration: none;
          transition: opacity 0.15s, transform 0.15s; white-space: nowrap;
        }
        .kp-buy-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .kp-lessons { display: flex; flex-direction: column; gap: 8px; }
        .kp-lesson {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; background: #fafafa; border-radius: 10px;
          border: 1.5px solid #f0f0f5; text-decoration: none;
          color: #1d1d1f; transition: all 0.15s;
        }
        .kp-lesson:hover { border-color: #1a6b3c; background: #f0fff8; }
        .kp-lesson.done { border-color: #a0d4b8; background: #f0fff8; }
        .kp-lesson-check {
          width: 22px; height: 22px; border-radius: 50%;
          border: 2px solid #d2d2d7; display: flex; align-items: center;
          justify-content: center; font-size: 11px; flex-shrink: 0; transition: all 0.15s;
        }
        .kp-lesson-check.done { background: #1a6b3c; border-color: #1a6b3c; color: white; }
        .kp-lesson-title { font-size: 14px; font-weight: 500; flex: 1; }
        .kp-lesson-desc { font-size: 12px; color: #8e8e93; margin-top: 1px; }
        .kp-lesson-arrow { color: #b0b0b8; font-size: 16px; }
        .kp-final-card {
          background: white; border: 1.5px solid #a0d4b8;
          border-radius: 14px; padding: 24px; margin-bottom: 16px;
        }
        .kp-final-heading {
          display: flex; align-items: center; gap: 10px;
          font-size: 17px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px;
        }
        .kp-final-heading svg { color: #1a6b3c; }
        .kp-final-desc { font-size: 14px; color: #6e6e73; line-height: 1.5; margin-bottom: 16px; }
        .kp-cert-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 14px; border-radius: 100px;
          border: 1.5px solid #1a6b3c; color: #145230;
          font-size: 13px; font-weight: 600; background: #f0fff8;
        }
        .kp-cta-bar {
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; background: white; border: 1.5px solid #e8e8ed;
          border-radius: 14px; padding: 20px 24px; margin-top: 8px; flex-wrap: wrap;
        }
        .kp-cta-text { font-size: 15px; color: #3a3a3c; }
        .kp-cta-text strong { color: #1d1d1f; }
        .kp-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #1a6b3c 0%, #0057a8 100%);
          color: white; padding: 12px 24px; border-radius: 10px;
          font-weight: 700; font-size: 15px; text-decoration: none;
          white-space: nowrap; transition: opacity 0.15s, transform 0.15s;
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
        name: 'KI-Strategie für Gemeinden',
        description: 'Strategischer KI-Kurs für Führungskräfte und KI-Verantwortliche in Gemeindeverwaltungen. Governance, Rahmenbedingungen und Implementierungsstrategie.',
        url: 'https://kurse.spekt.ch/kurs-strategie',
        provider: { '@type': 'Organization', name: 'SPEKTRUM Partner GmbH', url: 'https://spekt.ch' },
        instructor: { '@type': 'Person', name: 'Andreas Rupf', url: 'https://spekt.ch' },
        offers: { '@type': 'Offer', price: '39', priceCurrency: 'CHF', availability: 'https://schema.org/InStock', validFrom: '2024-01-01' },
        educationalLevel: 'Experte',
        inLanguage: 'de',
        availableLanguage: 'de',
        coursePrerequisites: 'Erfahrung in Verwaltungsführung empfohlen',
        teaches: ['KI-Strategie', 'KI-Governance', 'KI-Implementierung Verwaltung', 'Digitale Transformation Gemeinden'],
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT7H', inLanguage: 'de' },
      }) }} />
      <Header userEmail={auth?.email} />
      <div className="kp-wrap">

        <Link href="/kurse" className="kp-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Alle Kurse
        </Link>

        <div className="kp-header">
          <div className="kp-title-row">
            <h1 className="kp-title">{COURSE_STRATEGIE.title}</h1>
            <span className="kp-badge">Experte</span>
          </div>
          <p className="kp-subtitle">{COURSE_STRATEGIE.description}</p>
        </div>

        {/* Preis-Card */}
        {purchased ? (
          <div className="kp-price-card" style={{ background: 'linear-gradient(135deg, #f0fff8 0%, #e8f7ef 100%)', borderColor: '#a0d4b8' }}>
            <div className="kp-price-left">
              <div className="kp-price-amount" style={{ color: '#145230' }}>✓ Zugang aktiv</div>
              <div className="kp-price-sub">
                {expiry ? `Gültig bis ${formatExpiry(expiry)} (${daysRemaining(expiry)} Tage)` : '90 Tage Zugang'}
              </div>
            </div>
          </div>
        ) : (
          <div className="kp-price-card">
            <div className="kp-price-left">
              <div className="kp-price-amount">CHF 39</div>
              <div className="kp-price-sub">90 Tage Zugang</div>
            </div>
            <BuyButton courseSlug="kurs-strategie" label="Zugang kaufen – CHF 39" color="#1a6b3c" />
          </div>
        )}

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

        {auth && (
          <div className="kp-progress-card">
            <div className="kp-progress-label">Dein Fortschritt</div>
            <ProgressBar
              percent={percent}
              label={`${completedForCourse.length} von ${totalLessons} Lektionen abgeschlossen`}
            />
          </div>
        )}

        <div className="kp-section-heading">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
          Kursmodule
        </div>

        {COURSE_STRATEGIE.modules.map((modul, mi) => {
          const quizCount = modul.lessons.reduce((s, l) => s + (l.quiz ? l.quiz.questions.length : 0), 0);
          const doneLessons = modul.lessons.filter(l =>
            progress.completedLessons.includes(`${modul.slug}/${l.slug}`)
          ).length;

          return (
            <div key={modul.id} className="kp-module-card">
              <div className="kp-module-card-title">Modul {mi + 1}: {modul.title}</div>
              <div className="kp-module-card-desc">{modul.description}</div>
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    {quizCount}-Fragen Quiz
                  </span>
                )}
                {doneLessons > 0 && (
                  <span className="kp-meta-item" style={{ color: '#1a6b3c', marginLeft: 'auto' }}>
                    {doneLessons}/{modul.lessons.length} abgeschlossen
                  </span>
                )}
              </div>
              <div className="kp-lessons">
                {modul.lessons.map((lektion, li) => {
                  const lessonId = `${modul.slug}/${lektion.slug}`;
                  const done = progress.completedLessons.includes(lessonId);
                  const isFreePreview = mi === 0 && li === 0;
                  if (!purchased && !isFreePreview) {
                    return (
                      <div key={lektion.id} className="kp-lesson" style={{ opacity: 0.55, cursor: 'default' }}>
                        <div className="kp-lesson-check" style={{ fontSize: 12 }}>🔒</div>
                        <div style={{ flex: 1 }}>
                          <div className="kp-lesson-title">{lektion.title}</div>
                          <div className="kp-lesson-desc">{lektion.description}</div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={lektion.id}
                      href={`/kurs-strategie/${modul.slug}/${lektion.slug}`}
                      className={`kp-lesson${done ? ' done' : ''}`}
                    >
                      <div className={`kp-lesson-check${done ? ' done' : ''}`}>{done ? '✓' : ''}</div>
                      <div style={{ flex: 1 }}>
                        <div className="kp-lesson-title">
                          {lektion.title}
                          {isFreePreview && !purchased && (
                            <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 100, background: '#00a896', color: 'white', textTransform: 'uppercase', letterSpacing: 0.5, verticalAlign: 'middle' }}>Gratis-Vorschau</span>
                          )}
                        </div>
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
            Sobald du alle Lektionen abgeschlossen hast, erhältst du dein persönliches Abschlusszertifikat.
          </p>
          <Link href="/zertifikat?course=kurs-strategie" className="kp-cert-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Abschlusszertifikat öffnen →
          </Link>
        </div>

        <div className="kp-cta-bar">
          <span className="kp-cta-text">
            90 Tage Zugang zu allen {COURSE_STRATEGIE.modules.length} Modulen inkl. Abschlusszertifikat.
          </span>
          {!purchased && <BuyButton courseSlug="kurs-strategie" label="Zugang kaufen – CHF 39" color="#1a6b3c" />}
        </div>

      </div>

      {/* SEO-Textblock */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 48px', color: '#6e6e73', fontSize: 14, lineHeight: 1.7 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#1d1d1f', marginBottom: 10 }}>KI-Strategie für Gemeinden – Governance und Implementierung</h2>
        <p>Eine erfolgreiche KI-Einführung in Gemeindeverwaltungen braucht mehr als Tools – sie braucht Strategie, Governance und klare Rahmenbedingungen. Dieser Kurs richtet sich an Führungskräfte, Gemeinderätinnen und KI-Verantwortliche in Gemeinden der Schweiz, Deutschlands und Österreichs. Du entwickelst einen KI-Rahmen für deine Gemeinde, lernst Datenschutz und Transparenzanforderungen kennen und planst die schrittweise Implementierung. Mit konkreten Vorlagen und Checklisten für die Gemeindepraxis.</p>
      </div>

      <Footer />
    </>
  );
}
