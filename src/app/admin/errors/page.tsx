import { getUserFromCookie, isAdmin } from '@/lib/auth';
import { getAllErrors } from '@/lib/errorReporter';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';

export const dynamic = 'force-dynamic';

export default function AdminErrorsPage() {
  const auth = getUserFromCookie();
  if (!auth || !isAdmin(auth.email)) redirect('/');

  const errors = getAllErrors();
  const lastHour = errors.filter(
    e => Date.now() - new Date(e.timestamp).getTime() < 60 * 60 * 1000,
  ).length;
  const last24h = errors.filter(
    e => Date.now() - new Date(e.timestamp).getTime() < 24 * 60 * 60 * 1000,
  ).length;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .ae-page { max-width: 1100px; margin: 0 auto; padding: 40px 24px; }
        .ae-title { font-size: 26px; font-weight: 800; color: #1d1d1f; margin-bottom: 6px; }
        .ae-subtitle { font-size: 15px; color: #6e6e73; margin-bottom: 30px; }
        .ae-stats { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; margin-bottom: 32px; }
        .ae-stat { background: white; border: 1px solid #e8e8ed; border-radius: 12px; padding: 18px 20px; }
        .ae-stat-label { font-size: 11px; color: #6e6e73; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
        .ae-stat-value { font-size: 28px; font-weight: 800; color: #1d1d1f; }
        .ae-list { background: white; border: 1px solid #e8e8ed; border-radius: 14px; overflow: hidden; }
        .ae-item { padding: 16px 20px; border-bottom: 1px solid #f0f0f5; }
        .ae-item:last-child { border-bottom: none; }
        .ae-item-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 8px; }
        .ae-sev { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.8px; flex-shrink: 0; }
        .ae-sev-high { background: #ffebee; color: #c62828; }
        .ae-sev-medium { background: #fff4e5; color: #c2410c; }
        .ae-sev-low { background: #e3f2fd; color: #1565c0; }
        .ae-message { font-size: 14px; font-weight: 600; color: #1d1d1f; word-break: break-word; font-family: 'SF Mono', Menlo, monospace; }
        .ae-meta { font-size: 12px; color: #6e6e73; margin-top: 4px; }
        .ae-meta code { background: #f0f0f5; padding: 1px 6px; border-radius: 4px; font-size: 11px; }
        .ae-stack { margin-top: 10px; }
        .ae-stack summary { cursor: pointer; font-size: 12px; color: #0057a8; }
        .ae-stack pre { background: #1d1d1f; color: #e8e8ed; padding: 12px; border-radius: 6px; overflow-x: auto; font-size: 11px; line-height: 1.5; margin-top: 8px; }
        .ae-empty { padding: 60px 20px; text-align: center; color: #6e6e73; font-size: 14px; }
        .ae-flags { display: inline-flex; gap: 6px; margin-left: 8px; }
        .ae-flag { font-size: 10px; padding: 2px 7px; border-radius: 6px; background: #f0f9f6; color: #0d5c42; }
      `}} />
      <Header userEmail={auth.email} />
      <div className="ae-page">
        <h1 className="ae-title">Fehlerregister</h1>
        <p className="ae-subtitle">Alle auf Server und Client registrierten Fehler – neueste zuerst.</p>

        <div className="ae-stats">
          <div className="ae-stat">
            <div className="ae-stat-label">Letzte Stunde</div>
            <div className="ae-stat-value">{lastHour}</div>
          </div>
          <div className="ae-stat">
            <div className="ae-stat-label">Letzte 24 h</div>
            <div className="ae-stat-value">{last24h}</div>
          </div>
          <div className="ae-stat">
            <div className="ae-stat-label">Gesamt (max 1000)</div>
            <div className="ae-stat-value">{errors.length}</div>
          </div>
        </div>

        <div className="ae-list">
          {errors.length === 0 && (
            <div className="ae-empty">Keine Fehler registriert – erfreulich. ✨</div>
          )}
          {errors.map(e => (
            <div key={e.id} className="ae-item">
              <div className="ae-item-head">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="ae-message">{e.message}</div>
                  <div className="ae-meta">
                    <code>{e.source}</code> · {e.location} · {new Date(e.timestamp).toLocaleString('de-CH')}
                    {e.userEmail && <> · User: <code>{e.userEmail}</code></>}
                    <span className="ae-flags">
                      {e.notifiedAdmin && <span className="ae-flag">Admin ✓</span>}
                      {e.notifiedUser && <span className="ae-flag">User ✓</span>}
                    </span>
                  </div>
                </div>
                <span className={`ae-sev ae-sev-${e.severity}`}>{e.severity}</span>
              </div>
              {e.stack && (
                <details className="ae-stack">
                  <summary>Stack-Trace</summary>
                  <pre>{e.stack}</pre>
                </details>
              )}
              {Object.keys(e.meta).length > 0 && (
                <details className="ae-stack">
                  <summary>Context</summary>
                  <pre>{JSON.stringify(e.meta, null, 2)}</pre>
                </details>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, fontSize: 13 }}>
          <Link href="/admin" style={{ color: '#0057a8' }}>← Admin</Link>
        </div>
      </div>
    </>
  );
}
