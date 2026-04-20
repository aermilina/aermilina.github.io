'use client';
import React from 'react';
import Link from 'next/link';
import { FooterIcons } from '@/app/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030303] pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none transform-gpu" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div className="text-center lg:text-left">
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Ready to build <br />
              <span className="text-purple-500 italic font-serif">something High-End?</span>
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
              I’m looking for ambitious challenges as a{' '}
              <span className="text-white font-bold text-slate-200">Senior Frontend Engineer</span>{' '}
              or B2B projects where speed, quality, and modern AI-driven workflows are required.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="https://t.me/aermilina"
              target="_blank"
              className="group flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <FooterIcons.Send />
                </div>
                <div>
                  <span className="block text-white font-black text-sm uppercase tracking-widest leading-none mb-1">
                    Telegram
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight italic">
                    Fastest way to chat
                  </span>
                </div>
              </div>
              <div className="text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <FooterIcons.ArrowUpRight />
              </div>
            </Link>

            <Link
              href="mailto:anna.ermilina@gmail.com"
              className="group flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <FooterIcons.Mail />
                </div>
                <div>
                  <span className="block text-white font-black text-sm uppercase tracking-widest leading-none mb-1">
                    Email
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight italic">
                    For official inquiries
                  </span>
                </div>
              </div>
              <div className="text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <FooterIcons.ArrowUpRight />
              </div>
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-slate-500">
              © {currentYear} Anna Ermilina.
            </p>
            <p className="text-[10px] uppercase tracking-[0.1em] text-white/30 font-bold">
              Hand-coded with{' '}
              <span className="text-purple-500/50 italic font-medium">
                Next.js & AI Intelligence.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/aermilina"
              target="_blank"
              className="text-slate-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FooterIcons.Github />
            </Link>

            <Link
              href="https://www.linkedin.com/in/aermilina"
              target="_blank"
              className="text-slate-500 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FooterIcons.Linkedin />
            </Link>

            <div className="h-4 w-px bg-white/10 hidden md:block" />

            <div className="flex items-center gap-2 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-black text-white uppercase tracking-widest opacity-80">
                System Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
