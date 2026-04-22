'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export type AccessState = 'loading' | 'allowed' | 'denied';

/**
 * Prüft serverseitig, ob der User Zugang zur aktuellen Lektion hat.
 * Redirectet bei Denial automatisch zur Kursübersicht.
 *
 * @param courseSlug URL-Segment des Kurses, z.B. 'kurs', 'kurs-gemeinden'
 */
export function useCourseAccess(courseSlug: string): AccessState {
  const router = useRouter();
  const params = useParams();
  const [state, setState] = useState<AccessState>('loading');

  useEffect(() => {
    const moduleSlug = params?.modul as string | undefined;
    const lessonSlug = params?.lektion as string | undefined;
    if (!moduleSlug || !lessonSlug) {
      setState('denied');
      return;
    }

    let cancelled = false;
    fetch(
      `/api/check-access?course=${encodeURIComponent(courseSlug)}` +
        `&module=${encodeURIComponent(moduleSlug)}` +
        `&lesson=${encodeURIComponent(lessonSlug)}`
    )
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        if (data?.allowed) {
          setState('allowed');
        } else {
          setState('denied');
          router.replace('/' + courseSlug);
        }
      })
      .catch(() => {
        if (cancelled) return;
        setState('denied');
        router.replace('/' + courseSlug);
      });

    return () => {
      cancelled = true;
    };
  }, [courseSlug, params, router]);

  return state;
}
