import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { redirect } from 'next/navigation';
import { hasCourseAccess } from '@/lib/courseAccess';

export default function LektionGemeindenLayout({ children }: { children: React.ReactNode }) {
  const auth = getUserFromCookie();
  if (!auth) redirect('/login?redirect=/kurs-gemeinden');

  const user = getUserByEmail(auth.email);
  if (!hasCourseAccess(user, 'kurs-gemeinden')) redirect('/kurs-gemeinden');

  return <>{children}</>;
}
