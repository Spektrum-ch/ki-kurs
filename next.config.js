/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Verhindert, dass Next.js native Node.js-Pakete versucht zu bündeln
    serverComponentsExternalPackages: ['jsonwebtoken', 'nodemailer', 'uuid'],
  },
  async redirects() {
    return [
      // Startseite ist /kurse. Das redirect() in src/app/page.tsx wurde statisch
      // vorgerendert und lieferte 307 ohne Location-Header (tote Startseite für Crawler).
      { source: '/', destination: '/kurse', permanent: true },
    ];
  },
  async rewrites() {
    return [
      // Grounding Page: statisches HTML aus public/ unter sauberer URL
      { source: '/fakten', destination: '/fakten.html' },
    ];
  },
};

module.exports = nextConfig;
