import fs from 'fs';
import path from 'path';
import type { Progress, QuizResult } from '@/types';
import { COURSE } from '@/data/course';
import { getLessonsForCourse } from '@/lib/courseMap';

function getDataDir(): string {
  return process.env.DATA_DIR || path.join(process.cwd(), 'data');
}

function getProgressFile(): string {
  return path.join(getDataDir(), 'progress.json');
}

function ensureDataDir(): void {
  const dir = getDataDir();
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readAllProgress(): Progress[] {
  ensureDataDir();
  try {
    return JSON.parse(fs.readFileSync(getProgressFile(), 'utf-8'));
  } catch {
    return [];
  }
}

function writeAllProgress(data: Progress[]): void {
  ensureDataDir();
  fs.writeFileSync(getProgressFile(), JSON.stringify(data, null, 2), 'utf-8');
}

export function getProgress(email: string): Progress {
  const all = readAllProgress();
  return all.find(p => p.email.toLowerCase() === email.toLowerCase()) ?? {
    email: email.toLowerCase(),
    completedLessons: [],
    quizResults: [],
    lastActivity: new Date().toISOString(),
  };
}

export function markLessonComplete(email: string, lessonId: string): void {
  const all = readAllProgress();
  const idx = all.findIndex(p => p.email.toLowerCase() === email.toLowerCase());
  if (idx === -1) {
    all.push({
      email: email.toLowerCase(),
      completedLessons: [lessonId],
      quizResults: [],
      lastActivity: new Date().toISOString(),
    });
  } else {
    if (!all[idx].completedLessons.includes(lessonId)) {
      all[idx].completedLessons.push(lessonId);
    }
    all[idx].lastActivity = new Date().toISOString();
  }
  writeAllProgress(all);
}

export function saveQuizResult(email: string, result: QuizResult): void {
  const all = readAllProgress();
  const idx = all.findIndex(p => p.email.toLowerCase() === email.toLowerCase());
  if (idx === -1) {
    all.push({
      email: email.toLowerCase(),
      completedLessons: [],
      quizResults: [result],
      lastActivity: new Date().toISOString(),
    });
  } else {
    // Altes Ergebnis überschreiben
    all[idx].quizResults = all[idx].quizResults.filter(r => r.lessonId !== result.lessonId);
    all[idx].quizResults.push(result);
    all[idx].lastActivity = new Date().toISOString();
  }
  writeAllProgress(all);
}

/** Gesamtanzahl Lektionen im Kurs */
export function getTotalLessons(): number {
  return COURSE.modules.reduce((sum, m) => sum + m.lessons.length, 0);
}

/** Fortschritt in Prozent (0–100) */
export function getProgressPercent(email: string): number {
  const total = getTotalLessons();
  if (total === 0) return 0;
  const progress = getProgress(email);
  return Math.round((progress.completedLessons.length / total) * 100);
}

/** Prüft ob der Hauptkurs (ki-planungswelt) abgeschlossen ist – Legacy */
export function isCourseComplete(email: string): boolean {
  return getProgressPercent(email) === 100;
}

// ─── Kursübergreifende Funktionen ─────────────────────────────────────────────

/** Fortschritt in Prozent für einen bestimmten Kurs (0–100) */
export function getProgressPercentForCourse(email: string, courseSlug: string): number {
  const lessons = getLessonsForCourse(courseSlug);
  if (!lessons.length) return 0;
  const progress = getProgress(email);
  const done = progress.completedLessons.filter(id => lessons.includes(id));
  return Math.round((done.length / lessons.length) * 100);
}

/** Prüft ob ein bestimmter Kurs vollständig abgeschlossen ist */
export function isCourseCompleteForSlug(email: string, courseSlug: string): boolean {
  return getProgressPercentForCourse(email, courseSlug) === 100;
}

/** Prüft ob das Zertifikat für einen Kurs bereits ausgestellt wurde */
export function isCertificateIssued(email: string, courseSlug: string): boolean {
  const progress = getProgress(email);
  // Legacy-Kompatibilität: Hauptkurs über altes certificateIssued-Flag
  if (courseSlug === 'ki-planungswelt' && progress.certificateIssued) return true;
  return progress.certificateIssuedCourses?.includes(courseSlug) ?? false;
}

/** Markiert das Zertifikat für einen Kurs als ausgestellt (verhindert Doppelversand) */
export function setCertificateIssued(email: string, courseSlug: string): void {
  const all = readAllProgress();
  const idx = all.findIndex(p => p.email.toLowerCase() === email.toLowerCase());
  if (idx !== -1) {
    const issued = all[idx].certificateIssuedCourses ?? [];
    if (!issued.includes(courseSlug)) {
      all[idx].certificateIssuedCourses = [...issued, courseSlug];
    }
    all[idx].lastActivity = new Date().toISOString();
    writeAllProgress(all);
  }
}
