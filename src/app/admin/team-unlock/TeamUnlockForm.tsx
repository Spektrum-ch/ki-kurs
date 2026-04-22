'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface CourseOption {
  slug: string;
  title: string;
  price: string;
  level: string;
}

interface EntryResult {
  email: string;
  name: string;
  status: 'created' | 'updated' | 'error' | 'skipped';
  emailSent: boolean;
  error?: string;
}

interface Summary {
  team: string;
  course: string;
  total: number;
  created: number;
  updated: number;
  errors: number;
  emailsSent: number;
}

interface Props {
  courses: CourseOption[];
}

export default function TeamUnlockForm({ courses }: Props) {
  const [courseSlug, setCourseSlug] = useState(courses[0]?.slug || '');
  const [teamName, setTeamName] = useState('');
  const [entries, setEntries] = useState('');
  const [sendEmails, setSendEmails] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ summary: Summary; results: EntryResult[] } | null>(null);

  const lineCount = entries.split(/\r?\n/).filter(l => l.trim()).length;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!courseSlug || !entries.trim()) {
      setError('Kurs und Teilnehmerliste sind Pflichtfelder.');
      return;
    }

    if (!confirm(`${lineCount} Personen werden für «${courses.find(c => c.slug === courseSlug)?.title}» freigeschaltet${sendEmails ? ' und erhalten eine Login-E-Mail' : ''}. Fortfahren?`)) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/admin/team-unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseSlug, teamName, sendEmails, entries }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Fehler beim Freischalten');
      } else {
        setResult(data);
        // Formular zurücksetzen bei Erfolg ohne Fehler
        if (data.summary.errors === 0) {
          setEntries('');
          setTeamName('');
        }
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .tu-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }
        .tu-breadcrumb {
          font-size: 13px;
          color: #6e6e73;
          margin-bottom: 12px;
        }
        .tu-breadcrumb a {
          color: #0057a8;
          text-decoration: none;
        }
        .tu-title {
          font-size: 28px;
          font-weight: 800;
          color: #1d1d1f;
          margin-bottom: 6px;
        }
        .tu-subtitle {
          color: #6e6e73;
          margin-bottom: 32px;
          font-size: 15px;
        }
        .tu-card {
          background: white;
          border: 1px solid #e8e8ed;
          border-radius: 14px;
          padding: 28px;
          margin-bottom: 20px;
        }
        .tu-label {
          display: block;
          font-weight: 600;
          font-size: 13px;
          color: #1d1d1f;
          margin-bottom: 6px;
        }
        .tu-hint {
          font-size: 12px;
          color: #6e6e73;
          margin-top: 4px;
          line-height: 1.5;
        }
        .tu-input, .tu-select, .tu-textarea {
          width: 100%;
          padding: 10px 14px;
          font-size: 14px;
          border: 1px solid #e0e0da;
          border-radius: 8px;
          font-family: inherit;
          background: #fff;
        }
        .tu-input:focus, .tu-select:focus, .tu-textarea:focus {
          outline: none;
          border-color: #0057a8;
        }
        .tu-textarea {
          min-height: 220px;
          font-family: 'SF Mono', 'Monaco', monospace;
          font-size: 13px;
          line-height: 1.5;
          resize: vertical;
        }
        .tu-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .tu-field {
          margin-bottom: 20px;
        }
        .tu-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px 18px;
          background: #f8f9fa;
          border-radius: 10px;
          cursor: pointer;
        }
        .tu-checkbox input {
          margin-top: 2px;
        }
        .tu-checkbox-text {
          font-size: 13px;
          color: #1d1d1f;
          line-height: 1.5;
        }
        .tu-checkbox-text strong {
          display: block;
          margin-bottom: 2px;
        }
        .tu-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }
        .tu-count {
          font-size: 13px;
          color: #6e6e73;
        }
        .tu-count strong { color: #0057a8; font-weight: 700; }
        .tu-btn {
          padding: 11px 24px;
          background: #1d1d1f;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .tu-btn:hover:not(:disabled) {
          background: #0057a8;
        }
        .tu-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .tu-error {
          padding: 14px 18px;
          background: #fee;
          border: 1px solid #fcc;
          border-radius: 8px;
          color: #c00;
          font-size: 14px;
          margin-bottom: 20px;
        }
        .tu-result {
          padding: 20px 24px;
          background: #f0f9f4;
          border: 1px solid #c8e6c9;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .tu-result.has-errors {
          background: #fff8e1;
          border-color: #ffe082;
        }
        .tu-result-title {
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 8px;
          font-size: 15px;
        }
        .tu-result-stats {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 14px;
          font-size: 13px;
        }
        .tu-result-stat strong {
          display: block;
          font-size: 20px;
          color: #0057a8;
          font-weight: 800;
        }
        .tu-result-stat-err strong { color: #c00; }
        .tu-result-list {
          font-size: 12px;
          font-family: 'SF Mono', 'Monaco', monospace;
          max-height: 200px;
          overflow-y: auto;
          background: white;
          border: 1px solid #e8e8ed;
          border-radius: 6px;
          padding: 10px;
        }
        .tu-result-line {
          padding: 3px 0;
        }
        .tu-status-created { color: #00a896; }
        .tu-status-updated { color: #0057a8; }
        .tu-status-error   { color: #c00; }
        .tu-pill {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-right: 6px;
        }
        .tu-pill.created { background: #c8e6c9; color: #00695c; }
        .tu-pill.updated { background: #bbdefb; color: #0057a8; }
        .tu-pill.error   { background: #ffcdd2; color: #c00; }
        .tu-pill.mail-ok { background: #e0e0e0; color: #555; }
      `}} />

      <div className="tu-page">
        <div className="tu-breadcrumb">
          <Link href="/admin">Admin</Link> / Team-Freischaltung
        </div>
        <h1 className="tu-title">Team-Lizenz freischalten</h1>
        <p className="tu-subtitle">
          Liste der Teilnehmer einfügen, Kurs auswählen, Login-E-Mail automatisch versenden.
        </p>

        {error && <div className="tu-error">{error}</div>}

        {result && (
          <div className={`tu-result${result.summary.errors > 0 ? ' has-errors' : ''}`}>
            <div className="tu-result-title">
              {result.summary.errors === 0 ? '✓ Team erfolgreich freigeschaltet' : '⚠ Teilweise freigeschaltet'}
              {result.summary.team && result.summary.team !== '(ohne Name)' ? ` – ${result.summary.team}` : ''}
            </div>
            <div className="tu-result-stats">
              <div className="tu-result-stat"><strong>{result.summary.total}</strong> Einträge</div>
              <div className="tu-result-stat"><strong>{result.summary.created}</strong> neu angelegt</div>
              <div className="tu-result-stat"><strong>{result.summary.updated}</strong> aktualisiert</div>
              <div className="tu-result-stat"><strong>{result.summary.emailsSent}</strong> E-Mails gesendet</div>
              {result.summary.errors > 0 && (
                <div className="tu-result-stat tu-result-stat-err"><strong>{result.summary.errors}</strong> Fehler</div>
              )}
            </div>
            <div className="tu-result-list">
              {result.results.map((r, i) => (
                <div key={i} className={`tu-result-line tu-status-${r.status}`}>
                  <span className={`tu-pill ${r.status}`}>{r.status}</span>
                  {r.emailSent && <span className="tu-pill mail-ok">mail</span>}
                  {r.email} {r.name ? `(${r.name})` : ''}
                  {r.error ? ` – ${r.error}` : ''}
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="tu-card">
          <div className="tu-row">
            <div>
              <label className="tu-label">Kurs *</label>
              <select className="tu-select" value={courseSlug} onChange={e => setCourseSlug(e.target.value)}>
                {courses.map(c => (
                  <option key={c.slug} value={c.slug}>
                    {c.title} ({c.level}, {c.price})
                  </option>
                ))}
              </select>
              <div className="tu-hint">Der Kurs, der für alle Personen freigeschaltet wird.</div>
            </div>
            <div>
              <label className="tu-label">Team / Gemeinde (optional)</label>
              <input
                className="tu-input"
                type="text"
                value={teamName}
                onChange={e => setTeamName(e.target.value)}
                placeholder="z.B. Gemeinde Musterwil"
              />
              <div className="tu-hint">Nur für deine Referenz, wird nicht an die Teilnehmer kommuniziert.</div>
            </div>
          </div>

          <div className="tu-field">
            <label className="tu-label">Teilnehmer-Liste * <span style={{ color: '#6e6e73', fontWeight: 400 }}>(eine Person pro Zeile)</span></label>
            <textarea
              className="tu-textarea"
              value={entries}
              onChange={e => setEntries(e.target.value)}
              placeholder={`anna.mueller@gemeinde-musterwil.ch, Anna Müller\nbruno.huber@gemeinde-musterwil.ch, Bruno Huber\nchristian.schaer@gemeinde-musterwil.ch\nDoris Weber <doris.weber@gemeinde-musterwil.ch>`}
            />
            <div className="tu-hint">
              Erlaubte Formate:<br />
              • <code>email@example.com</code><br />
              • <code>email@example.com, Vorname Nachname</code><br />
              • <code>Vorname Nachname &lt;email@example.com&gt;</code>
            </div>
          </div>

          <div className="tu-field">
            <label className="tu-checkbox">
              <input type="checkbox" checked={sendEmails} onChange={e => setSendEmails(e.target.checked)} />
              <div className="tu-checkbox-text">
                <strong>Login-E-Mail automatisch versenden</strong>
                Jede Person erhält einen Magic-Link zum Einloggen und startet direkt im Kurs. Bei ausgeschalteter Option werden die Accounts nur angelegt – du kannst später manuell einladen.
              </div>
            </label>
          </div>

          <div className="tu-actions">
            <div className="tu-count">
              {lineCount > 0 ? <><strong>{lineCount}</strong> Zeilen erkannt</> : 'Noch keine Einträge'}
            </div>
            <button type="submit" className="tu-btn" disabled={loading || lineCount === 0}>
              {loading ? 'Wird verarbeitet…' : `${lineCount} Personen freischalten`}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
