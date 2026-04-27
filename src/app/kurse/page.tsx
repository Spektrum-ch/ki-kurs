'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PUBLIC_COURSES, CourseCard } from '@/data/courses';
import { LEHRGAENGE, getLehrgangDetails, TIER_PRICES } from '@/data/zertifikatslehrgaenge';

type FilterLevel = 'Alle' | 'Einsteiger' | 'Fortgeschritten' | 'Experte';

export default function KursePage() {
  const [preview, setPreview] = useState<CourseCard | null>(null);
  const [filter] = useState<FilterLevel>('Alle');

  // ── Quiz Selbstcheck ──────────────────────────────────────────
  const [quizStep, setQuizStep] = useState<number>(-1);        // -1 = Intro, 0-4 = Fragen, 5 = Ergebnis
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSelected, setQuizSelected] = useState<number | null>(null);

  const QUIZ = [
    {
      q: 'Was ist eine «Halluzination» bei KI-Sprachmodellen?',
      options: [
        'Ein Fehler in der Bildgenerierung',
        'KI erfindet selbstbewusst Fakten, die nicht existieren',
        'Das Modell antwortet zu langsam',
        'Ein Sicherheitsproblem bei Cloud-Tools',
      ],
      correct: 1,
    },
    {
      q: 'Du lädst 80 Seiten Zonenplan in ChatGPT. Was solltest du beachten?',
      options: [
        'Das funktioniert problemlos – KI hat unbegrenzten Speicher',
        'Jedes Modell hat ein Kontextfenster – zu viel Text senkt die Qualität',
        'ChatGPT kann generell keine PDFs lesen',
        'Man braucht immer eine Business-Lizenz dafür',
      ],
      correct: 1,
    },
    {
      q: 'Was macht ein KI-Agent anders als ein normaler Prompt?',
      options: [
        'Er antwortet schneller',
        'Er hat Zugang zu geheimen Daten',
        'Er kann eigenständig Aktionen ausführen, Tools nutzen und Schritte planen',
        'Er braucht keine Internetverbindung',
      ],
      correct: 2,
    },
    {
      q: 'Welche Aussage zum Datenschutz bei KI-Tools ist korrekt?',
      options: [
        'Alle KI-Tools speichern Daten in der Schweiz',
        'KI-Tools unterliegen nicht dem DSG, weil sie im Ausland betrieben werden',
        'Was du in ChatGPT eingibst, kann für Training genutzt werden – ausser du deaktivierst das',
        'Anonymisierte Daten dürfen unbegrenzt eingegeben werden',
      ],
      correct: 2,
    },
    {
      q: 'Prompt Engineering bedeutet…',
      options: [
        'Code für KI-Modelle schreiben',
        'Ein eigenes KI-Modell trainieren',
        'Testen ob eine KI sicher ist',
        'Eingaben gezielt gestalten, um bessere und zuverlässigere Antworten zu erhalten',
      ],
      correct: 3,
    },
  ];

  const quizScore = Object.entries(quizAnswers).filter(
    ([i, a]) => QUIZ[Number(i)]?.correct === a
  ).length;

  const QUIZ_RESULTS = [
    {
      range: [0, 1],
      level: 'KI-Einsteiger:in',
      emoji: '🌱',
      desc: 'Du stehst am Anfang – genau richtig, um mit soliden Grundlagen zu starten.',
      program: 'KI-Grundkurs: Einsteiger',
      href: '/kurs-allgemein',
      price: 'CHF 89',
    },
    {
      range: [2, 3],
      level: 'KI-Anwender:in',
      emoji: '📈',
      desc: 'Du kennst die Basics – jetzt geht es darum, KI gezielt in deinem Berufsfeld einzusetzen.',
      program: 'KI-Intensivprogramm (wähle deinen Track)',
      href: '/zertifikatslehrgang',
      price: 'ab CHF 290',
    },
    {
      range: [4, 5],
      level: 'KI-Profi',
      emoji: '🤖',
      desc: 'Starkes Wissen – du bist bereit für Agenten, Automatisierung und eigene KI-Workflows.',
      program: 'KI-Intensivprogramm KI-Profi',
      href: '/zertifikatslehrgang#ki-profi',
      price: 'ab CHF 290',
    },
  ];

  const quizResult = QUIZ_RESULTS.find(r => quizScore >= r.range[0] && quizScore <= r.range[1]);

  function quizNext() {
    if (quizSelected === null) return;
    const next = { ...quizAnswers, [quizStep]: quizSelected };
    setQuizAnswers(next);
    setQuizSelected(null);
    if (quizStep < QUIZ.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(5);
    }
  }

  function quizReset() {
    setQuizStep(-1);
    setQuizAnswers({});
    setQuizSelected(null);
  }

  const visibleCourses = PUBLIC_COURSES;

  // Nach Hydration zu Anker-ID scrollen (Browser findet client-seitige Elemente nicht nativ)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
    }
  }, []);

  const lehrgaenge = LEHRGAENGE.map(l => getLehrgangDetails(l.slug)!).filter(Boolean);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ========== HERO ========== */
        .kl-hero {
          background: #1A1A1A;
          padding: 88px 24px 72px;
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
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin: 0 auto 18px;
          max-width: 820px;
          color: #fff;
        }
        .kl-hero-sub {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.62);
          max-width: 620px;
          margin: 0 auto 36px;
          line-height: 1.65;
        }
        .kl-hero-ctas {
          display: inline-flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .kl-hero-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #00C853;
          color: #0A1F14;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.15s;
        }
        .kl-hero-cta-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(0,200,83,0.3); }
        .kl-hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 100px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.15s;
        }
        .kl-hero-cta-secondary:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.5); }

        /* ========== SELBSTCHECK / QUIZ ========== */
        .kl-check-section {
          background: #f5f5f0;
          border-top: 1px solid #e0e0da;
          border-bottom: 1px solid #e0e0da;
          padding: 72px 24px;
        }
        .kl-check-inner { max-width: 700px; margin: 0 auto; text-align: center; }
        .kl-check-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #00C853; margin-bottom: 14px; display: block;
        }
        .kl-check-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 800; letter-spacing: -1px;
          color: #1A1A1A; margin: 0 0 10px;
        }
        .kl-check-sub {
          font-size: 0.98rem; color: #555;
          margin: 0 0 32px; line-height: 1.6;
        }
        /* Intro */
        .kl-quiz-start-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 15px 32px; border-radius: 50px;
          background: #1A1A1A; color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.88rem; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: background 0.15s;
        }
        .kl-quiz-start-btn:hover { background: #00C853; }
        /* Progress */
        .kl-quiz-progress {
          display: flex; align-items: center; gap: 10px;
          justify-content: center; margin-bottom: 28px;
        }
        .kl-quiz-progress-bar {
          flex: 1; max-width: 260px; height: 4px;
          background: #e0e0da; border-radius: 2px; overflow: hidden;
        }
        .kl-quiz-progress-fill {
          height: 100%; background: #00C853; border-radius: 2px;
          transition: width 0.3s ease;
        }
        .kl-quiz-progress-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem; font-weight: 600;
          color: #888; white-space: nowrap;
        }
        /* Frage */
        .kl-quiz-question {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.05rem, 2.5vw, 1.25rem);
          font-weight: 700; color: #1A1A1A;
          margin-bottom: 24px; line-height: 1.4;
          animation: kl-fadein 0.2s ease;
        }
        /* Antwort-Optionen */
        .kl-quiz-options {
          display: flex; flex-direction: column; gap: 10px;
          margin-bottom: 24px; text-align: left;
        }
        .kl-quiz-option {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px; border-radius: 12px;
          border: 1.5px solid #e0e0da;
          background: white; cursor: pointer;
          font-size: 0.93rem; color: #1A1A1A;
          line-height: 1.45; text-align: left;
          transition: all 0.12s; outline: none;
          width: 100%;
        }
        .kl-quiz-option:hover { border-color: #1A1A1A; }
        .kl-quiz-option.selected {
          border-color: #00C853; background: rgba(0,200,83,0.07);
        }
        .kl-quiz-option-letter {
          width: 28px; height: 28px; border-radius: 50%;
          background: #f5f5f0; border: 1.5px solid #e0e0da;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem; font-weight: 700;
          color: #888; flex-shrink: 0; transition: all 0.12s;
        }
        .kl-quiz-option.selected .kl-quiz-option-letter {
          background: #00C853; border-color: #00C853; color: white;
        }
        .kl-quiz-next-btn {
          padding: 13px 28px; border-radius: 50px;
          background: #1A1A1A; color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: background 0.15s; opacity: 1;
        }
        .kl-quiz-next-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .kl-quiz-next-btn:not(:disabled):hover { background: #00C853; }
        /* Ergebnis */
        .kl-quiz-result { animation: kl-fadein 0.25s ease; }
        .kl-quiz-score {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 3.5rem; font-weight: 800;
          color: #1A1A1A; letter-spacing: -2px;
          line-height: 1; margin-bottom: 4px;
        }
        .kl-quiz-score-label {
          font-size: 0.88rem; color: #888; margin-bottom: 28px;
        }
        .kl-quiz-result-card {
          background: white; border: 1.5px solid #00C853;
          border-radius: 16px; padding: 28px 28px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 20px;
          flex-wrap: wrap; text-align: left; margin-bottom: 16px;
        }
        .kl-quiz-result-level {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #00C853; margin-bottom: 4px; display: block;
        }
        .kl-quiz-result-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem; font-weight: 800;
          color: #1A1A1A; margin-bottom: 4px;
        }
        .kl-quiz-result-desc {
          font-size: 0.86rem; color: #555; line-height: 1.55;
        }
        .kl-quiz-result-meta {
          font-size: 0.78rem; color: #888; margin-top: 4px;
        }
        .kl-quiz-result-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 12px 22px; border-radius: 50px;
          background: #1A1A1A; color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          text-decoration: none; white-space: nowrap;
          transition: background 0.15s;
        }
        .kl-quiz-result-btn:hover { background: #00C853; }
        .kl-quiz-retry {
          background: none; border: none; cursor: pointer;
          font-size: 0.82rem; color: #888;
          text-decoration: underline; margin-top: 8px;
        }
        .kl-quiz-retry:hover { color: #1A1A1A; }
        @keyframes kl-fadein { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        @media (max-width: 600px) {
          .kl-quiz-result-card { flex-direction: column; }
        }

        /* ========== SECTION-STRUKTUR ========== */
        .kl-section {
          max-width: 1120px;
          margin: 0 auto;
          padding: 72px 24px;
        }
        .kl-section-head {
          max-width: 720px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .kl-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #0057a8;
          background: rgba(0,87,168,0.08);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 16px;
        }
        .kl-section-h2 {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 14px;
        }
        .kl-section-lead {
          font-size: 17px;
          color: #6e6e73;
          line-height: 1.65;
          margin: 0;
        }

        /* ========== PERSONA-KARTEN ========== */
        .kl-personas {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 780px) { .kl-personas { grid-template-columns: 1fr; } }
        .kl-persona {
          display: block;
          padding: 32px 28px;
          background: white;
          border: 1px solid #e8e8ed;
          border-radius: 18px;
          text-decoration: none;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }
        .kl-persona:hover {
          border-color: #0057a8;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,87,168,0.1);
        }
        .kl-persona-emoji {
          font-size: 34px;
          margin-bottom: 14px;
          line-height: 1;
        }
        .kl-persona-title {
          font-size: 20px;
          font-weight: 800;
          color: #1d1d1f;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .kl-persona-desc {
          font-size: 14px;
          color: #6e6e73;
          line-height: 1.55;
          margin-bottom: 18px;
        }
        .kl-persona-link {
          font-size: 13px;
          font-weight: 700;
          color: #0057a8;
        }

        /* ========== LEHRGANGS-KARTEN ========== */
        .kl-lehrgaenge-bg { background: #f5f7fa; padding: 72px 0; }
        .kl-lehrgang-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 820px) { .kl-lehrgang-grid { grid-template-columns: 1fr; } }
        .kl-lehrgang-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e8e8ed;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
        }
        .kl-lehrgang-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.08);
        }
        .kl-lehrgang-head {
          padding: 26px 26px 20px;
          color: white;
          position: relative;
        }
        .kl-lehrgang-emoji { font-size: 32px; margin-bottom: 8px; line-height: 1; }
        .kl-lehrgang-title {
          font-size: 19px;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }
        .kl-lehrgang-subtitle { font-size: 13px; opacity: 0.92; line-height: 1.5; }
        .kl-lehrgang-savings {
          position: absolute;
          top: 18px; right: 18px;
          background: rgba(255,255,255,0.22);
          backdrop-filter: blur(8px);
          font-size: 11px; font-weight: 700;
          padding: 5px 10px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .kl-lehrgang-body { padding: 20px 26px 22px; flex: 1; display: flex; flex-direction: column; }
        .kl-lehrgang-courses { font-size: 13px; color: #6e6e73; margin-bottom: 14px; line-height: 1.6; flex: 1; }
        .kl-lehrgang-courses strong { color: #1d1d1f; }
        .kl-lehrgang-foot {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 14px; border-top: 1px solid #f0f0f5;
        }
        .kl-lehrgang-price { font-size: 20px; font-weight: 800; color: #1d1d1f; }
        .kl-lehrgang-price-strike { font-size: 13px; color: #a0a0a8; text-decoration: line-through; margin-left: 6px; font-weight: 400; }
        .kl-lehrgang-cta {
          font-size: 13px; font-weight: 700; color: #0057a8; text-decoration: none;
        }
        .kl-lehrgang-overview-cta {
          display: inline-flex;
          margin: 36px auto 0;
          padding: 13px 26px;
          background: #1d1d1f;
          color: white;
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          align-items: center;
          gap: 8px;
        }
        .kl-lehrgang-overview-cta:hover { background: #0057a8; }
        .kl-center-wrap { text-align: center; }

        /* ========== EINZELKURSE ========== */
        .kl-filter-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
        }
        .kl-filter-tabs {
          display: inline-flex;
          background: #f0f0f5;
          padding: 4px;
          border-radius: 100px;
          gap: 2px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .kl-filter-tab {
          border: none; background: transparent;
          padding: 9px 18px; font-size: 13px; font-weight: 600;
          color: #6e6e73; cursor: pointer; border-radius: 100px;
          transition: all 0.15s;
        }
        .kl-filter-tab.active { background: #1d1d1f; color: white; }

        .kl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
        }
        .kl-card {
          background: white;
          border: 1px solid #e8e8ed;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.2s;
        }
        .kl-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.06);
        }
        .kl-card-img {
          position: relative;
          aspect-ratio: 16 / 9;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .kl-card-photo { width: 100%; height: 100%; object-fit: cover; }
        .kl-card-photo-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.35));
        }
        .kl-card-emoji { font-size: 58px; }
        .kl-card-level-badge, .kl-card-tag-badge {
          position: absolute; top: 14px;
          font-size: 11px; font-weight: 700;
          padding: 5px 10px; border-radius: 100px;
          background: rgba(255,255,255,0.92);
          color: #1d1d1f;
        }
        .kl-card-level-badge { left: 14px; }
        .kl-card-tag-badge {
          right: 14px;
          background: rgba(0,0,0,0.55);
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-size: 10px;
        }
        .kl-card-body { padding: 20px 22px 22px; display: flex; flex-direction: column; flex: 1; }
        .kl-card-title { font-size: 17px; font-weight: 800; color: #1d1d1f; margin-bottom: 6px; letter-spacing: -0.01em; }
        .kl-card-desc { font-size: 13px; color: #6e6e73; line-height: 1.5; margin-bottom: 14px; flex: 1; }
        .kl-card-meta {
          display: flex; flex-wrap: wrap; gap: 10px;
          font-size: 11px; color: #6e6e73;
          padding-bottom: 14px; margin-bottom: 14px;
          border-bottom: 1px solid #f0f0f5;
        }
        .kl-card-meta-item { display: inline-flex; align-items: center; gap: 4px; }
        .kl-card-price-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 14px; }
        .kl-card-price { font-size: 22px; font-weight: 800; color: #1d1d1f; }
        .kl-card-price-sub { font-size: 12px; color: #6e6e73; }
        .kl-card-btns { display: flex; gap: 8px; }
        .kl-btn-preview, .kl-btn-start {
          flex: 1;
          padding: 10px 14px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13px;
          text-align: center;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          border: none;
          transition: all 0.15s;
        }
        .kl-btn-preview { background: #f0f0f5; color: #1d1d1f; }
        .kl-btn-preview:hover { background: #e0e0e8; }
        .kl-btn-start { background: #1d1d1f; color: white; }
        .kl-btn-start:hover { background: #0057a8; }
        .kl-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 40px;
          color: #6e6e73;
          font-size: 14px;
        }
        .kl-empty strong { display: block; color: #1d1d1f; margin-bottom: 4px; }

        /* ========== METHODIK ========== */
        .kl-methodik {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        @media (max-width: 900px) { .kl-methodik { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .kl-methodik { grid-template-columns: 1fr; } }
        .kl-method {
          padding: 26px 22px;
          background: white;
          border-radius: 14px;
          border: 1px solid #e8e8ed;
          text-align: left;
          position: relative;
        }
        .kl-method-num {
          position: absolute;
          top: 14px; right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #c0c0c8;
        }
        .kl-method-icon { font-size: 26px; margin-bottom: 10px; }
        .kl-method-title { font-size: 15px; font-weight: 800; color: #1d1d1f; margin-bottom: 6px; }
        .kl-method-desc { font-size: 13px; color: #6e6e73; line-height: 1.55; }

        /* ========== HINTER SPEKTRUM (Founder-Bereich) ========== */
        .kl-founder-wrap {
          background: white;
          padding: 72px 0;
        }
        .kl-founder {
          max-width: 980px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 780px) {
          .kl-founder { grid-template-columns: 1fr; gap: 28px; text-align: left; }
          .kl-founder-photo { max-width: 220px; }
        }
        .kl-founder-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #5e35b1;
          margin-bottom: 12px;
        }
        .kl-founder-photo {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 20px;
          background: #1a1a1a;
        }
        .kl-founder-name {
          font-size: 30px;
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }
        .kl-founder-bio {
          font-size: 15px;
          color: #3d3d45;
          line-height: 1.7;
          margin-bottom: 14px;
        }
        .kl-founder-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 18px;
          margin-bottom: 22px;
        }
        .kl-founder-tag {
          padding: 6px 14px;
          background: #f0f0f5;
          border-radius: 100px;
          font-size: 12px;
          color: #3d3d45;
          font-weight: 500;
        }
        .kl-founder-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .kl-founder-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 13px;
          text-decoration: none;
          border: 1px solid #e0e0da;
          color: #1d1d1f;
          background: white;
          transition: all 0.15s;
        }
        .kl-founder-link:hover { background: #f8f9fa; }
        .kl-founder-link-primary {
          background: #5e35b1; color: white; border-color: #5e35b1;
        }
        .kl-founder-link-primary:hover { background: #4a278c; color: white; }

        /* ========== SWISS MADE SOFTWARE ========== */
        .kl-sms-wrap { background: #fafafa; padding: 64px 0; border-top: 1px solid #ecedf0; }
        .kl-sms {
          max-width: 980px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 780px) {
          .kl-sms { grid-template-columns: 1fr; gap: 20px; }
          .kl-sms-logo { max-width: 160px; }
        }
        .kl-sms-logo { width: 100%; }
        .kl-sms-title {
          font-size: 20px;
          font-weight: 800;
          color: #1d1d1f;
          margin-bottom: 10px;
        }
        .kl-sms-lead {
          font-size: 14px;
          color: #3d3d45;
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .kl-sms-list {
          font-size: 13px;
          color: #3d3d45;
          line-height: 1.75;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .kl-sms-list li { padding: 3px 0; }
        .kl-sms-list strong { color: #1d1d1f; font-weight: 700; }

        /* ========== FAQ ========== */
        .kl-faq-bg { background: #f5f7fa; padding: 72px 0; }
        .kl-faq {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .kl-faq-item {
          background: white;
          border: 1px solid #e8e8ed;
          border-radius: 12px;
          padding: 0;
          margin-bottom: 10px;
          overflow: hidden;
        }
        .kl-faq-q {
          padding: 18px 22px;
          font-weight: 700;
          font-size: 15px;
          color: #1d1d1f;
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .kl-faq-q::-webkit-details-marker { display: none; }
        .kl-faq-q::after {
          content: '+';
          font-size: 22px;
          font-weight: 400;
          color: #0057a8;
          flex-shrink: 0;
        }
        .kl-faq-item[open] .kl-faq-q::after { content: '−'; }
        .kl-faq-a {
          padding: 0 22px 18px;
          margin: 0;
          font-size: 14px;
          color: #3d3d45;
          line-height: 1.65;
        }

        /* ========== FINAL CTA BAND ========== */
        .kl-final-band {
          background: linear-gradient(135deg, #0d3d26 0%, #0057a8 100%);
          padding: 72px 24px;
          text-align: center;
          color: white;
        }
        .kl-final-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #00C853;
          margin-bottom: 16px;
          display: inline-block;
        }
        .kl-final-h2 {
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          max-width: 680px;
          margin: 0 auto 14px;
        }
        .kl-final-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.78);
          line-height: 1.6;
          max-width: 580px;
          margin: 0 auto 32px;
        }
        .kl-final-ctas {
          display: inline-flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .kl-final-primary {
          padding: 14px 28px;
          background: #00C853;
          color: #0A1F14;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .kl-final-secondary {
          padding: 14px 28px;
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 100px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
        }
        .kl-final-secondary:hover { background: rgba(255,255,255,0.1); }

        /* ========== PREVIEW DRAWER (bestehend, wiederverwendet) ========== */
        .pv-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          z-index: 2000;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .pv-drawer {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: 100%; max-width: 540px;
          background: white;
          z-index: 2001;
          display: flex; flex-direction: column;
          box-shadow: -12px 0 40px rgba(0,0,0,0.15);
          animation: slideIn 0.25s ease;
        }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .pv-header { padding: 32px 28px 20px; border-bottom: 1px solid #ecedf0; position: relative; }
        .pv-close {
          position: absolute; top: 20px; right: 20px;
          background: #f0f0f5; border: none;
          width: 36px; height: 36px; border-radius: 50%;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
        }
        .pv-close:hover { background: #e0e0e8; }
        .pv-title { font-size: 24px; font-weight: 800; color: #1d1d1f; margin-bottom: 6px; padding-right: 40px; letter-spacing: -0.01em; }
        .pv-desc { font-size: 14px; color: #6e6e73; line-height: 1.55; margin-bottom: 14px; }
        .pv-badges { display: flex; gap: 8px; }
        .pv-badge { padding: 5px 12px; border-radius: 100px; background: #f0f0f5; font-size: 12px; font-weight: 600; color: #3d3d45; }
        .pv-badge-price { background: #1d1d1f; color: white; }

        .pv-body { flex: 1; overflow-y: auto; padding: 24px 28px; }
        .pv-section-heading {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; color: #6e6e73;
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 14px;
        }
        .pv-module-card {
          padding: 16px 18px;
          border: 1px solid #ecedf0;
          border-radius: 12px;
          margin-bottom: 10px;
        }
        .pv-module-title { font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 3px; }
        .pv-module-desc { font-size: 12px; color: #6e6e73; line-height: 1.5; margin-bottom: 10px; }
        .pv-module-meta { display: flex; gap: 12px; font-size: 11px; color: #6e6e73; flex-wrap: wrap; }
        .pv-meta-item { display: inline-flex; align-items: center; gap: 4px; }
        .pv-quiz-pill { display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; background: #e0f2e9; color: #00695c; border-radius: 100px; font-weight: 600; }
        .pv-final-card {
          margin-top: 20px;
          padding: 18px;
          background: linear-gradient(135deg, #f0f7ff 0%, #e6f7f3 100%);
          border-radius: 12px;
          border: 1px solid #d6e4ed;
        }
        .pv-final-heading { display: flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 700; color: #0057a8; margin-bottom: 6px; }
        .pv-final-desc { font-size: 13px; color: #3d3d45; line-height: 1.55; margin-bottom: 12px; }
        .pv-cert-pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 11px; background: white; border-radius: 100px;
          font-size: 11px; font-weight: 700; color: #0057a8;
          border: 1px solid #c8dce8;
        }
        .pv-footer {
          padding: 18px 28px;
          border-top: 1px solid #ecedf0;
          display: flex; gap: 10px;
          background: #fafbfc;
        }
        .pv-btn-close, .pv-btn-buy {
          padding: 12px 20px; border-radius: 10px;
          font-weight: 600; font-size: 14px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          border: none;
          transition: all 0.15s;
        }
        .pv-btn-close { background: #f0f0f5; color: #1d1d1f; }
        .pv-btn-buy { background: #1d1d1f; color: white; flex: 1; }
        .pv-btn-buy:hover { background: #0057a8; }
      `}} />

      <Header />

      {/* ========== 1. HERO ========== */}
      <section className="kl-hero">
        <div className="kl-hero-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
          </svg>
          SPEKTRUM Weiterbildung
        </div>
        <h1>KI-Kompetenz für die Planungs- und Verwaltungsbranche.</h1>
        <p className="kl-hero-sub">
          Strukturierte Online-Lehrgänge für Schweizer Gemeinden, Planungsbüros und Einzelpersonen im DACH-Raum.
          Praxisnah. Zertifiziert. Selbst eingeteilt.
        </p>
        <div className="kl-hero-ctas">
          <a href="#selbstcheck" className="kl-hero-cta-primary">
            Bist du auf KI-Kurs? →
          </a>
          <a href="mailto:andreas.rupf@spekt.ch?subject=Beratungsgespräch%20KI-Kurse" className="kl-hero-cta-secondary">
            Beratungsgespräch buchen
          </a>
        </div>
      </section>

      {/* ========== 2. SELBSTCHECK / QUIZ ========== */}
      <section id="selbstcheck" className="kl-check-section">
        <div className="kl-check-inner">
          <span className="kl-check-label">Kostenloser Selbstcheck</span>
          <h2 className="kl-check-heading">Wie fit bist du in KI?</h2>

          {/* Intro */}
          {quizStep === -1 && (
            <>
              <p className="kl-check-sub">
                5 Fragen, 3 Minuten – du erfährst wo du stehst und welches Programm zu dir passt.
              </p>
              <button className="kl-quiz-start-btn" onClick={() => setQuizStep(0)}>
                Quiz starten →
              </button>
            </>
          )}

          {/* Fragen */}
          {quizStep >= 0 && quizStep < QUIZ.length && (
            <>
              <div className="kl-quiz-progress">
                <div className="kl-quiz-progress-bar">
                  <div className="kl-quiz-progress-fill" style={{ width: `${((quizStep) / QUIZ.length) * 100}%` }} />
                </div>
                <span className="kl-quiz-progress-text">Frage {quizStep + 1} von {QUIZ.length}</span>
              </div>
              <div className="kl-quiz-question">{QUIZ[quizStep].q}</div>
              <div className="kl-quiz-options">
                {QUIZ[quizStep].options.map((opt, i) => (
                  <button
                    key={i}
                    className={`kl-quiz-option${quizSelected === i ? ' selected' : ''}`}
                    onClick={() => setQuizSelected(i)}
                  >
                    <span className="kl-quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </button>
                ))}
              </div>
              <button
                className="kl-quiz-next-btn"
                disabled={quizSelected === null}
                onClick={quizNext}
              >
                {quizStep < QUIZ.length - 1 ? 'Weiter →' : 'Auswertung anzeigen →'}
              </button>
            </>
          )}

          {/* Ergebnis */}
          {quizStep === 5 && quizResult && (
            <div className="kl-quiz-result">
              <div className="kl-quiz-score">{quizScore}/{QUIZ.length}</div>
              <div className="kl-quiz-score-label">Richtige Antworten</div>
              <div className="kl-quiz-result-card">
                <div style={{ flex: 1, minWidth: 200 }}>
                  <span className="kl-quiz-result-level">{quizResult.emoji} {quizResult.level}</span>
                  <div className="kl-quiz-result-title">{quizResult.program}</div>
                  <div className="kl-quiz-result-desc">{quizResult.desc}</div>
                  <div className="kl-quiz-result-meta">{quizResult.price} · 180 Tage Zugang</div>
                </div>
                <a href={quizResult.href} className="kl-quiz-result-btn">
                  Programm ansehen →
                </a>
              </div>
              <button className="kl-quiz-retry" onClick={quizReset}>
                Quiz wiederholen
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========== 3. FÜR WEN? ========== */}
      <section className="kl-section">
        <div className="kl-section-head">
          <span className="kl-eyebrow">Für wen sind die Kurse?</span>
          <h2 className="kl-section-h2">Drei Wege – je nach Rolle</h2>
          <p className="kl-section-lead">
            Jede Organisationsgrösse hat andere Bedürfnisse. Wählen Sie den Einstieg, der zu Ihnen passt.
          </p>
        </div>
        <div className="kl-personas">
          <Link href="/fuer-gemeinden" className="kl-persona">
            <div className="kl-persona-emoji">🏛️</div>
            <div className="kl-persona-title">Gemeinden &amp; Verwaltung</div>
            <div className="kl-persona-desc">
              Team-Lizenzen ab 5 Plätzen, Sammelrechnung, individuelle Zertifikate und Onboarding-Unterstützung.
            </div>
            <span className="kl-persona-link">Für Gemeinden →</span>
          </Link>
          <Link href="/zertifikatslehrgang#ki-planungsbuero" className="kl-persona">
            <div className="kl-persona-emoji">🏢</div>
            <div className="kl-persona-title">Planungsbüros</div>
            <div className="kl-persona-desc">
              KI büroweit verankern – vom Sekretariat bis zur Projektleitung. KI-Intensivprogramm mit drei Tiers.
            </div>
            <span className="kl-persona-link">Lehrgang für Büros →</span>
          </Link>
          <a href="#kurse" className="kl-persona">
            <div className="kl-persona-emoji">👤</div>
            <div className="kl-persona-title">Einzelpersonen</div>
            <div className="kl-persona-desc">
              Einstiegskurs ab CHF 89 oder ein komplettes KI-Intensivprogramm – ideal für berufs­begleitendes Lernen.
            </div>
            <span className="kl-persona-link">Kurse ansehen →</span>
          </a>
        </div>
      </section>

      {/* ========== 3. ZERTIFIKATSLEHRGÄNGE (Primärangebot) ========== */}
      <section id="lehrgaenge" className="kl-lehrgaenge-bg">
        <div className="kl-section" style={{ padding: '0 24px' }}>
          <div className="kl-section-head">
            <span className="kl-eyebrow">KI-Intensivprogramme</span>
            <h2 className="kl-section-h2">Strukturierter Lernpfad statt einzelner Kurse</h2>
            <p className="kl-section-lead">
              Vier Tracks mit je drei aufeinander abgestimmten Kursen. Teilnahmebestätigung auf Wunsch.
              Drei Tiers: {TIER_PRICES.basis.priceLabel} (Basis), {TIER_PRICES.plus.priceLabel} (Plus mit 1:1-Sessions) oder {TIER_PRICES.business.priceLabel} (Business).
            </p>
          </div>

          <div className="kl-lehrgang-grid">
            {lehrgaenge.map(l => (
              <Link key={l.slug} href={`/zertifikatslehrgang#${l.slug}`} className="kl-lehrgang-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="kl-lehrgang-head" style={{ background: l.color }}>
                  <div className="kl-lehrgang-emoji">{l.emoji}</div>
                  <div className="kl-lehrgang-title">{l.title}</div>
                  <div className="kl-lehrgang-subtitle">{l.subtitle}</div>
                </div>
                <div className="kl-lehrgang-body">
                  <div className="kl-lehrgang-courses">
                    <strong>{l.courses.length} Kurse · {l.totalHours} h:</strong><br />
                    {l.courses.map(c => c.course.title).join(' · ')}
                  </div>
                  <div className="kl-lehrgang-foot">
                    <div>
                      <span className="kl-lehrgang-price">ab {TIER_PRICES.basis.priceLabel}</span>
                    </div>
                    <span className="kl-lehrgang-cta">Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="kl-center-wrap">
            <Link href="/zertifikatslehrgang" className="kl-lehrgang-overview-cta">
              Alle Lehrgänge &amp; Team-Preise ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 4. EINZELKURSE ========== */}
      <section id="kurse" className="kl-section">
        <div className="kl-section-head">
          <span className="kl-eyebrow">Einzelkurse</span>
          <h2 className="kl-section-h2">Einstiegskurs &amp; Gratis-Kurs</h2>
          <p className="kl-section-lead">
            Zum Reinschnuppern. Alle weiteren Kurse sind Teil der KI-Intensivprogramme – das stellt einen
            strukturierten Lernpfad sicher und vermeidet punktuelles Stückwerk.
          </p>
        </div>

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
                <div key={c.slug} id={c.slug} className="kl-card">
                  <div className="kl-card-img" style={{ background: c.image ? '#1a1a1a' : c.color }}>
                    {c.image ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={c.image} alt={c.course.title} className="kl-card-photo" />
                        <div className="kl-card-photo-overlay" />
                      </>
                    ) : (
                      <span className="kl-card-emoji">{c.emoji}</span>
                    )}
                    <span className="kl-card-level-badge">{c.level}</span>
                    <span className="kl-card-tag-badge">{c.tag}</span>
                  </div>
                  <div className="kl-card-body">
                    <div className="kl-card-title">{c.course.title}</div>
                    <div className="kl-card-desc">{c.course.description}</div>
                    <div className="kl-card-meta">
                      <span className="kl-card-meta-item">📖 {totalLessons} Lektionen</span>
                      <span className="kl-card-meta-item">🗂️ {totalModules} Module</span>
                      <span className="kl-card-meta-item">🏆 Zertifikat</span>
                    </div>
                    <div className="kl-card-price-row">
                      <span className="kl-card-price">{c.priceLabel}</span>
                      {c.price > 0 && <span className="kl-card-price-sub">/ 90 Tage Zugang</span>}
                    </div>
                    <div className="kl-card-btns">
                      <button className="kl-btn-preview" onClick={() => setPreview(c)}>
                        Vorschau
                      </button>
                      <Link href={c.href} className="kl-btn-start">
                        {c.price === 0 ? 'Starten →' : 'Zugang kaufen →'}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ========== 5. SO LERNEN SIE (Methodik) ========== */}
      <section style={{ background: '#fafafa', padding: '72px 0', borderTop: '1px solid #ecedf0', borderBottom: '1px solid #ecedf0' }}>
        <div className="kl-section" style={{ padding: '0 24px' }}>
          <div className="kl-section-head">
            <span className="kl-eyebrow">So lernen Sie</span>
            <h2 className="kl-section-h2">Vier Bausteine pro Lektion</h2>
            <p className="kl-section-lead">
              Jede Lektion folgt dem gleichen Rhythmus – damit Wissen nicht nur aufgenommen, sondern verankert wird.
            </p>
          </div>
          <div className="kl-methodik">
            <div className="kl-method">
              <div className="kl-method-num">01</div>
              <div className="kl-method-icon">📹</div>
              <div className="kl-method-title">Video-Input</div>
              <div className="kl-method-desc">Vertonte Slide-Videos, 5–8 Minuten pro Lektion. Die ersten Folgen sind in Produktion – weitere folgen laufend.</div>
            </div>
            <div className="kl-method">
              <div className="kl-method-num">02</div>
              <div className="kl-method-icon">✏️</div>
              <div className="kl-method-title">Praxis­aufgabe</div>
              <div className="kl-method-desc">Direkt mit eigenen Daten anwenden – nicht an abstrakten Beispielen.</div>
            </div>
            <div className="kl-method">
              <div className="kl-method-num">03</div>
              <div className="kl-method-icon">✅</div>
              <div className="kl-method-title">Quiz</div>
              <div className="kl-method-desc">Kurzes Quiz am Modul­ende zur Verankerung. Bei 70 % bestanden.</div>
            </div>
            <div className="kl-method">
              <div className="kl-method-num">04</div>
              <div className="kl-method-icon">📜</div>
              <div className="kl-method-title">Teilnahmezertifikat</div>
              <div className="kl-method-desc">Auf Wunsch als PDF – mit Name, Kurs­titel und Datum.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 6. HINTER SPEKTRUM (Founder) ========== */}
      <section className="kl-founder-wrap">
        <div className="kl-founder">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/andreas-rupf.jpg" alt="Andreas Rupf – Gründer SPEKTRUM Partner GmbH" className="kl-founder-photo" />
          </div>
          <div>
            <span className="kl-founder-eyebrow">Entwickler &amp; Kursleitung</span>
            <div className="kl-founder-name">Andreas Rupf</div>
            <p className="kl-founder-bio">
              Raum- und Stadtplaner, KI-Berater und ehemaliger Programmleiter ETH RAUM an der ETH Zürich.
              Andreas verbindet städtebauliche Expertise mit KI-Strategie für Planungsbüros, Gemeinden und Behörden.
            </p>
            <p className="kl-founder-bio">
              Die SPEKTRUM KI-Kurse entstehen aus der täglichen Praxis: Parallel betreibt er den Protokoll-Assistenten{' '}
              <a href="https://minu-ai.ch" style={{ color: '#5e35b1', fontWeight: 600 }}>minu-ai.ch</a>, das KI-Tool{' '}
              <a href="https://interessenabwaegung.ch" style={{ color: '#5e35b1', fontWeight: 600 }}>interessenabwaegung.ch</a>{' '}
              und erstellt Bauzonenberichte für Schweizer Gemeinden.
            </p>
            <div className="kl-founder-tags">
              <span className="kl-founder-tag">ETH Zürich</span>
              <span className="kl-founder-tag">MAS Raumentwicklung</span>
              <span className="kl-founder-tag">KI-Strategie</span>
              <span className="kl-founder-tag">Raumplanung FSU</span>
            </div>
            <div className="kl-founder-links">
              <a href="https://spekt.ch" className="kl-founder-link kl-founder-link-primary">spekt.ch →</a>
              <a href="https://www.linkedin.com/in/andreasrupf/" className="kl-founder-link">LinkedIn</a>
              <a href="https://raum.ethz.ch" className="kl-founder-link">ETH RAUM</a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 7. SWISS MADE SOFTWARE + AI ========== */}
      <section className="kl-sms-wrap">
        <div className="kl-sms">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/swissmadesoftware.svg" alt="Swiss Made Software + AI" className="kl-sms-logo" />
          </div>
          <div>
            <div className="kl-sms-title">Swiss Made Software + AI</div>
            <p className="kl-sms-lead">
              Die SPEKTRUM KI-Kursplattform trägt das Label <strong>swiss made software + AI</strong> – basierend
              auf signifikanter Schweizer Eigenleistung und mit KI als integralem Bestandteil. Alle KI-Komponenten
              sind transparent offengelegt:
            </p>
            <ul className="kl-sms-list">
              <li><strong>KI-Funktion:</strong> Unterstützung bei Kursinhalten, Assessment und Zertifikats­erstellung</li>
              <li><strong>Technologie:</strong> Drittanbieter-LLM (Mistral Small, EU-gehostet), kein Fine-Tuning</li>
              <li><strong>Hosting:</strong> Hetzner VPS in der EU, keine US-Cloud-Dienste</li>
              <li><strong>Modell:</strong> Closed-source LLM, generative KI</li>
              <li><strong>Datenschutz:</strong> Keine Trainingsdaten-Nutzung, DSG- und DSGVO-konform</li>
              <li><strong>Entwicklung:</strong> SPEKTRUM Partner GmbH, Zürich (Schweiz)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== 8. FAQ ========== */}
      <section className="kl-faq-bg">
        <div className="kl-section-head" style={{ maxWidth: 720, margin: '0 auto 40px', padding: '0 24px' }}>
          <span className="kl-eyebrow">Häufige Fragen</span>
          <h2 className="kl-section-h2">Antworten auf die häufigsten Fragen</h2>
          <p className="kl-section-lead">
            Alles Wichtige zu den SPEKTRUM KI-Kursen – von Zielgruppen über Zertifikate bis zu Zugangsdauer.
          </p>
        </div>
        <div className="kl-faq">
          {[
            { q: 'Für wen sind die SPEKTRUM KI-Kurse geeignet?', a: 'Die Kurse richten sich an Raumplanende, Architektinnen, Stadtplaner, Mitarbeitende von Gemeindeverwaltungen und Planungsbüros im deutschsprachigen Raum (Schweiz, Deutschland, Österreich). Je nach Kurs sind keine Vorkenntnisse nötig (Einsteiger) oder KI-Grundwissen wird vorausgesetzt (Fortgeschritten/Experte).' },
            { q: 'Welcher KI-Kurs passt für Schweizer Gemeinden?', a: 'Für einen ersten Einstieg empfehlen wir den kostenlosen Kurs «Interessenabwägung mit KI». Für strukturierte Weiterbildung ist das KI-Intensivprogramm «KI für Verwaltung & Gemeinden» ideal – buchbar als Einzelperson (ab CHF 290) oder als Team-Lizenz.' },
            { q: 'Was kostet ein KI-Kurs bei SPEKTRUM?', a: '«Interessenabwägung mit KI» ist gratis. Der Einstiegskurs «KI-Grundkurs Einsteiger» kostet CHF 89. KI-Intensivprogramme (3 Kurse, strukturierter Lernpfad) ab CHF 290 (Basis), CHF 790 (Plus mit 1:1-Sessions), CHF 2\'900 (Business, auf Anfrage). Einmalzahlung, kein Abo.' },
            { q: 'Wie lange habe ich Zugang zu einem Kurs?', a: '90 Tage ab Kauf für den Einstiegskurs, 180 Tage für KI-Intensivprogramme. In dieser Zeit können alle Lektionen, Übungen und Quizze beliebig oft durchgearbeitet werden. Hinweis: Die Video-Vertonungen sind aktuell in Produktion und werden laufend ergänzt.' },
            { q: 'Gibt es ein Zertifikat?', a: 'Ja, auf Wunsch. Nach Abschluss der Lektionen und Quizze kann eine Teilnahmebestätigung als PDF heruntergeladen werden. Es sind keine eidgenössisch reglementierten Abschlüsse (kein CAS/DAS/MAS) – die Bestätigung dokumentiert die bearbeiteten Inhalte und die investierte Lernzeit.' },
            { q: 'Was ist der Unterschied zwischen Einstiegskurs und KI-Intensivprogramm?', a: 'Der Einstiegskurs (CHF 89) deckt ein einzelnes Thema ab – ideal zum Reinschnuppern. Ein KI-Intensivprogramm bündelt drei aufeinander abgestimmte Kurse zu einem strukturierten Lernpfad mit 180 Tagen Zugang. Ab Plus-Tier sind zusätzlich 1:1-Sessions mit Andreas Rupf enthalten.' },
            { q: 'Kann ich den Kurs als Team oder Gemeinde buchen?', a: 'Ja. Team-Lizenzen ab 5 Personen mit Sammelrechnung, individuellen Zertifikaten und Kickoff-Call. Details auf /fuer-gemeinden.' },
            { q: 'Wer steckt hinter SPEKTRUM KI-Kurse?', a: 'Andreas Rupf – Raum- und Stadtplaner, KI-Berater und ehemaliger Programmleiter ETH RAUM an der ETH Zürich. Gründer der SPEKTRUM Partner GmbH in Zürich und Entwickler der KI-Tools minu-ai.ch und interessenabwaegung.ch.' },
            { q: 'Sind die Kurse auch für Deutschland und Österreich relevant?', a: 'Ja. Die Kurse sind für den gesamten deutschsprachigen Raum (DACH) konzipiert. Rechtlich spezifische Inhalte (z.B. Schweizer RPG/RPV) sind klar gekennzeichnet – die KI-Methodik, Tools und Workflows sind international übertragbar.' },
          ].map((item, i) => (
            <details key={i} className="kl-faq-item" {...(i < 2 ? { open: true } : {})}>
              <summary className="kl-faq-q">{item.q}</summary>
              <p className="kl-faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ========== 9. FINAL CTA BAND ========== */}
      <section className="kl-final-band">
        <div className="kl-final-eyebrow">Unsicher, welcher Kurs passt?</div>
        <h2 className="kl-final-h2">Lassen Sie uns 20 Minuten darüber sprechen.</h2>
        <p className="kl-final-sub">
          Kostenloses Orientierungs­gespräch mit Andreas Rupf – ideal für Gemeinden, Planungsbüros und Verantwortliche,
          die KI strategisch einführen möchten.
        </p>
        <div className="kl-final-ctas">
          <a
            href="mailto:andreas.rupf@spekt.ch?subject=Beratungsgespräch%20SPEKTRUM%20KI-Kurse&body=Guten%20Tag%20Andreas%0A%0AIch%20möchte%20gerne%20ein%20kostenloses%20Beratungs­gespräch%20vereinbaren.%0A%0AOrganisation%3A%0ARolle%3A%0AMein%20Thema%20in%201-2%20Sätzen%3A%0A%0ABeste%20Grüsse"
            className="kl-final-primary"
          >
            Beratungsgespräch buchen →
          </a>
          <Link href="/fuer-gemeinden" className="kl-final-secondary">
            Für Gemeinden &amp; Teams
          </Link>
        </div>
      </section>

      <Footer />

      {/* ========== PREVIEW DRAWER ========== */}
      {preview && (
        <>
          <div className="pv-overlay" onClick={() => setPreview(null)} />
          <div className="pv-drawer">
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

            <div className="pv-body">
              <div className="pv-section-heading">Kursmodule</div>

              {preview.course.modules.map((m, mi) => {
                const quizCount = m.lessons.reduce((s, l) => s + (l.quiz ? l.quiz.questions.length : 0), 0);
                return (
                  <div key={m.id} className="pv-module-card">
                    <div className="pv-module-title">Modul {mi + 1}: {m.title}</div>
                    <div className="pv-module-desc">{m.description}</div>
                    <div className="pv-module-meta">
                      <span className="pv-meta-item">📖 {m.lessons.length} Lektionen</span>
                      {quizCount > 0 && (
                        <span className="pv-quiz-pill">✓ {quizCount}-Fragen Quiz</span>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="pv-final-card">
                <div className="pv-final-heading">🏆 Abschlusstest</div>
                <div className="pv-final-desc">
                  Teste dein Wissen mit einem abschliessenden Assessment. Auf Wunsch kannst du danach eine Teilnahmebestätigung als PDF herunterladen.
                </div>
                <span className="pv-cert-pill">📜 Teilnahmebestätigung auf Wunsch</span>
              </div>
            </div>

            <div className="pv-footer">
              <button className="pv-btn-close" onClick={() => setPreview(null)}>Schliessen</button>
              <Link href={preview.href} className="pv-btn-buy">
                {preview.price === 0 ? 'Gratis starten →' : `Zugang kaufen – ${preview.priceLabel} →`}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
