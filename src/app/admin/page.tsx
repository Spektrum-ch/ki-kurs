import { getUserFromCookie, isAdmin } from '@/lib/auth';
import { getAllUsers } from '@/lib/users';
import { getProgress, getProgressPercent } from '@/lib/progress';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';

export default async function AdminPage() {
  const auth = getUserFromCookie();
  if (!auth || !isAdmin(auth.email)) redirect('/');

  const users = getAllUsers();
  const usersWithProgress = users.map(u => ({
    ...u,
    percent: getProgressPercent(u.email),
    lastActivity: getProgress(u.email).lastActivity,
  }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .admin-page { max-width: 1000px; margin: 0 auto; padding: 40px 24px; }
        .admin-title { font-size: 26px; font-weight: 800; color: #1d1d1f; margin-bottom: 6px; }
        .admin-subtitle { font-size: 15px; color: #6e6e73; margin-bottom: 36px; }
        .admin-stats {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 16px;
          margin-bottom: 40px;
        }
        .admin-stat {
          background: white;
          border-radius: 14px;
          padding: 20px;
          border: 1px solid #e8e8ed;
          text-align: center;
        }
        .admin-stat-n { font-size: 32px; font-weight: 800; color: #0057a8; }
        .admin-stat-l { font-size: 13px; color: #6e6e73; margin-top: 4px; }
        .admin-table { width: 100%; border-collapse: collapse; background: white; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .admin-table th { background: #f0f0f5; padding: 12px 16px; text-align: left; font-size: 13px; font-weight: 700; color: #6e6e73; text-transform: uppercase; letter-spacing: 0.04em; }
        .admin-table td { padding: 12px 16px; font-size: 14px; color: #1d1d1f; border-top: 1px solid #f0f0f5; }
        .admin-table tr:hover td { background: #f8f9fa; }
        .admin-progress-bar { width: 100px; height: 6px; background: #e8e8ed; border-radius: 100px; overflow: hidden; display: inline-block; }
        .admin-progress-fill { height: 100%; background: linear-gradient(90deg, #0057a8, #00a896); border-radius: 100px; }
      `}} />

      <Header userEmail={auth.email} />
      <div className="admin-page">
        <h1 className="admin-title">Admin Dashboard</h1>
        <p className="admin-subtitle">Kurs «KI für die Planungswelt» – Nutzerübersicht</p>

        <div style={{ marginBottom: 28, padding: 18, background: 'linear-gradient(135deg, #1d1d1f 0%, #0d3d26 100%)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div>
            <div style={{ fontWeight: 700, color: 'white', fontSize: 15, marginBottom: 3 }}>Team-Lizenz freischalten</div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>Liste einer Gemeinde/Firma einfügen und mehrere Personen in einem Rutsch freischalten.</div>
          </div>
          <Link href="/admin/team-unlock" style={{ padding: '10px 18px', background: '#00C853', color: '#1d1d1f', borderRadius: 50, fontWeight: 700, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            → Freischalten
          </Link>
        </div>

        <div className="admin-stats">
          <div className="admin-stat">
            <div className="admin-stat-n">{users.length}</div>
            <div className="admin-stat-l">Registrierte Nutzer</div>
          </div>
          <div className="admin-stat">
            <div className="admin-stat-n">{usersWithProgress.filter(u => u.percent === 100).length}</div>
            <div className="admin-stat-l">Kurs abgeschlossen</div>
          </div>
          <div className="admin-stat">
            <div className="admin-stat-n">{usersWithProgress.filter(u => u.percent > 0 && u.percent < 100).length}</div>
            <div className="admin-stat-l">In Bearbeitung</div>
          </div>
          <div className="admin-stat">
            <div className="admin-stat-n">
              {usersWithProgress.length > 0
                ? Math.round(usersWithProgress.reduce((s, u) => s + u.percent, 0) / usersWithProgress.length)
                : 0}%
            </div>
            <div className="admin-stat-l">Ø Fortschritt</div>
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Registriert</th>
              <th>Fortschritt</th>
              <th>Letzte Aktivität</th>
            </tr>
          </thead>
          <tbody>
            {usersWithProgress
              .sort((a, b) => b.percent - a.percent)
              .map(u => (
                <tr key={u.email}>
                  <td><strong>{u.name}</strong></td>
                  <td>{u.email}</td>
                  <td>{new Date(u.createdAt).toLocaleDateString('de-CH')}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="admin-progress-bar">
                        <div className="admin-progress-fill" style={{ width: `${u.percent}%` }} />
                      </div>
                      <span style={{ fontSize: 13, color: u.percent === 100 ? '#00a896' : '#6e6e73', fontWeight: u.percent === 100 ? 700 : 400 }}>
                        {u.percent}%{u.percent === 100 ? ' ✓' : ''}
                      </span>
                    </div>
                  </td>
                  <td style={{ color: '#6e6e73', fontSize: 13 }}>
                    {new Date(u.lastActivity).toLocaleDateString('de-CH')}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
