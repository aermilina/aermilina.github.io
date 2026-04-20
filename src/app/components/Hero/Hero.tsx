'use client';
import React from 'react';
import ButtonLink from '../ButtonLink';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
      id="about"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#2e1065_0%,#030303_75%)] opacity-60" />
      </div>

      <div className="absolute inset-0 z-[1] grid grid-cols-4 lg:grid-cols-12 max-w-7xl mx-auto w-full h-full pointer-events-none opacity-[0.03]">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="border-r border-white/20 h-full"></div>
        ))}
      </div>
      <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[22vw] font-black text-white/[0.012] uppercase tracking-[-0.05em] leading-none">
          ERMILINA
        </h2>
      </div>

      <div className="relative z-[30] max-w-7xl mx-auto w-full px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/5 border border-purple-500/10 mb-8 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-purple-200/70 font-bold font-mono">
              Available for High-End Projects
            </span>
          </div>

          <h1 className="text-[11vw] xs:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 isolate">
            Next-Gen <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent italic font-serif py-1 block">
              Web Apps.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            Senior Frontend Engineer specializing in the{' '}
            <span className="text-white font-semibold italic">React ecosystem</span>. I bridge the
            gap between requirements and UX, delivering production-ready solutions{' '}
            <span className="text-purple-400">30% faster</span> through AI-augmented workflows.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <ButtonLink
              name="Get in touch"
              href="mailto:anna.ermilina@gmail.com"
              className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/20"
            />
            <ButtonLink
              name="Download CV"
              href="/resume_eng.pdf"
              target="_blank"
              download
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
            />
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group w-full max-w-md aspect-[4/5] flex flex-col justify-end items-center overflow-visible">
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/20 blur-[130px] rounded-full opacity-50 pointer-events-none z-0"></div>

            <div className="relative w-full h-full -translate-y-16 md:-translate-y-24 transition-transform duration-1000 group-hover:scale-[1.03] group-hover:-translate-y-20 md:group-hover:-translate-y-28">
              <Image
                className="object-contain pointer-events-none relative z-10"
                src="/avatar-1.webp"
                alt="Anna Ermilina"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent z-20 pointer-events-none" />

            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 z-40 min-w-[260px]">
              <div className="bg-black/50 backdrop-blur-2xl border border-white/10 p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-3 transition-all duration-500 group-hover:border-purple-500/30 group-hover:translate-y-[-5px]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xs shadow-inner">
                    🇷🇸
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm leading-tight mb-0.5 tracking-wide">
                      Belgrade, Serbia
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-tight">
                      Timezone: UTC+2
                    </span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10" />
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2.5 w-2.5 ml-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </div>
                  <span className="text-[11px] font-black text-green-400 uppercase tracking-widest">
                    Available for Remote
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
