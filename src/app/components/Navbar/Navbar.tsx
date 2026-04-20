'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="group flex flex-col items-start" aria-label="Home">
          <span className="text-base md:text-lg font-black tracking-tighter text-white group-hover:text-purple-400 transition-colors">
            ANNA ERMILINA
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-bold -mt-1 leading-none">
            Senior Next.js | React Engineer
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[9px] uppercase tracking-widest font-black text-green-400/80">
              Available for B2B
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-5 border-l border-white/10 pl-4 md:pl-8">
            <div className="relative group/tooltip">
              <Link
                href="https://www.linkedin.com/in/aermilina"
                target="_blank"
                className="text-slate-400 hover:text-white transition-all block hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[9px] font-bold rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-white">
                LinkedIn
              </span>
            </div>

            <div className="relative group/tooltip">
              <Link
                href="https://t.me/aermilina"
                target="_blank"
                className="text-slate-400 hover:text-white transition-all block hover:-translate-y-0.5"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0C5.346 0 0 5.348 0 11.944c0 6.596 5.346 11.944 11.944 11.944 6.598 0 11.944-5.348 11.944-11.944C23.888 5.348 18.542 0 11.944 0zm5.64 8.163l-1.92 9.043c-.143.639-.523.796-1.057.496l-2.92-2.152-1.408 1.355c-.156.156-.286.286-.587.286l.21-2.972 5.411-4.887c.235-.21-.051-.326-.366-.118L7.611 13.52l-2.883-.903c-.627-.196-.64-.627.13-.926l11.266-4.341c.521-.196.977.116.82.713z" />
                </svg>
              </Link>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[9px] font-bold rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-white">
                Telegram
              </span>
            </div>
            <div className="relative group/tooltip">
              <Link
                href="mailto:anna.ermilina@gmail.com"
                className="text-slate-400 hover:text-white transition-all block hover:-translate-y-0.5"
                aria-label="Email"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </Link>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[9px] font-bold rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-white">
                Email
              </span>
            </div>

            <Link
              href="/resume_eng.pdf"
              target="_blank"
              className="ml-2 px-4 py-2 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all active:scale-95 shadow-lg"
            >
              CV
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
