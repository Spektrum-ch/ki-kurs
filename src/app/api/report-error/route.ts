import { NextRequest, NextResponse } from 'next/server';
import { reportError } from '@/lib/errorReporter';
import { getUserFromCookie } from '@/lib/auth';

export const dynamic = 'force-dynamic';

interface ClientErrorBody {
  message?: string;
  stack?: string;
  url?: string;
  component?: string;
  digest?: string;
}

/**
 * Empfangs-Endpoint für clientseitige Fehler aus `global-error.tsx`
 * und manuellen `window.__reportError(...)`-Aufrufen.
 */
export async function POST(req: NextRequest) {
  try {
    const body: ClientErrorBody = await req.json().catch(() => ({}));
    const auth = getUserFromCookie();

    // NEXT_REDIRECT und andere Control-Flow-Signale ignorieren
    if (body.digest?.startsWith('NEXT_REDIRECT')) {
      return NextResponse.json({ ok: true, ignored: 'next-redirect' });
    }
    if (body.message?.includes('ResizeObserver loop')) {
      return NextResponse.json({ ok: true, ignored: 'resize-observer' });
    }

    const error = new Error(body.message || 'Unknown client error');
    if (body.stack) error.stack = body.stack;

    await reportError(error, {
      source: 'client',
      location: body.url || 'unknown',
      userEmail: auth?.email,
      meta: {
        component: body.component || 'unknown',
        digest: body.digest,
        userAgent: req.headers.get('user-agent')?.slice(0, 200),
      },
      severity: 'low',
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
