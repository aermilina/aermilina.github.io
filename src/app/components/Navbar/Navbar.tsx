import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="group" aria-label="Home
        ">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter text-white group-hover:text-purple-400 transition-colors">
              ANNA ERMILINA
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
              Frontend Developer
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/aermilina"
            target="_blank"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="linkedin"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>

          <Link
  href="https://t.me/aermilina"
  target="_blank"
  className="text-slate-400 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1"
  aria-label="telegram"
>
  <svg 
    className="w-5 h-5 fill-current" 
    viewBox="0 0 24 24" // Это стандартный размер для иконок
  >
    <path d="M11.944 0C5.346 0 0 5.348 0 11.944c0 6.596 5.346 11.944 11.944 11.944 6.598 0 11.944-5.348 11.944-11.944C23.888 5.348 18.542 0 11.944 0zm5.64 8.163l-1.92 9.043c-.143.639-.523.796-1.057.496l-2.92-2.152-1.408 1.355c-.156.156-.286.286-.587.286l.21-2.972 5.411-4.887c.235-.21-.051-.326-.366-.118L7.611 13.52l-2.883-.903c-.627-.196-.64-.627.13-.926l11.266-4.341c.521-.196.977.116.82.713z"/>
  </svg>
</Link>

          <Link
            href="mailto:anna.ermilina@gmail.com"
            className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="email"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}