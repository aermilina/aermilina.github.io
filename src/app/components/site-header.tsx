'use client';

import { motion } from 'framer-motion';

const linkHover = {
  whileHover: { y: -2, opacity: 0.6 },
  whileTap: { scale: 0.92 },
  transition: { type: 'spring', stiffness: 400, damping: 22 },
} as const;

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-widest text-[#111111]">
            [ ANNA ERMILINA ]
          </span>
          <span className="hidden border border-black/10 px-2 py-1 font-mono text-[10px] tracking-widest text-black/60 sm:inline-block">
            [ OPEN TO SENIOR FRONTEND ROLES · REMOTE ]
          </span>
        </div>
        <nav
          aria-label="Social links and contact"
          className="flex items-center gap-6 font-mono text-xs tracking-widest text-[#111111]"
        >
          <motion.a
            href="https://github.com/aermilina"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"
            {...linkHover}
          >
            GH
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aermilina"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"
            {...linkHover}
          >
            IN
          </motion.a>
          <motion.a
            href="/Anna_Ermilina_Resume.docx"
            download
            aria-label="Download resume as PDF"
            className="hidden sm:inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"
            {...linkHover}
          >
            CV
          </motion.a>
          <motion.button
            type="button"
            onClick={() =>
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-block text-[#6366F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"
            {...linkHover}
          >
            [ GET IN TOUCH ]
          </motion.button>
        </nav>
      </div>
    </header>
  );
}
