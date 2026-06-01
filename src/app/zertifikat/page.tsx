import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { getProgress } from '@/lib/progress';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import ZertifikatActions from '@/components/ZertifikatActions';
import { COURSE } from '@/data/course';
import { COURSE_ALLGEMEIN } from '@/data/course-allgemein';
import { COURSE_BUERO } from '@/data/course-buero';
import { COURSE_GEMEINDEN } from '@/data/course-gemeinden';
import { COURSE_AGENTIC } from '@/data/course-agentic';
import { COURSE_STRATEGIE } from '@/data/course-strategie';
import { COURSE_INTERESSENABWAEGUNG } from '@/data/course-interessenabwaegung';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Alle Kurse nach Route-Slug (mit Modul-Titeln)
const COURSES: Record<string, { title: string; modules: { slug: string; title: string; lessons: { slug: string }[] }[] }> = {
  'kurs':                     COURSE,
  'kurs-allgemein':           COURSE_ALLGEMEIN,
  'kurs-buero':               COURSE_BUERO,
  'kurs-gemeinden':           COURSE_GEMEINDEN,
  'kurs-agentic':             COURSE_AGENTIC,
  'kurs-strategie':           COURSE_STRATEGIE,
  'kurs-interessenabwaegung': COURSE_INTERESSENABWAEGUNG,
};

interface Props {
  searchParams?: { course?: string };
}

export default async function ZertifikatPage({ searchParams }: Props) {
  const auth = getUserFromCookie();
  if (!auth) redirect('/login');

  const user = getUserByEmail(auth.email);
  const progress = getProgress(auth.email);

  const courseSlug = searchParams?.course || 'kurs';
  const courseData = COURSES[courseSlug] ?? COURSE;
  const courseTitle = courseData.title;

  // Kurs-spezifischer Fortschritt
  const allLessonIds = courseData.modules.flatMap(m => m.lessons.map(l => `${m.slug}/${l.slug}`));
  const completedForCourse = progress.completedLessons.filter(id => allLessonIds.includes(id));
  const percent = allLessonIds.length > 0
    ? Math.round(completedForCourse.length / allLessonIds.length * 100)
    : 0;

  const name = user?.name ?? auth.email.split('@')[0];
  const date = new Date().toLocaleDateString('de-CH', { day: '2-digit', month: 'long', year: 'numeric' });
  const year = new Date().getFullYear();

  // Modul-Titel für Inhalts-Liste
  const moduleTitles = courseData.modules.map(m => m.title);
  const half = Math.ceil(moduleTitles.length / 2);
  const leftCol = moduleTitles.slice(0, half);
  const rightCol = moduleTitles.slice(half);
  const singleCol = moduleTitles.length <= 2;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

        /* ── Seiten-Hintergrund ─────────────────────────────── */
        .zert-outer {
          min-height: 100vh;
          background: #eef0f3;
          padding: 48px 20px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Zertifikats-Dokument ───────────────────────────── */
        .zert-doc {
          background: white;
          width: 100%;
          max-width: 694px;
          padding: 44px 52px 40px;
          border: 1.5px solid #0057a8;
          box-shadow: 0 6px 40px rgba(0,87,168,0.13);
          position: relative;
        }
        /* Gradient-Akzentlinie oben */
        .zert-doc::before {
          content: '';
          position: absolute;
          top: -1.5px; left: -1.5px; right: -1.5px;
          height: 5px;
          background: linear-gradient(90deg, #0057a8 0%, #00a896 100%);
        }

        /* ── Logo-Zeile ─────────────────────────────────────── */
        .zert-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
        }
        .zert-logo {
          height: 40px;
          width: auto;
        }
        .zert-org-block {
          border-left: 1.5px solid #d8d8dc;
          padding-left: 14px;
        }
        .zert-org-name {
          font-size: 13.5px;
          font-weight: 700;
          color: #1d1d1f;
          letter-spacing: 0.01em;
        }
        .zert-org-sub {
          font-size: 11px;
          color: #6e6e73;
          margin-top: 2px;
        }

        /* ── Trennlinie mit Tagline ─────────────────────────── */
        .zert-divider-block {
          margin-bottom: 36px;
          text-align: center;
        }
        .zert-hr {
          border: none;
          border-top: 1px solid #c8c8cc;
          margin: 0;
        }
        .zert-tagline {
          font-size: 11.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6e6e73;
          padding: 8px 0;
        }

        /* ── Hauptinhalt Zertifikat ─────────────────────────── */
        .zert-body {
          text-align: center;
          padding: 4px 0 20px;
        }
        .zert-pre-label {
          font-size: 14px;
          color: #6e6e73;
          margin-bottom: 10px;
        }
        .zert-name {
          font-size: 40px;
          font-weight: 800;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .zert-mid-label {
          font-size: 14px;
          color: #6e6e73;
          margin-bottom: 10px;
        }
        .zert-course-title {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .zert-year {
          font-size: 14px;
          color: #6e6e73;
        }

        /* ── Kursinhalt ─────────────────────────────────────── */
        .zert-content {
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid #e8e8ed;
          text-align: left;
        }
        .zert-content-label {
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          color: #aeaeb2;
          margin-bottom: 12px;
        }
        .zert-modules-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px 20px;
        }
        .zert-modules-grid.single {
          grid-template-columns: 1fr;
        }
        .zert-module-item {
          font-size: 13px;
          color: #3a3a3c;
          padding: 3px 0 3px 16px;
          position: relative;
          line-height: 1.45;
        }
        .zert-module-item::before {
          content: '–';
          position: absolute;
          left: 0;
          color: #0057a8;
          font-weight: 600;
        }

        /* ── Signatur ───────────────────────────────────────── */
        .zert-sig-section {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e8e8ed;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .zert-sig-left {}
        .zert-sig-img {
          height: 52px;
          width: auto;
          margin-bottom: 2px;
          display: block;
        }
        .zert-sig-name {
          font-size: 14px;
          font-weight: 700;
          color: #1d1d1f;
        }
        .zert-sig-role {
          font-size: 12px;
          color: #6e6e73;
          margin-top: 3px;
          line-height: 1.5;
        }
        .zert-sig-right {
          text-align: right;
        }
        .zert-sig-date-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #aeaeb2;
          margin-bottom: 4px;
        }
        .zert-sig-date {
          font-size: 13px;
          color: #3a3a3c;
        }

        /* ── Aktions-Leiste (Screen only) ───────────────────── */
        .zert-action-bar {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .zert-btn {
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: opacity 0.15s;
          display: inline-block;
        }
        .zert-btn:hover { opacity: 0.85; }
        .zert-btn-primary {
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white;
        }
        .zert-btn-secondary {
          background: white;
          color: #0057a8;
          border: 1.5px solid #0057a8;
        }

        /* ── Noch nicht fertig ──────────────────────────────── */
        .zert-progress-hint {
          max-width: 480px;
          text-align: center;
        }
        .zert-progress-box {
          margin-top: 20px;
          padding: 16px 20px;
          background: #fff8f0;
          border-radius: 12px;
          font-size: 14px;
          color: #8b5000;
          line-height: 1.6;
        }

        /* ── DRUCK / PDF ────────────────────────────────────── */
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          /* Alles ausser dem Zertifikat ausblenden */
          .no-print {
            display: none !important;
          }
          body, html {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .zert-outer {
            background: white !important;
            padding: 0 !important;
            display: block !important;
            min-height: unset !important;
          }
          .zert-doc {
            max-width: none !important;
            width: 210mm !important;
            min-height: 297mm !important;
            padding: 17mm 20mm 14mm !important;
            border: 1.5px solid #0057a8 !important;
            box-shadow: none !important;
            margin: 0 !important;
            page-break-inside: avoid;
          }
          /* Gradient-Text: Fallback auf Vollfarbe für Druck-Kompatibilität */
          .zert-name,
          .zert-course-title {
            -webkit-text-fill-color: #0057a8 !important;
            background: none !important;
            color: #0057a8 !important;
          }
          .zert-module-item::before {
            color: #0057a8 !important;
          }
        }
      `}} />

      {/* Header – nur am Bildschirm */}
      <div className="no-print">
        <Header userEmail={auth.email} />
      </div>

      <div className="zert-outer">

        {/* Noch nicht abgeschlossen */}
        {percent < 100 ? (
          <div className="zert-progress-hint">
            <div style={{ fontSize: 48, marginBottom: 16 }}>📚</div>
            <h2 style={{ fontWeight: 700, marginBottom: 10, color: '#1d1d1f' }}>Fast geschafft!</h2>
            <div className="zert-progress-box">
              Du hast <strong>{percent}%</strong> des Kurses «{courseTitle}» abgeschlossen
              ({completedForCourse.length} von {allLessonIds.length} Lektionen).
              Schliesse alle Lektionen ab, um dein Zertifikat zu erhalten.
            </div>
            <Link
              href={`/${courseSlug}`}
              style={{
                display: 'inline-block', marginTop: 24,
                background: 'linear-gradient(135deg,#0057a8,#00a896)',
                color: 'white', padding: '12px 28px', borderRadius: 10,
                fontWeight: 700, textDecoration: 'none',
              }}
            >
              Kurs fortsetzen →
            </Link>
          </div>

        ) : (
          <>
            {/* ── Das Zertifikat ── */}
            <div className="zert-doc" id="zertifikat">

              {/* Logo + Org */}
              <div className="zert-header">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/spektrum-logo.svg"
                  alt="SPEKTRUM Partner GmbH"
                  className="zert-logo"
                />
                <div className="zert-org-block">
                  <div className="zert-org-name">SPEKTRUM Partner GmbH</div>
                  <div className="zert-org-sub">kurse.spekt.ch</div>
                </div>
              </div>

              {/* Trennlinie + Tagline */}
              <div className="zert-divider-block">
                <hr className="zert-hr" />
                <div className="zert-tagline">Online-Zertifikat für Planungsfachleute</div>
                <hr className="zert-hr" />
              </div>

              {/* Hauptinhalt */}
              <div className="zert-body">
                <div className="zert-pre-label">Abschlussbestätigung von</div>
                <div className="zert-name">{name}</div>
                <div className="zert-mid-label">für die erfolgreiche Absolvierung des Online-Kurses</div>
                <div className="zert-course-title">{courseTitle}</div>
                <div className="zert-year">{year}</div>
              </div>

              {/* Kursinhalt – Modul-Liste */}
              <div className="zert-content">
                <div className="zert-content-label">Kursinhalt</div>
                <div className={`zert-modules-grid${singleCol ? ' single' : ''}`}>
                  <div>
                    {leftCol.map((title, i) => (
                      <div key={i} className="zert-module-item">{title}</div>
                    ))}
                  </div>
                  {!singleCol && (
                    <div>
                      {rightCol.map((title, i) => (
                        <div key={i} className="zert-module-item">{title}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Signatur */}
              <div className="zert-sig-section">
                <div className="zert-sig-left">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/unterschrift.jpg" alt="Unterschrift Andreas Rupf" className="zert-sig-img" />
                  <div className="zert-sig-name">Andreas Rupf</div>
                  <div className="zert-sig-role">
                    Kursleitung<br />
                    SPEKTRUM Partner GmbH
                  </div>
                </div>
                <div className="zert-sig-right">
                  <div className="zert-sig-date-label">Ausgestellt am</div>
                  <div className="zert-sig-date">{date}</div>
                </div>
              </div>

            </div>
            {/* ── Ende Zertifikat ── */}

            {/* Aktions-Buttons – nur am Bildschirm */}
            <div className="no-print">
              <ZertifikatActions courseSlug={courseSlug} />
            </div>
          </>
        )}
      </div>

      {/* Footer – nur am Bildschirm */}
      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
