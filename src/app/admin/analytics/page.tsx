import { getUserFromCookie, isAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { readEvents, getCourseFunnels, getLessonDropoff } from '@/lib/analytics';
import Header from '@/components/Header';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const COURSE_LABELS: Record<string, string> = {
  'ki-planungswelt':        'KI für die Planungswelt',
  'ki-einsteiger':          'KI-Grundkurs: Einsteiger',
  'ki-bueroalltag':         'KI im Büroalltag',
  'ki-interessenabwaegung': 'Interessenabwägung mit KI',
  'ki-gemeinden':           'KI für Gemeinden',
  'ki-agentic':             'Die Agentic Company',
  'ki-strategie-gemeinden': 'KI-Strategie für Gemeinden',
  'ki-uvp':                 'UVP mit KI',
};

export default async function AnalyticsPage() {
  const auth = getUserFromCookie();
  if (!auth || !isAdmin(auth.email)) redirect('/');

  const events = readEvents();
  const funnels = getCourseFunnels(events);

  const totalStarters  = funnels.reduce((s, f) => s + f.started, 0);
  const totalCompleters = funnels.reduce((s, f) => s + f.completed, 0);
  const totalEvents    = events.length;

  // Letzte 10 Events (neueste zuerst)
  const recentEvents = [...events].reverse().slice(0, 10);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .an-page { max-width: 1100px; margin: 0 auto; padding: 40px 24px 80px; }
        .an-back { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #6e6e73; text-decoration: none; margin-bottom: 28px; }
        .an-back:hover { color: #1d1d1f; }
        .an-title { font-size: 28px; font-weight: 800; color: #1d1d1f; margin-bottom: 4px; }
        .an-sub { font-size: 14px; color: #6e6e73; margin-bottom: 36px; }

        /* KPI-Karten */
        .an-kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 48px; }
        .an-kpi { background: white; border: 1px solid #e8e8ed; border-radius: 14px; padding: 24px; text-align: center; }
        .an-kpi-n { font-size: 2.4rem; font-weight: 800; color: #0057a8; letter-spacing: -1px; }
        .an-kpi-l { font-size: 13px; color: #6e6e73; margin-top: 4px; }

        /* Sektions-Titel */
        .an-h2 { font-size: 17px; font-weight: 700; color: #1d1d1f; margin: 0 0 16px; padding-bottom: 10px; border-bottom: 1px solid #e8e8ed; }

        /* Funnel-Tabelle */
        .an-table { width: 100%; border-collapse: collapse; background: white; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05); margin-bottom: 48px; }
        .an-table th { background: #f5f5f7; padding: 11px 16px; text-align: left; font-size: 12px; font-weight: 700; color: #6e6e73; text-transform: uppercase; letter-spacing: 0.05em; }
        .an-table td { padding: 13px 16px; font-size: 14px; color: #1d1d1f; border-top: 1px solid #f0f0f5; vertical-align: middle; }
        .an-table tr:hover td { background: #fafafa; }

        /* Balken */
        .an-bar-wrap { display: flex; align-items: center; gap: 10px; }
        .an-bar { height: 8px; border-radius: 4px; background: #e8e8ed; flex: 1; overflow: hidden; }
        .an-bar-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, #0057a8, #00a896); transition: width 0.3s; }
        .an-bar-fill.danger { background: linear-gradient(90deg, #e65c00, #f9d423); }
        .an-bar-pct { font-size: 12px; font-weight: 700; color: #1d1d1f; min-width: 36px; text-align: right; }

        /* Badge */
        .an-badge { display: inline-block; padding: 3px 9px; border-radius: 50px; font-size: 11px; font-weight: 700; }
        .an-badge.green { background: #e8f5e9; color: #2e7d32; }
        .an-badge.orange { background: #fff3e0; color: #e65c00; }
        .an-badge.blue { background: #e3f2fd; color: #1565c0; }

        /* Drop-off Sektionen */
        .an-dropoff-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 48px; }
        .an-dropoff-card { background: white; border: 1px solid #e8e8ed; border-radius: 14px; padding: 24px; }
        .an-dropoff-title { font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 16px; }
        .an-dropoff-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .an-dropoff-label { font-size: 11px; color: #6e6e73; min-width: 120px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .an-dropoff-num { font-size: 12px; font-weight: 600; color: #1d1d1f; min-width: 28px; text-align: right; }

        /* Letzte Events */
        .an-events { background: white; border: 1px solid #e8e8ed; border-radius: 14px; overflow: hidden; }
        .an-event-row { display: grid; grid-template-columns: 160px 140px 1fr 180px; gap: 12px; padding: 11px 16px; border-top: 1px solid #f0f0f5; font-size: 13px; align-items: center; }
        .an-event-row:first-child { border-top: none; background: #f5f5f7; font-size: 11px; font-weight: 700; color: #6e6e73; text-transform: uppercase; letter-spacing: 0.05em; padding: 10px 16px; }
        .an-event-ts { color: #6e6e73; font-size: 12px; }
        .an-event-email { color: #1d1d1f; font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .an-empty { text-align: center; padding: 48px; color: #a0a0a8; font-size: 14px; }

        @media (max-width: 800px) {
          .an-kpis { grid-template-columns: 1fr 1fr; }
          .an-dropoff-grid { grid-template-columns: 1fr; }
          .an-event-row { grid-template-columns: 1fr 1fr; }
        }
      `}} />

      <Header userEmail={auth.email} />

      <div className="an-page">
        <Link href="/admin" className="an-back">← Admin</Link>
        <h1 className="an-title">Kurs-Analytics</h1>
        <p className="an-sub">Wer hat welchen Kurs gestartet, abgebrochen oder abgeschlossen – und wo hören die meisten auf.</p>

        {events.length === 0 ? (
          <div className="an-empty">
            <div style={{ fontSize: 40, marginBottom: 12 }}>📊</div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Noch keine Events</div>
            <div>Events werden automatisch erfasst, sobald Nutzer Lektionen abschliessen.</div>
          </div>
        ) : (
          <>
            {/* KPIs */}
            <div className="an-kpis">
              <div className="an-kpi">
                <div className="an-kpi-n">{totalEvents}</div>
                <div className="an-kpi-l">Events total</div>
              </div>
              <div className="an-kpi">
                <div className="an-kpi-n">{totalStarters}</div>
                <div className="an-kpi-l">Kurs-Starts (eindeutig)</div>
              </div>
              <div className="an-kpi">
                <div className="an-kpi-n">{totalCompleters}</div>
                <div className="an-kpi-l">Kurs-Abschlüsse</div>
              </div>
            </div>

            {/* Funnel pro Kurs */}
            <h2 className="an-h2">Funnel pro Kurs</h2>
            <table className="an-table">
              <thead>
                <tr>
                  <th>Kurs</th>
                  <th>Gestartet</th>
                  <th>Abgeschlossen</th>
                  <th>Abschlussrate</th>
                  <th>Abbruchrate</th>
                </tr>
              </thead>
              <tbody>
                {funnels.length === 0 ? (
                  <tr><td colSpan={5} style={{ textAlign: 'center', color: '#a0a0a8', padding: 24 }}>Noch keine Daten</td></tr>
                ) : funnels.sort((a, b) => b.started - a.started).map(f => {
                  const completionRate = f.started > 0 ? Math.round((f.completed / f.started) * 100) : 0;
                  return (
                    <tr key={f.courseSlug}>
                      <td style={{ fontWeight: 600 }}>{COURSE_LABELS[f.courseSlug] ?? f.courseSlug}</td>
                      <td>{f.started}</td>
                      <td>{f.completed}</td>
                      <td>
                        <div className="an-bar-wrap">
                          <div className="an-bar">
                            <div className="an-bar-fill" style={{ width: `${completionRate}%` }} />
                          </div>
                          <span className="an-bar-pct">{completionRate}%</span>
                        </div>
                      </td>
                      <td>
                        <div className="an-bar-wrap">
                          <div className="an-bar">
                            <div className="an-bar-fill danger" style={{ width: `${f.dropoutRate}%` }} />
                          </div>
                          <span className="an-bar-pct">{f.dropoutRate}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Drop-off pro Lektion */}
            <h2 className="an-h2">Drop-off nach Lektion</h2>
            <p style={{ fontSize: 13, color: '#6e6e73', marginTop: -10, marginBottom: 20 }}>
              Wie viel % der Kurs-Starter haben jede Lektion abgeschlossen. Starker Abfall = Verbesserungspotenzial.
            </p>
            <div className="an-dropoff-grid">
              {funnels.filter(f => f.started > 0).map(f => {
                const dropoff = getLessonDropoff(events, f.courseSlug);
                return (
                  <div key={f.courseSlug} className="an-dropoff-card">
                    <div className="an-dropoff-title">{COURSE_LABELS[f.courseSlug] ?? f.courseSlug}</div>
                    {dropoff.length === 0 ? (
                      <div style={{ fontSize: 13, color: '#a0a0a8' }}>Keine Lektionsdaten</div>
                    ) : dropoff.map(d => (
                      <div key={d.lessonId} className="an-dropoff-row">
                        <span className="an-dropoff-label" title={d.lessonId}>L{d.lessonNumber} {d.lessonId.split('/')[1] ?? ''}</span>
                        <div className="an-bar" style={{ flex: 1 }}>
                          <div
                            className={`an-bar-fill${d.reachedPct < 40 ? ' danger' : ''}`}
                            style={{ width: `${d.reachedPct}%` }}
                          />
                        </div>
                        <span className="an-dropoff-num">{d.reachedPct}%</span>
                        <span style={{ fontSize: 11, color: '#a0a0a8', minWidth: 28 }}>{d.reached}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Letzte Events */}
            <h2 className="an-h2">Letzte Aktivität</h2>
            <div className="an-events">
              <div className="an-event-row">
                <span>Zeitpunkt</span>
                <span>Event</span>
                <span>Kurs</span>
                <span>Nutzer</span>
              </div>
              {recentEvents.map((ev, i) => (
                <div key={i} className="an-event-row">
                  <span className="an-event-ts">{new Date(ev.ts).toLocaleString('de-CH', { dateStyle: 'short', timeStyle: 'short' })}</span>
                  <span>
                    {ev.event === 'course_started'   && <span className="an-badge blue">Gestartet</span>}
                    {ev.event === 'lesson_completed' && <span className="an-badge green">Lektion ✓</span>}
                    {ev.event === 'course_completed' && <span className="an-badge orange">Abgeschlossen 🎉</span>}
                  </span>
                  <span style={{ fontSize: 13 }}>
                    {COURSE_LABELS[ev.courseSlug] ?? ev.courseSlug}
                    {ev.lessonNumber && <span style={{ color: '#a0a0a8' }}> · L{ev.lessonNumber}</span>}
                  </span>
                  <span className="an-event-email">{ev.email}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
