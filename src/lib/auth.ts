import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-bitte-aendern';
export const COOKIE_NAME = 'kurs-auth';

export interface JWTPayload {
  email: string;
  iat: number;
  exp: number;
}

export function createToken(email: string): string {
  return jwt.sign({ email: email.toLowerCase() }, JWT_SECRET, { expiresIn: '60d' });
}

export function verifyJWT(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export function generateLoginToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function getLoginTokenExpiry(): string {
  // 24 Stunden gültig
  return new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
}

export function setAuthCookie(token: string): void {
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 24 * 60 * 60, // 60 Tage
    path: '/',
  });
}

export function deleteAuthCookie(): void {
  cookies().delete(COOKIE_NAME);
}

export function getAuthCookie(): string | undefined {
  return cookies().get(COOKIE_NAME)?.value;
}

export function getUserFromCookie(): JWTPayload | null {
  const token = getAuthCookie();
  if (!token) return null;
  return verifyJWT(token);
}

export function isAdmin(email: string): boolean {
  const adminEmail = (process.env.ADMIN_EMAIL || 'andreas@spekt.ch').toLowerCase();
  return email.toLowerCase() === adminEmail;
}
