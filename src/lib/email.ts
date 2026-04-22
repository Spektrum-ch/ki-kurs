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
