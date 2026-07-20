"use client"

import { motion } from "framer-motion"

const linkHover = {
  whileHover: { y: -2, opacity: 0.6 },
  whileTap: { scale: 0.92 },
  transition: { type: "spring", stiffness: 400, damping: 22 },
} as const

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex min-w-0 items-center gap-4">
          <span className="truncate whitespace-nowrap font-mono text-[11px] tracking-widest text-[#111111] sm:text-xs">
            [ ANNA ERMILINA ]
          </span>
          <span className="hidden border border-black/10 px-2 py-1 font-mono text-[10px] tracking-widest text-black/60 md:inline-block">
            [ OPEN TO SENIOR FRONTEND ROLES · REMOTE ]
          </span>
        </div>
        <nav
          aria-label="Social links and contact"
          className="flex shrink-0 items-center gap-3 whitespace-nowrap font-mono text-[11px] tracking-widest text-[#111111] sm:gap-6 sm:text-xs"
        >
          <motion.a
            href="https://github.com/aermilina"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className={`inline-block ${focusRing}`}
            {...linkHover}
          >
            GH
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aermilina"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className={`inline-block ${focusRing}`}
            {...linkHover}
          >
            IN
          </motion.a>
          <motion.a
            href="/Anna_Ermilina_Resume.pdf"
            download
            aria-label="Download resume as PDF"
            className={`hidden sm:inline-block ${focusRing}`}
            {...linkHover}
          >
            CV
          </motion.a>
          <motion.button
            type="button"
            onClick={() =>
              document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`inline-block text-[#6366F1] ${focusRing}`}
            {...linkHover}
          >
            <span className="sm:hidden">[ CONTACT ]</span>
            <span className="hidden sm:inline">[ GET IN TOUCH ]</span>
          </motion.button>
        </nav>
      </div>
    </header>
  )
}