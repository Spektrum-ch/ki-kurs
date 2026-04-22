import { NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';

export const dynamic = 'force-dynamic';

export async function GET() {
  const auth = getUserFromCookie();
  if (!auth) {
    return NextResponse.json({ purchasedCourses: [] });
  }
  const user = getUserByEmail(auth.email);
  return NextResponse.json({ purchasedCourses: user?.purchasedCourses || [] });
}
