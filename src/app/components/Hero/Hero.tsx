import React from 'react';
import ButtonLink from '../ButtonLink';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
      id="about"
    >
      <div className="absolute inset-0 z-[0] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b0764_0%,#030303_70%)] opacity-70" />
      </div>

      <div className="absolute inset-0 z-[5] flex items-center justify-center whitespace-nowrap pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black text-white/[0.02] uppercase tracking-tighter leading-none">
          Anna Ermilina
        </h1>
      </div>

      <div className="relative z-[10] max-w-7xl mx-auto w-full px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300 font-bold">
              Frontend Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 relative z-[20]">
            Building the <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent italic block">
              future of web
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            I am <span className="text-white font-semibold italic">Anna Ermilina</span>. A Senior
            Frontend Engineer focused on <span className="text-white">React & Next.js</span>. I
            build high-end applications with a hybrid approach: coding from scratch or
            <span className="text-purple-400"> harnessing AI as a catalyst</span>, while always
            using my expertise to <span className="text-white">clean up the noise</span> and ensure
            expert-level results.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <ButtonLink
              name="My CV"
              href="/resume_eng.pdf"
              target="_blank"
              download
              className="px-10 py-4 bg-white text-black rounded-2xl font-black hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(168,85,247,0.2)]"
            />
          </div>
        </div>

        <div className="lg:col-span-7 relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group w-full max-w-lg aspect-[4/5] flex items-end justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/20 blur-[140px] rounded-full opacity-50 pointer-events-none"></div>

            <Image
              className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-[1.03] group-hover:-translate-y-1 pointer-events-none relative z-[15]"
              src="/avatar.webp"
              alt="Anna Ermilina"
              fill
              priority
              sizes="(max-width: 768px) 382px, 512px"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-[16] pointer-events-none" />

            <div className="absolute bottom-10 left-6 md:left-12 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl shadow-2xl z-[30] transition-transform duration-500 group-hover:scale-110">
              <p className="text-xs font-bold text-purple-200 tracking-wide flex items-center gap-2">
                <span className="text-sm">📍</span> Belgrade, RS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-[1] grid grid-cols-4 lg:grid-cols-12 max-w-7xl mx-auto w-full h-full pointer-events-none opacity-[0.05]">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="border-r border-white/20 h-full"></div>
        ))}
      </div>
    </section>
  );
}
