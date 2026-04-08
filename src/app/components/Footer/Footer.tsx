import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#030303] py-12">
      <div className="absolute bottom-0 right-0 -z-10 h-32 w-32 bg-purple-600/10 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} <span className="text-white">Anna Ermilina</span>
          </p>
          <p className="text-slate-500 text-xs mt-1 tracking-wider">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        <div className="flex space-x-6">
          <Link
            href="https://www.linkedin.com/in/aermilina"
            target="_blank"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>

          <Link
            href="https://t.me/aermilina"
            target="_blank"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </Link>

          <Link
            href="mailto:anna.ermilina@gmail.com"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
