/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Verhindert, dass Next.js native Node.js-Pakete versucht zu bündeln
    serverComponentsExternalPackages: ['jsonwebtoken', 'nodemailer', 'uuid'],
  },
  async rewrites() {
    return [
      // Grounding Page: statisches HTML aus public/ unter sauberer URL
      { source: '/fakten', destination: '/fakten.html' },
    ];
  },
};

module.exports = nextConfig;
