import { enforceLessonAccess } from '@/lib/lessonAccess';
import { COURSE_GEMEINDEN } from '@/data/course-gemeinden';

export default function LektionGemeindenLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { modul: string; lektion: string };
}) {
  enforceLessonAccess(COURSE_GEMEINDEN, 'kurs-gemeinden', '/kurs-gemeinden', params);
  return <>{children}</>;
}
