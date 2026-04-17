'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ALL_COURSES, CourseCard } from '@/data/courses';

type FilterLevel = 'Alle' | 'Einsteiger' | 'Fortgeschritten' | 'Experte';

export default function KursePage() {
  const [preview, setPreview] = useState<CourseCard | null>(null);
  const [filter, setFilter] = useState<FilterLevel>('Alle');

  const visibleCourses = filter === 'Alle'
    ? ALL_COURSES
    : ALL_COURSES.filter(c => c.level === filter);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ---- Hero ---- */
        .kl-hero {
          background: #1A1A1A;
          padding: 80px 24px 88px;
          text-align: center;
          color: white;
        }
        .kl-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #00C853;
          margin-bottom: 24px;
        }
        .kl-hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -2px;
          margin-bottom: 18px;
          color: #fff;
        }
        .kl-hero p {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.55);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ---- Filter-Tabs ---- */
        .kl-filter-wrap {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px;
          border-bottom: 1px solid #e0e0da;
          background: white;
        }
        .kl-filter-tabs {
          display: flex;
          gap: 4px;
          padding: 12px 0;
        }
        .kl-filter-tab {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #555;
          padding: 7px 18px;
          border-radius: 6px;
          border: 1px solid #e0e0da;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .kl-filter-tab:hover { border-color: #1A1A1A; color: #1A1A1A; }
        .kl-filter-tab.active {
          background: #1A1A1A;
          color: white;
          border-color: #1A1A1A;
        }

        /* ---- Kurs-Grid ---- */
        .kl-grid-wrap {
          background: #f5f5f0;
          padding: 48px 24px 80px;
          min-height: 400px;
        }
        .kl-grid {
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .kl-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: #555;
          font-size: 0.95rem;
        }
        .kl-empty strong {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          color: #1A1A1A;
          margin-bottom: 6px;
        }

        /* ---- Kurs-Card ---- */
        .kl-card {
          background: white;
          border-radius: 12px;
          border: 1px solid #e0e0da;
          overflow: hidden;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .kl-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          border-color: #1A1A1A;
        }
        .kl-card-img {
          height: 180px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .kl-card-emoji {
          font-size: 56px;
          line-height: 1;
          filter: drop-shadow(0 2px 12px rgba(0,0,0,0.15));
        }
        .kl-card-level-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
          color: #1A1A1A;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 4px 12px;
          border-radius: 50px;
        }
        .kl-card-tag-badge {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(0,0,0,0.45);
          color: rgba(255,255,255,0.9);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 50px;
        }
        .kl-card-body {
          padding: 20px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .kl-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .kl-card-desc {
          font-size: 0.85rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 14px;
          flex: 1;
        }
        .kl-card-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
          color: #555;
          margin-bottom: 14px;
          padding-bottom: 14px;
          border-bottom: 1px solid #e0e0da;
          flex-wrap: wrap;
        }
        .kl-card-meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .kl-card-price-row {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
        }
        .kl-card-price {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #1A1A1A;
          letter-spacing: -0.5px;
        }
        .kl-card-price-sub {
          font-size: 11px;
          color: #888;
          margin-left: 6px;
          font-weight: 500;
        }
        .kl-card-btns {
          display: flex;
          gap: 8px;
        }
        .kl-btn-preview {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 9px 12px;
          border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #1A1A1A;
          background: white;
          border: 1.5px solid #e0e0da;
          cursor: pointer;
          transition: all 0.2s;
        }
        .kl-btn-preview:hover { border-color: #1A1A1A; }
        .kl-btn-start {
          flex: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 14px;
          border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: white;
          background: #1A1A1A;
          text-decoration: none;
          border: 2px solid #1A1A1A;
          transition: all 0.2s;
        }
        .kl-btn-start:hover {
          background: #00C853;
          border-color: #00C853;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0,200,83,0.3);
        }

        /* ---- Preview Overlay ---- */
        .pv-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(2px);
          z-index: 200;
          animation: pv-fade-in 0.2s ease;
        }
        @keyframes pv-fade-in { from { opacity: 0; } to { opacity: 1; } }

        /* ---- Preview Drawer ---- */
        .pv-drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: min(600px, 100vw);
          background: white;
          z-index: 201;
          display: flex;
          flex-direction: column;
          animation: pv-slide-in 0.25s cubic-bezier(0.32, 0.72, 0, 1);
          box-shadow: -12px 0 60px rgba(0,0,0,0.18);
        }
        @keyframes pv-slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        /* Drawer Header */
        .pv-header {
          padding: 28px 28px 20px;
          flex-shrink: 0;
          border-bottom: 1px solid #e0e0da;
        }
        .pv-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px; height: 32px;
          border-radius: 50%;
          border: none;
          background: #f5f5f0;
          color: #555;
          cursor: pointer;
          float: right;
          margin-bottom: 12px;
          transition: background 0.15s;
        }
        .pv-close:hover { background: #e0e0da; color: #1A1A1A; }
        .pv-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #1A1A1A;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
          clear: both;
          line-height: 1.2;
        }
        .pv-desc {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .pv-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pv-badge {
          font-family: 'Space Grotesk', sans-serif;
          padding: 4px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          border: 1.5px solid #e0e0da;
          color: #1A1A1A;
          background: white;
        }
        .pv-badge-price {
          border-color: #1A1A1A;
          background: #1A1A1A;
          color: white;
        }

        /* Drawer Body */
        .pv-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px 28px;
        }
        .pv-section-heading {
          font-family: 'Space Grotesk', sans-serif;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1A1A1A;
          margin-bottom: 16px;
        }
        .pv-module-card {
          border: 1px solid #e0e0da;
          border-radius: 10px;
          padding: 16px 18px;
          margin-bottom: 10px;
          transition: border-color 0.15s;
        }
        .pv-module-card:hover { border-color: #1A1A1A; }
        .pv-module-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 4px;
        }
        .pv-module-desc {
          font-size: 0.82rem;
          color: #555;
          line-height: 1.55;
          margin-bottom: 10px;
        }
        .pv-module-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #555;
        }
        .pv-meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .pv-quiz-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 10px;
          border-radius: 50px;
          border: 1.5px solid #00C853;
          color: #00a844;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 600;
        }
        .pv-final-card {
          border: 1.5px solid #e0e0da;
          border-radius: 10px;
          padding: 18px 18px;
          margin-top: 6px;
          background: #f5f5f0;
        }
        .pv-final-heading {
          font-family: 'Space Grotesk', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 6px;
        }
        .pv-final-heading svg { color: #00C853; }
        .pv-final-desc {
          font-size: 0.82rem;
          color: #555;
          line-height: 1.55;
          margin-bottom: 10px;
        }
        .pv-cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 12px;
          border-radius: 50px;
          border: 1.5px solid #00C853;
          color: #00a844;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 600;
        }

        /* Drawer Footer */
        .pv-footer {
          flex-shrink: 0;
          padding: 16px 28px;
          border-top: 1px solid #e0e0da;
          display: flex;
          gap: 10px;
          background: white;
        }
        .pv-btn-close {
          font-family: 'Space Grotesk', sans-serif;
          padding: 11px 22px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #1A1A1A;
          background: white;
          border: 1.5px solid #e0e0da;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .pv-btn-close:hover { border-color: #1A1A1A; }
        .pv-btn-buy {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 50px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: white;
          background: #1A1A1A;
          text-decoration: none;
          border: 2px solid #1A1A1A;
          transition: all 0.2s;
        }
        .pv-btn-buy:hover {
          background: #00C853;
          border-color: #00C853;
          box-shadow: 0 4px 16px rgba(0,200,83,0.3);
        }

        @media (max-width: 700px) {
          .kl-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .kl-grid { grid-template-columns: 1fr; }
          .pv-drawer { width: 100vw; }
          .kl-filter-tabs { gap: 6px; flex-wrap: wrap; }
        }
      `}} />

      <Header />

      {/* Hero */}
      <section className="kl-hero">
        <div className="kl-hero-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
          </svg>
          SPEKTRUM Weiterbildung
        </div>
        <h1>KI-Kurse</h1>
        <p>Praxisnahe KI-Weiterbildung für Planer, Gemeinden und Büros – zertifiziert, selbst eingeteilt.</p>
      </section>

      {/* Filter-Tabs */}
      <div className="kl-filter-wrap">
        <div className="kl-filter-tabs">
          {(['Alle', 'Einsteiger', 'Fortgeschritten', 'Experte'] as FilterLevel[]).map(f => (
            <button
              key={f}
              className={`kl-filter-tab${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'Alle' ? 'Alle Levels' : f}
            </button>
          ))}
        </div>
      </div>

      {/* Kurs-Grid */}
      <div className="kl-grid-wrap">
        <div className="kl-grid">
          {visibleCourses.length === 0 ? (
            <div className="kl-empty">
              <strong>Noch keine {filter}-Kurse</strong>
              Kurse auf diesem Level werden bald verfügbar sein.
            </div>
          ) : (
            visibleCourses.map((c) => {
              const totalLessons = c.course.modules.reduce((s, m) => s + m.lessons.length, 0);
              const totalModules = c.course.modules.length;
              return (
                <div key={c.slug} className="kl-card">
                  <div className="kl-card-img" style={{ background: c.color }}>
                    <span className="kl-card-emoji">{c.emoji}</span>
                    <span className="kl-card-level-badge">{c.level}</span>
                    <span className="kl-card-tag-badge">{c.tag}</span>
                  </div>
                  <div className="kl-card-body">
                    <div className="kl-card-title">{c.course.title}</div>
                    <div className="kl-card-desc">{c.course.description}</div>
                    <div className="kl-card-meta">
                      <span className="kl-card-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                        {totalLessons} Lektionen
                      </span>
                      <span className="kl-card-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                        </svg>
                        {totalModules} Module
                      </span>
                      <span className="kl-card-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                        </svg>
                        Zertifikat
                      </span>
                    </div>
                    <div className="kl-card-price-row">
                      <span className="kl-card-price">{c.priceLabel}</span>
                      {c.price > 0 && <span className="kl-card-price-sub">/ Lifetime Access</span>}
                    </div>
                    <div className="kl-card-btns">
                      <button className="kl-btn-preview" onClick={() => setPreview(c)}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                        Vorschau
                      </button>
                      <Link href="/register" className="kl-btn-start">
                        {c.price === 0 ? (
                          <>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                            Starten
                          </>
                        ) : (
                          <>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                            </svg>
                            Zugang kaufen
                          </>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <Footer />

      {/* Preview Drawer */}
      {preview && (
        <>
          <div className="pv-overlay" onClick={() => setPreview(null)} />
          <div className="pv-drawer">
            {/* Header */}
            <div className="pv-header">
              <button className="pv-close" onClick={() => setPreview(null)} aria-label="Schliessen">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <div className="pv-title">{preview.course.title}</div>
              <div className="pv-desc">{preview.course.description}</div>
              <div className="pv-badges">
                <span className="pv-badge">{preview.level}</span>
                <span className="pv-badge pv-badge-price">{preview.priceLabel}</span>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="pv-body">
              <div className="pv-section-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
                Kursmodule
              </div>

              {preview.course.modules.map((m, mi) => {
                const quizCount = m.lessons.reduce((s, l) => s + (l.quiz ? l.quiz.questions.length : 0), 0);
                return (
                  <div key={m.id} className="pv-module-card">
                    <div className="pv-module-title">Modul {mi + 1}: {m.title}</div>
                    <div className="pv-module-desc">{m.description}</div>
                    <div className="pv-module-meta">
                      <span className="pv-meta-item">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                        {m.lessons.length} Lektionen
                      </span>
                      {quizCount > 0 && (
                        <span className="pv-quiz-pill">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                          </svg>
                          {quizCount}-Fragen Quiz
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Abschlusstest */}
              <div className="pv-final-card">
                <div className="pv-final-heading">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  Abschlusstest & Zertifikat
                </div>
                <div className="pv-final-desc">
                  Teste dein Wissen mit einem abschliessenden Assessment. Bei 70% oder mehr erhältst du dein persönliches Abschlusszertifikat.
                </div>
                <span className="pv-cert-pill">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                  Abschlusszertifikat inklusive
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="pv-footer">
              <button className="pv-btn-close" onClick={() => setPreview(null)}>
                Schliessen
              </button>
              <Link href="/register" className="pv-btn-buy">
                Lifetime Access – {preview.priceLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
