import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { getProgress, getProgressPercent } from '@/lib/progress';
import { COURSE_ALLGEMEIN } from '@/data/course-allgemein';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function KursAllgemeinPage() {
  const auth = getUserFromCookie();
  if (!auth) redirect('/login');

  const user = getUserByEmail(auth.email);
  const progress = getProgress(auth.email);
  const percent = getProgressPercent(auth.email);
  const totalLessons = COURSE_ALLGEMEIN.modules.reduce((s, m) => s + m.lessons.length, 0);

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
        .kp-back:hover { color: #0057a8; }

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
          border: 1.5px solid #00a896;
          color: #007a6e;
          background: #f0fff8;
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
          background: linear-gradient(135deg, #f0f7ff 0%, #f0fff8 100%);
          border-radius: 14px;
          padding: 20px 24px;
          margin-bottom: 40px;
          border: 1px solid #e0eeff;
        }
        .kp-progress-label {
          font-size: 12px;
          font-weight: 700;
          color: #0057a8;
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
        .kp-section-heading svg { color: #0057a8; flex-shrink: 0; }

        /* ---- Modul-Card ---- */
        .kp-module-card {
          background: white;
          border: 1.5px solid #e8e8ed;
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 16px;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .kp-module-card:hover { border-color: #c0d4f0; box-shadow: 0 4px 20px rgba(0,87,168,0.06); }
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
          border: 1.5px solid #00a896;
          color: #007a6e;
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
        .kp-price-left {}
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
          background: #00a896;
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
        .kp-lesson:hover { border-color: #0057a8; background: #f0f7ff; }
        .kp-lesson.done { border-color: #b8ede7; background: #f0fff8; }
        .kp-lesson-check {
          width: 22px; height: 22px;
          border-radius: 50%;
          border: 2px solid #d2d2d7;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
          transition: all 0.15s;
        }
        .kp-lesson-check.done { background: #00a896; border-color: #00a896; color: white; }
        .kp-lesson-title { font-size: 14px; font-weight: 500; flex: 1; }
        .kp-lesson-desc { font-size: 12px; color: #8e8e93; margin-top: 1px; }
        .kp-lesson-arrow { color: #b0b0b8; font-size: 16px; }

        /* ---- Abschlusstest-Card ---- */
        .kp-final-card {
          background: white;
          border: 1.5px solid #b8ede7;
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
        .kp-final-heading svg { color: #00a896; }
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
          border: 1.5px solid #00a896;
          color: #007a6e;
          font-size: 13px;
          font-weight: 600;
          background: #f0fff8;
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
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
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

      <Header userEmail={auth.email} />
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
            <h1 className="kp-title">{COURSE_ALLGEMEIN.title}</h1>
            <span className="kp-badge">Einsteiger</span>
          </div>
          <p className="kp-subtitle">{COURSE_ALLGEMEIN.description}</p>
        </div>

        {/* Preis-Card */}
        <div className="kp-price-card">
          <div className="kp-price-left">
            <div className="kp-price-amount">CHF 19</div>
            <div className="kp-price-sub">Lifetime Access</div>
          </div>
          <Link href="/register" className="kp-buy-btn">
            Lifetime Access kaufen – CHF 19
          </Link>
        </div>

        {/* Fortschritts-Card */}
        <div className="kp-progress-card">
          <div className="kp-progress-label">Dein Fortschritt</div>
          <ProgressBar
            percent={percent}
            label={`${progress.completedLessons.length} von ${totalLessons} Lektionen abgeschlossen`}
          />
        </div>

        {/* Kursmodule */}
        <div className="kp-section-heading">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
          Kursmodule
        </div>

        {COURSE_ALLGEMEIN.modules.map((modul, mi) => {
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
                  <span className="kp-meta-item" style={{ color: '#00a896', marginLeft: 'auto' }}>
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
                      href={`/kurs-allgemein/${modul.slug}/${lektion.slug}`}
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
          <span className="kp-cert-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Abschlusszertifikat inklusive
          </span>
        </div>

        {/* Unterer CTA */}
        <div className="kp-cta-bar">
          <span className="kp-cta-text">
            Lifetime Access zu allen {COURSE_ALLGEMEIN.modules.length} Modulen inkl. Abschlusszertifikat.
          </span>
          <Link href="/register" className="kp-cta-btn">
            Lifetime Access kaufen – CHF 19
          </Link>
        </div>

      </div>
      <Footer />
    </>
  );
}
