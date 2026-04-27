import nodemailer from 'nodemailer';

const FROM = process.env.EMAIL_FROM || 'KI-Kurs Planungswelt <kurs@spekt.ch>';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3003';

// Dev-Mode: SMTP nicht konfiguriert wenn Platzhalter-Werte
function isSmtpConfigured(): boolean {
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';
  return user !== '' && user !== 'deine@email.ch' && pass !== '' && pass !== 'dein-brevo-smtp-passwort';
}

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.brevo.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  });
}

/** Magic-Link E-Mail senden */
export async function sendMagicLink(email: string, token: string, name: string, redirect = '/kurse'): Promise<void> {
  const link = `${BASE_URL}/api/auth/magic-link?token=${token}&redirect=${encodeURIComponent(redirect)}`;

  // Dev-Mode: Link in Konsole ausgeben statt senden
  if (!isSmtpConfigured()) {
    const devLink = `http://localhost:3004/api/auth/magic-link?token=${token}`;
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🔗 DEV Magic-Link für:', email);
    console.log(devLink);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    return;
  }
  const transporter = getTransporter();

  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: 'Dein Login-Link – KI für die Planungswelt',
    html: `
      <div style="font-family: Inter, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
        <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,87,168,0.08);">
          <h1 style="font-size: 22px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px;">
            Hallo ${name} 👋
          </h1>
          <p style="color: #6e6e73; margin-bottom: 32px; font-size: 15px;">
            Hier ist dein persönlicher Login-Link für den Kurs «KI für die Planungswelt».
          </p>
          <a href="${link}" style="
            display: inline-block;
            background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
            color: white;
            padding: 14px 32px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 15px;
            text-decoration: none;
            margin-bottom: 24px;
          ">
            Jetzt einloggen →
          </a>
          <p style="color: #6e6e73; font-size: 13px; margin-top: 24px;">
            Der Link ist 24 Stunden gültig. Falls du dich nicht einloggen wolltest, ignoriere diese E-Mail.
          </p>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 24px;">
          SPEKTRUM Partner GmbH · kurs.spekt.ch
        </p>
      </div>
    `,
  });
}

/** Willkommens-E-Mail nach Registrierung */
export async function sendWelcomeEmail(email: string, name: string): Promise<void> {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: 'Willkommen beim Kurs «KI für die Planungswelt» 🎉',
    html: `
      <div style="font-family: Inter, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
        <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,87,168,0.08);">
          <h1 style="font-size: 22px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px;">
            Willkommen, ${name}! 🎉
          </h1>
          <p style="color: #6e6e73; margin-bottom: 16px; font-size: 15px;">
            Du hast dich erfolgreich für den kostenlosen Kurs <strong>«KI für die Planungswelt»</strong> registriert.
          </p>
          <p style="color: #6e6e73; margin-bottom: 32px; font-size: 15px;">
            In 5 Modulen lernst du, wie du KI konkret in deinem Planungsalltag einsetzt – praxisnah, rechtssicher und sofort anwendbar.
          </p>
          <a href="${BASE_URL}/kurs" style="
            display: inline-block;
            background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
            color: white;
            padding: 14px 32px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 15px;
            text-decoration: none;
          ">
            Kurs starten →
          </a>
          <div style="margin-top: 32px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
            <p style="font-size: 13px; color: #6e6e73; margin-bottom: 8px;">Was dich erwartet:</p>
            <ul style="font-size: 14px; color: #1d1d1f; padding-left: 20px; line-height: 1.8;">
              <li>5 Module, ~20 Lektionen</li>
              <li>Videos, Quizze & interaktive Fallstudien</li>
              <li>Zertifikat nach Abschluss</li>
              <li>100% kostenlos</li>
            </ul>
          </div>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 24px;">
          SPEKTRUM Partner GmbH · kurs.spekt.ch<br>
          <a href="${BASE_URL}/abmelden?email=${encodeURIComponent(email)}" style="color: #999;">Abmelden</a>
        </p>
      </div>
    `,
  });
}

/** Admin-Alert bei Systemfehler */
export interface ErrorAlertPayload {
  id: string;
  message: string;
  stack: string | null;
  source: string;
  location: string;
  userEmail?: string;
  meta?: Record<string, unknown>;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

export async function sendErrorAlert(adminEmail: string, p: ErrorAlertPayload): Promise<void> {
  if (!isSmtpConfigured()) {
    console.log('[DEV] Error-Alert (nicht gesendet):', p.id, p.location, p.message);
    return;
  }
  const transporter = getTransporter();
  const metaHtml = Object.entries(p.meta || {})
    .map(([k, v]) => `<li><strong>${k}:</strong> <code>${String(v).slice(0, 300)}</code></li>`)
    .join('');

  await transporter.sendMail({
    from: FROM,
    to: adminEmail,
    subject: `[KI-Kurs ${p.severity.toUpperCase()}] Fehler in ${p.source}/${p.location}`,
    html: `
      <div style="font-family: 'SF Mono', Menlo, Consolas, monospace; max-width: 720px; margin: 0 auto; padding: 24px; background: #f8f9fa;">
        <div style="background: white; border-radius: 10px; padding: 24px; border-left: 4px solid ${p.severity === 'high' ? '#d32f2f' : p.severity === 'medium' ? '#ed6c02' : '#0057a8'};">
          <div style="font-size: 11px; color: #6e6e73; margin-bottom: 6px; letter-spacing: 1px; text-transform: uppercase;">
            ${p.severity} · ${p.source} · ID ${p.id}
          </div>
          <h1 style="font-size: 17px; font-weight: 700; color: #1d1d1f; margin: 0 0 12px; font-family: Inter, sans-serif;">
            ${p.message}
          </h1>
          <div style="font-size: 13px; color: #6e6e73; margin-bottom: 16px;">
            <strong>Location:</strong> ${p.location}<br>
            <strong>Timestamp:</strong> ${p.timestamp}<br>
            ${p.userEmail ? `<strong>User:</strong> ${p.userEmail}<br>` : ''}
          </div>
          ${metaHtml ? `<div style="font-size: 12px; margin-bottom: 16px;"><strong style="font-family: Inter, sans-serif;">Context:</strong><ul style="margin: 6px 0; padding-left: 18px; color: #1d1d1f;">${metaHtml}</ul></div>` : ''}
          ${p.stack ? `<pre style="background: #1d1d1f; color: #e8e8ed; padding: 14px; border-radius: 6px; overflow-x: auto; font-size: 11px; line-height: 1.5; margin: 12px 0 0;">${p.stack.slice(0, 4000)}</pre>` : ''}
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e8e8ed; font-size: 12px; font-family: Inter, sans-serif;">
            <a href="${BASE_URL}/admin/errors" style="color: #0057a8; text-decoration: none;">→ Alle Fehler im Admin-Panel</a>
          </div>
        </div>
      </div>
    `,
  });
}

/** Nutzer-Info bei blockierendem Fehler */
export async function sendUserIncidentEmail(userEmail: string): Promise<void> {
  if (!isSmtpConfigured()) {
    console.log('[DEV] User-Incident (nicht gesendet):', userEmail);
    return;
  }
  const transporter = getTransporter();
  await transporter.sendMail({
    from: FROM,
    to: userEmail,
    subject: 'Wir haben einen Fehler registriert – KI-Kurse Planungswelt',
    html: `
      <div style="font-family: Inter, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
        <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,87,168,0.08);">
          <h1 style="font-size: 20px; font-weight: 700; color: #1d1d1f; margin-bottom: 12px;">
            Wir haben einen Fehler registriert
          </h1>
          <p style="color: #1d1d1f; font-size: 15px; line-height: 1.6; margin-bottom: 16px;">
            Die Entwickler sind benachrichtigt, wir melden uns innerhalb von 24 h bei Ihnen.
          </p>
          <p style="color: #6e6e73; font-size: 14px; line-height: 1.6; margin-bottom: 0;">
            Falls Sie etwas gekauft haben: Ihre Bestellung ist sicher – wir stellen sicher,
            dass Sie Ihren Zugang vollständig erhalten.
          </p>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 24px;">
          SPEKTRUM Partner GmbH · kurse.spekt.ch · andreas.rupf@spekt.ch
        </p>
      </div>
    `,
  });
}

/** Zertifikats-E-Mail */
export async function sendCertificateEmail(email: string, name: string): Promise<void> {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: '🎓 Du hast den Kurs abgeschlossen!',
    html: `
      <div style="font-family: Inter, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
        <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,87,168,0.08);">
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="font-size: 48px;">🎓</span>
          </div>
          <h1 style="font-size: 22px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px; text-align: center;">
            Herzlichen Glückwunsch, ${name}!
          </h1>
          <p style="color: #6e6e73; margin-bottom: 32px; font-size: 15px; text-align: center;">
            Du hast den Kurs «KI für die Planungswelt» erfolgreich abgeschlossen.
          </p>
          <a href="${BASE_URL}/zertifikat" style="
            display: block;
            background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
            color: white;
            padding: 14px 32px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 15px;
            text-decoration: none;
            text-align: center;
          ">
            Zertifikat herunterladen →
          </a>
        </div>
      </div>
    `,
  });
}
