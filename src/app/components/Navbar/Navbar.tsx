'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Логотип / Имя */}
        <Link href="/" className="group">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter text-white group-hover:text-purple-400 transition-colors">
              ANNA ERMILINA
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
              Frontend Developer
            </span>
          </div>
        </Link>

        {/* Соцсети */}
        <div className="flex items-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/aermilina"
            target="_blank"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </Link>

          <Link
            href="https://t.me/aermilina"
            target="_blank"
            className="text-slate-400 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faTelegram} size="lg" />
          </Link>

          <Link
            href="mailto:anna.ermilina@gmail.com"
            className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </Link>
        </div>
      </div>
    </header>
  );
}
