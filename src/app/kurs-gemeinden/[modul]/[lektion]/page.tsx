'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuizQuestion from '@/components/QuizQuestion';
import VideoPlayer from '@/components/VideoPlayer';
import { COURSE_GEMEINDEN } from '@/data/course-gemeinden';
import { findLessonInCourse, findNextLessonInCourse, findPrevLessonInCourse } from '@/lib/courseUtils';

export default function LektionGemeindenPage() {
  const params = useParams();
  const router = useRouter();
  const moduleSlug = params.modul as string;
  const lessonSlug = params.lektion as string;

  const found = findLessonInCourse(COURSE_GEMEINDEN, moduleSlug, lessonSlug);
  const next = findNextLessonInCourse(COURSE_GEMEINDEN, moduleSlug, lessonSlug);
  const prev = findPrevLessonInCourse(COURSE_GEMEINDEN, moduleSlug, lessonSlug);

  const [completed, setCompleted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({});
  const [saving, setSaving] = useState(false);

  const lessonId = `${moduleSlug}/${lessonSlug}`;
  const totalLessons = COURSE_GEMEINDEN.modules.reduce((s, m) => s + m.lessons.length, 0);

  // Fortschritt beim Laden prüfen
  useEffect(() => {
    fetch('/api/progress').then(r => r.json()).then(data => {
      const done: string[] = data.progress?.completedLessons ?? [];
      setCompletedLessons(done);
      if (done.includes(lessonId)) setCompleted(true);
    }).catch(() => {});
  }, [lessonId]);

  // Lektion-Nummer im Kurs ermitteln
  let lessonNumber = 0;
  let lessonCount = 0;
  COURSE_GEMEINDEN.modules.forEach(m => {
    m.lessons.forEach(l => {
      lessonCount++;
      if (m.slug === moduleSlug && l.slug === lessonSlug) lessonNumber = lessonCount;
    });
  });

  async function handleComplete() {
    setSaving(true);
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'complete_lesson', lessonId }),
    });
    setSaving(false);
    setCompleted(true);
    setCompletedLessons(prev => [...prev, lessonId]);

    setTimeout(() => {
      if (next) router.push(`/kurs-gemeinden/${next.moduleSlug}/${next.slug}`);
      else router.push('/zertifikat');
    }, 800);
  }

  function handleQuizAnswer(questionId: string, correct: boolean) {
    setQuizAnswers(prev => ({ ...prev, [questionId]: correct }));
  }

  if (!found) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Lektion nicht gefunden</h2>
        <Link href="/kurs-gemeinden" style={{ color: '#0057a8' }}>← Zurück zur Übersicht</Link>
      </div>
    );
  }

  const { module: modul, lesson: lektion } = found;
  const moduleIdx = COURSE_GEMEINDEN.modules.findIndex(m => m.id === modul.id);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ---- Layout ---- */
        .lk-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          min-height: calc(100vh - 60px);
          max-width: 1160px;
          margin: 0 auto;
        }

        /* ---- Sidebar ---- */
        .lk-sidebar {
          border-right: 1px solid #e8e8ed;
          padding: 28px 16px 40px;
          position: sticky;
          top: 60px;
          height: calc(100vh - 60px);
          overflow-y: auto;
        }
        .lk-sidebar-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6e6e73;
          text-decoration: none;
          margin-bottom: 24px;
          font-weight: 500;
          transition: color 0.15s;
        }
        .lk-sidebar-back:hover { color: #0057a8; }
        .lk-sidebar-progress {
          font-size: 11px;
          color: #aeaeb2;
          margin-bottom: 20px;
          padding: 0 4px;
        }
        .lk-sidebar-progress-bar {
          height: 3px;
          background: #f0f0f5;
          border-radius: 2px;
          margin-top: 6px;
          overflow: hidden;
        }
        .lk-sidebar-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0057a8, #00a896);
          border-radius: 2px;
          transition: width 0.4s ease;
        }
        .lk-sidebar-module-title {
          font-size: 11px;
          font-weight: 700;
          color: #aeaeb2;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 20px 4px 8px;
        }
        .lk-sidebar-lesson {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 7px 8px;
          border-radius: 8px;
          font-size: 13px;
          color: #6e6e73;
          text-decoration: none;
          transition: background 0.12s, color 0.12s;
          margin-bottom: 1px;
          line-height: 1.3;
        }
        .lk-sidebar-lesson:hover { background: #f5f5f7; color: #1d1d1f; }
        .lk-sidebar-lesson.active { background: #f0f7ff; color: #0057a8; font-weight: 600; }
        .lk-sidebar-lesson.done { color: #3d3d3f; }
        .lk-dot {
          width: 16px; height: 16px;
          border-radius: 50%;
          border: 1.5px solid #d2d2d7;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 9px;
          transition: all 0.15s;
        }
        .lk-dot.active { background: #0057a8; border-color: #0057a8; }
        .lk-dot.done { background: #00a896; border-color: #00a896; color: white; }

        /* ---- Inhalt ---- */
        .lk-content {
          padding: 40px 56px 80px;
          max-width: 780px;
        }

        /* ---- Lektion-Header ---- */
        .lk-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .lk-module-badge {
          font-size: 12px;
          font-weight: 600;
          color: #0057a8;
          background: #f0f7ff;
          border: 1px solid #d0e4f7;
          border-radius: 100px;
          padding: 3px 10px;
        }
        .lk-lesson-counter {
          font-size: 12px;
          color: #aeaeb2;
        }
        .lk-title {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .lk-desc {
          font-size: 16px;
          color: #6e6e73;
          line-height: 1.6;
          margin-bottom: 36px;
        }

        /* ---- Lektions-Inhalt ---- */
        .lk-body h2 {
          font-size: 22px; font-weight: 700; color: #1d1d1f;
          margin: 36px 0 12px;
        }
        .lk-body h3 {
          font-size: 17px; font-weight: 700; color: #1d1d1f;
          margin: 28px 0 10px;
        }
        .lk-body p {
          font-size: 16px; color: #3d3d3f;
          margin-bottom: 16px; line-height: 1.7;
        }
        .lk-body ul, .lk-body ol {
          padding-left: 24px; margin-bottom: 16px;
        }
        .lk-body li {
          font-size: 16px; color: #3d3d3f;
          margin-bottom: 6px; line-height: 1.6;
        }
        .lk-body table {
          width: 100%; border-collapse: collapse;
          margin: 20px 0; font-size: 15px;
        }
        .lk-body blockquote {
          border-left: 3px solid #0057a8;
          margin: 20px 0; padding: 12px 20px;
          background: #f0f7ff; border-radius: 0 8px 8px 0;
          font-style: italic; color: #3d3d3f;
        }

        /* ---- Bottom Navigation ---- */
        .lk-nav-bar {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid #e8e8ed;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .lk-nav-prev {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #3a3a3c;
          background: white;
          border: 1.5px solid #e8e8ed;
          text-decoration: none;
          transition: border-color 0.15s, background 0.15s;
        }
        .lk-nav-prev:hover { border-color: #0057a8; background: #f0f7ff; color: #0057a8; }
        .lk-nav-spacer { flex: 1; }
        .lk-complete-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
        }
        .lk-complete-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .lk-complete-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .lk-done-bar {
          margin-top: 56px;
          padding: 16px 20px;
          background: #f0fff8;
          border: 1.5px solid #b8ede7;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .lk-done-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: #006b5f;
        }
        .lk-done-next {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white;
          font-size: 14px;
          font-weight: 700;
          border-radius: 9px;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .lk-done-next:hover { opacity: 0.9; }

        @media (max-width: 720px) {
          .lk-layout { grid-template-columns: 1fr; }
          .lk-sidebar { display: none; }
          .lk-content { padding: 24px 20px 60px; }
        }
      `}} />

      <Header />
      <div className="lk-layout">

        {/* Sidebar */}
        <aside className="lk-sidebar">
          <Link href="/kurs-gemeinden" className="lk-sidebar-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Kursübersicht
          </Link>

          <div className="lk-sidebar-progress">
            {completedLessons.length} von {totalLessons} Lektionen abgeschlossen
            <div className="lk-sidebar-progress-bar">
              <div className="lk-sidebar-progress-fill" style={{ width: `${Math.round((completedLessons.length / totalLessons) * 100)}%` }} />
            </div>
          </div>

          {COURSE_GEMEINDEN.modules.map((m, mi) => (
            <div key={m.id}>
              <div className="lk-sidebar-module-title">{mi + 1}. {m.title}</div>
              {m.lessons.map(l => {
                const isActive = m.slug === moduleSlug && l.slug === lessonSlug;
                const isDone = completedLessons.includes(`${m.slug}/${l.slug}`);
                return (
                  <Link
                    key={l.id}
                    href={`/kurs-gemeinden/${m.slug}/${l.slug}`}
                    className={`lk-sidebar-lesson${isActive ? ' active' : isDone ? ' done' : ''}`}
                  >
                    <div className={`lk-dot${isActive ? ' active' : isDone ? ' done' : ''}`}>
                      {isDone && !isActive ? '✓' : ''}
                    </div>
                    {l.title}
                  </Link>
                );
              })}
            </div>
          ))}
        </aside>

        {/* Inhalt */}
        <main className="lk-content">
          <div className="lk-meta-row">
            <span className="lk-module-badge">Modul {moduleIdx + 1}: {modul.title}</span>
            <span className="lk-lesson-counter">Lektion {lessonNumber} von {totalLessons}</span>
          </div>

          <h1 className="lk-title">{lektion.title}</h1>
          <p className="lk-desc">{lektion.description}</p>

          {/* Video */}
          {lektion.videoId && !lektion.videoId.startsWith('DEIN_') && (
            <VideoPlayer videoId={lektion.videoId} title={lektion.title} />
          )}

          {/* Inhalt */}
          <div className="lk-body" dangerouslySetInnerHTML={{ __html: lektion.content }} />

          {/* Quiz */}
          {lektion.quiz?.questions.map(q => (
            <QuizQuestion
              key={q.id}
              question={q}
              onAnswer={(correct) => handleQuizAnswer(q.id, correct)}
            />
          ))}

          {/* Navigation unten */}
          {completed ? (
            <div className="lk-done-bar">
              <span className="lk-done-text">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a896" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Lektion abgeschlossen
              </span>
              {next ? (
                <Link href={`/kurs-gemeinden/${next.moduleSlug}/${next.slug}`} className="lk-done-next">
                  Nächste Lektion
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              ) : (
                <Link href="/zertifikat" className="lk-done-next">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                  Zertifikat anfordern
                </Link>
              )}
            </div>
          ) : (
            <div className="lk-nav-bar">
              {prev ? (
                <Link href={`/kurs-gemeinden/${prev.moduleSlug}/${prev.slug}`} className="lk-nav-prev">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                  Zurück
                </Link>
              ) : (
                <Link href="/kurs-gemeinden" className="lk-nav-prev">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                  Übersicht
                </Link>
              )}
              <div className="lk-nav-spacer" />
              <button className="lk-complete-btn" onClick={handleComplete} disabled={saving}>
                {saving ? (
                  <>⏳ Wird gespeichert…</>
                ) : next ? (
                  <>
                    Lektion abschliessen
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                    Kurs abschliessen
                  </>
                )}
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
