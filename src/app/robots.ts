import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/kurse', '/kurs', '/kurs-allgemein', '/kurs-buero', '/kurs-gemeinden', '/kurs-agentic', '/kurs-strategie', '/kurs-interessenabwaegung', '/register', '/login'],
        disallow: ['/api/', '/admin', '/zertifikat', '/kurs/*/'],
      },
    ],
    sitemap: 'https://kurse.spekt.ch/sitemap.xml',
    host: 'https://kurse.spekt.ch',
  };
}
