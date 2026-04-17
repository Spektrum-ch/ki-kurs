/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Verhindert, dass Next.js native Node.js-Pakete versucht zu bündeln
    serverComponentsExternalPackages: ['jsonwebtoken', 'nodemailer', 'uuid'],
  },
};

module.exports = nextConfig;
