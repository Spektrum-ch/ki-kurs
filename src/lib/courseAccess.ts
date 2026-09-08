import type { User } from '@/types';

export const COURSE_ACCESS_DAYS = 90;          // Einzelkurs
export const LEHRGANG_ACCESS_DAYS = 180;        // Lehrgang-Kurs
export const FREE_COURSES = ['kurs-interessenabwaegung', 'kurs-uvp'];

/**
 * Parst den gespeicherten Wert aus purchasedCourses.
 * Format: "<ISO-Datum>" (90 Tage, legacy) oder "<ISO-Datum>|<days>" (explizite Dauer).
 */
function parsePurchasedEntry(raw: string): { date: string; days: number } {
  const parts = raw.split('|');
  return {
    date: parts[0],
    days: parts[1] ? parseInt(parts[1], 10) : COURSE_ACCESS_DAYS,
  };
}

/** Berechnet Ablaufdatum aus gespeichertem Eintrag */
function getCourseExpiryDate(raw: string): Date {
  const { date, days } = parsePurchasedEntry(raw);
  const expiry = new Date(date);
  expiry.setDate(expiry.getDate() + days);
  return expiry;
}

/** Prüft ob ein Kurs zugänglich ist (gratis oder innerhalb der gebuchten Zugangsdauer) */
export function hasCourseAccess(user: User | null | undefined, slug: string): boolean {
  if (FREE_COURSES.includes(slug)) return true;
  if (!user?.purchasedCourses) return false;
  const raw = (user.purchasedCourses as Record<string, string>)[slug];
  if (!raw) return false;
  return new Date() < getCourseExpiryDate(raw);
}

/** Gibt das Ablaufdatum zurück (null wenn nicht gekauft) */
export function getCourseExpiry(user: User | null | undefined, slug: string): Date | null {
  if (!user?.purchasedCourses) return null;
  const raw = (user.purchasedCourses as Record<string, string>)[slug];
  if (!raw) return null;
  return getCourseExpiryDate(raw);
}

/** Formatiert Ablaufdatum auf Deutsch */
export function formatExpiry(date: Date): string {
  return date.toLocaleDateString('de-CH', { day: '2-digit', month: 'long', year: 'numeric' });
}

/** Restliche Tage bis Ablauf */
export function daysRemaining(date: Date): number {
  return Math.max(0, Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
}
