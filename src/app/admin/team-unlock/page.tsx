import { getUserFromCookie, isAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ALL_COURSES } from '@/data/courses';
import Header from '@/components/Header';
import TeamUnlockForm from './TeamUnlockForm';

export default function TeamUnlockPage() {
  const auth = getUserFromCookie();
  if (!auth || !isAdmin(auth.email)) redirect('/');

  const courses = ALL_COURSES.map(c => ({
    slug: c.slug,
    title: c.course.title,
    price: c.priceLabel,
    level: c.level,
  }));

  return (
    <>
      <Header userEmail={auth.email} />
      <TeamUnlockForm courses={courses} />
    </>
  );
}
