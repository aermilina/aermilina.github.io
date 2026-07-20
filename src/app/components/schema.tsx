/**
 * JSON-LD structured data (schema.org) для портфолио.
 * Подключение: <JsonLd /> внутрь <body> в app/layout.tsx (Server Component, "use client" не нужен).
 * Проверка после деплоя: https://validator.schema.org и Google Rich Results Test.
 */

const SITE_URL = 'https://aermilina.github.io';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Anna Ermilina',
  jobTitle: 'Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer with 7+ years in the React ecosystem. Next.js architecture, large-scale platform migrations, Core Web Vitals optimization, LLM-powered features.',
  url: SITE_URL,
  image: `${SITE_URL}/avatar-1.webp`,
  email: 'mailto:anna.ermilina@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Belgrade',
    addressCountry: 'RS',
  },
  sameAs: [
    'https://github.com/aermilina',
    'https://www.linkedin.com/in/aermilina',
    'https://t.me/aermilina',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Server-Side Rendering',
    'Core Web Vitals',
    'Frontend Architecture',
    'LLM API Integration',
  ],
  knowsLanguage: [
    { '@type': 'Language', name: 'Russian' },
    { '@type': 'Language', name: 'English' },
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Moscow Aviation Institute (MAI)',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'OOO "Za Rulem"',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Anna Ermilina — Senior Frontend Engineer',
  description:
    'Portfolio of Anna Ermilina: Next.js platform architecture, migrations, performance, AI-powered features.',
  author: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en',
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
