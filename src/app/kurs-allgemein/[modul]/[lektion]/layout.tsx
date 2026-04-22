import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { redirect } from 'next/navigation';
import { hasCourseAccess } from '@/lib/courseAccess';

export default function LektionAllgemeinLayout({ children }: { children: React.ReactNode }) {
  const auth = getUserFromCookie();
  if (!auth) redirect('/login?redirect=/kurs-allgemein');

  const user = getUserByEmail(auth.email);
  if (!hasCourseAccess(user, 'kurs-allgemein')) redirect('/kurs-allgemein');

  return <>{children}</>;
}
