import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { redirect } from 'next/navigation';
import { hasCourseAccess } from '@/lib/courseAccess';

export default function LektionBueroLayout({ children }: { children: React.ReactNode }) {
  const auth = getUserFromCookie();
  if (!auth) redirect('/login?redirect=/kurs-buero');

  const user = getUserByEmail(auth.email);
  if (!hasCourseAccess(user, 'kurs-buero')) redirect('/kurs-buero');

  return <>{children}</>;
}
