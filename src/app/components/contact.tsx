'use client';

import { motion } from 'framer-motion';

const routes = [
  {
    label: 'Email',
    handle: 'anna.ermilina@gmail.com',
    href: 'mailto:anna.ermilina@gmail.com',
  },
  {
    label: 'Telegram',
    handle: '@aermilina',
    href: 'https://t.me/aermilina',
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/aermilina',
    href: 'https://www.linkedin.com/in/aermilina',
  },
  {
    label: 'GitHub',
    handle: 'github.com/aermilina',
    href: 'https://github.com/aermilina',
  },
  {
    label: 'Resume',
    handle: 'PDF · updated 2026',
    href: '/Anna_Ermilina_Resume.docx',
    download: true,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  return (
    <section id="contact-section">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="mb-12 flex items-baseline justify-between border-b border-black/10 pb-6">
          <h2 className="text-2xl font-bold tracking-tight text-[#111111]">Contact</h2>
          <span className="font-mono text-xs tracking-widest text-black/60">[ SECTION // 04 ]</span>
        </div>

        <p className="mb-12 max-w-xl text-balance font-mono text-xs leading-relaxed tracking-widest text-black/60">
          [ OPEN TO SENIOR FRONTEND ROLES · REMOTE / RELOCATION-FRIENDLY ]
        </p>

        <ul className="border-t border-black/10">
          {routes.map((route, index) => (
            <motion.li
              key={route.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: EASE, delay: index * 0.06 }}
              className="border-b border-black/10"
            >
              <a
                href={route.href}
                {...(route.download ? { download: true } : { target: '_blank', rel: 'noreferrer' })}
                className="group flex items-baseline justify-between py-6 transition-opacity hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"
              >
                <span className="text-2xl font-bold uppercase tracking-tight text-[#111111] md:text-4xl">
                  {route.label}
                </span>
                <span className="font-mono text-xs tracking-widest text-black/60">
                  {route.handle}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
