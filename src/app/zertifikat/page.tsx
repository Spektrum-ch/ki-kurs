import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { getProgress } from '@/lib/progress';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ZertifikatActions from '@/components/ZertifikatActions';
import { COURSE } from '@/data/course';
import { COURSE_ALLGEMEIN } from '@/data/course-allgemein';
import { COURSE_BUERO } from '@/data/course-buero';
import { COURSE_GEMEINDEN } from '@/data/course-gemeinden';
import { COURSE_AGENTIC } from '@/data/course-agentic';
import { COURSE_STRATEGIE } from '@/data/course-strategie';
import { COURSE_INTERESSENABWAEGUNG } from '@/data/course-interessenabwaegung';

// Alle Kurse nach Slug
const COURSES: Record<string, { title: string; modules: { slug: string; lessons: { slug: string }[] }[] }> = {
  'kurs':                    COURSE,
  'kurs-allgemein':          COURSE_ALLGEMEIN,
  'kurs-buero':              COURSE_BUERO,
  'kurs-gemeinden':          COURSE_GEMEINDEN,
  'kurs-agentic':            COURSE_AGENTIC,
  'kurs-strategie':          COURSE_STRATEGIE,
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

  // Welcher Kurs?
  const courseSlug = searchParams?.course || 'kurs';
  const courseData = COURSES[courseSlug] ?? COURSE;
  const courseTitle = courseData.title;
  const moduleCount = courseData.modules.length;

  // Kurs-spezifischer Fortschritt
  const allLessonIds = courseData.modules.flatMap(m => m.lessons.map(l => `${m.slug}/${l.slug}`));
  const completedForCourse = progress.completedLessons.filter(id => allLessonIds.includes(id));
  const percent = allLessonIds.length > 0 ? Math.round(completedForCourse.length / allLessonIds.length * 100) : 0;

  const name = user?.name ?? auth.email.split('@')[0];
  const date = new Date().toLocaleDateString('de-CH', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .zert-page {
          min-height: 100vh;
          background: #f8f9fa;
          padding: 60px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .zert-card {
          background: white;
          border-radius: 24px;
          padding: 60px 48px;
          max-width: 680px;
          width: 100%;
          text-align: center;
          box-shadow: 0 8px 40px rgba(0,87,168,0.12);
          border: 2px solid #e8e8ed;
          position: relative;
          overflow: hidden;
        }
        .zert-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 6px;
          background: linear-gradient(90deg, #0057a8 0%, #00a896 100%);
        }
        .zert-icon { font-size: 56px; margin-bottom: 16px; }
        .zert-label {
          font-size: 12px;
          font-weight: 700;
          color: #aeaeb2;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 16px;
        }
        .zert-title {
          font-size: 28px;
          font-weight: 800;
          color: #1d1d1f;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .zert-subtitle {
          font-size: 18px;
          color: #0057a8;
          font-weight: 600;
          margin-bottom: 28px;
        }
        .zert-name {
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }
        .zert-course {
          font-size: 16px;
          color: #6e6e73;
          margin-bottom: 32px;
        }
        .zert-date {
          font-size: 14px;
          color: #aeaeb2;
          margin-bottom: 40px;
        }
        .zert-signature {
          border-top: 1px solid #e8e8ed;
          padding-top: 28px;
          margin-top: 8px;
        }
        .zert-sig-name { font-size: 16px; font-weight: 700; color: #1d1d1f; }
        .zert-sig-title { font-size: 13px; color: #6e6e73; margin-top: 4px; }
        .zert-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 32px;
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
          transition: all 0.15s;
        }
        .zert-btn-primary {
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white;
        }
        .zert-btn-secondary {
          background: white;
          color: #0057a8;
          border: 1.5px solid #0057a8;
        }
        .zert-progress-hint {
          margin-top: 24px;
          padding: 16px;
          background: #fff8f0;
          border-radius: 12px;
          font-size: 14px;
          color: #8b5000;
          max-width: 480px;
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 15mm;
          }
          body * { visibility: hidden !important; }
          #zertifikat, #zertifikat * { visibility: visible !important; }
          #zertifikat {
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 60px 48px !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            border: none !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
          }
        }
      `}} />
      <Header userEmail={auth.email} />
      <div className="zert-page">
        {percent < 100 ? (
          <div style={{ textAlign: 'center', maxWidth: 480 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📚</div>
            <h2 style={{ fontWeight: 700, marginBottom: 10 }}>Fast geschafft!</h2>
            <div className="zert-progress-hint">
              Du hast <strong>{percent}%</strong> des Kurses «{courseTitle}» abgeschlossen ({completedForCourse.length} von {allLessonIds.length} Lektionen).
              Schliesse alle Lektionen ab, um dein Zertifikat zu erhalten.
            </div>
            <Link href={`/${courseSlug}`} style={{ display: 'inline-block', marginTop: 24, background: 'linear-gradient(135deg,#0057a8,#00a896)', color: 'white', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>
              Kurs fortsetzen →
            </Link>
          </div>
        ) : (
          <>
            <div className="zert-card" id="zertifikat">
              <div className="zert-icon">🎓</div>
              <div className="zert-label">Abschlusszertifikat</div>
              <h1 className="zert-title">Kursabschluss</h1>
              <div className="zert-subtitle">{courseTitle}</div>

              <div style={{ fontSize: 15, color: '#6e6e73', marginBottom: 16 }}>hiermit bescheinigt</div>
              <div className="zert-name">{name}</div>
              <div className="zert-course">die erfolgreiche Absolvierung des Online-Kurses<br />«{courseTitle}» ({moduleCount} Module, {new Date().getFullYear()})</div>
              <div className="zert-date">Ausgestellt am {date}</div>

              <div className="zert-signature">
                <div className="zert-sig-name">Andreas Rupf</div>
                <div className="zert-sig-title">SPEKTRUM Partner GmbH</div>
              </div>
            </div>

            <ZertifikatActions courseSlug={courseSlug} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
