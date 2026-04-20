'use client';
import React from 'react';
import { credentials, CertIcons } from '@/app/constants';

export default function Credentials() {
  return (
    <section className="py-24 bg-[#030303] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-[0.4em] mb-4">
            {`// Professional Recognition`}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Credentials <span className="text-purple-500 italic">&</span> Awards
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full transition-transform duration-500 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div
                className={`relative p-8 md:p-10 h-full rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl transition-all duration-500 ${cert.borderColor} group-hover:bg-white/[0.04]`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${cert.iconColor} bg-current animate-pulse`}
                      />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                        Issued by {cert.org}
                      </span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none uppercase">
                      {cert.title}
                    </h4>
                  </div>
                  <div
                    className={`${cert.iconColor} opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12`}
                  >
                    <CertIcons.Award />
                  </div>
                </div>

                <div className="mb-6 text-left">
                  <span
                    className={`inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest ${cert.iconColor}`}
                  >
                    {cert.subtitle}
                  </span>
                </div>

                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium italic text-left">
                  &ldquo;{cert.description}&rdquo;
                </p>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={cert.iconColor}>
                      <CertIcons.Check />
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">
                      Verified Credentials
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600 group-hover:text-white transition-all duration-300">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                      View Certificate
                    </span>
                    <CertIcons.External />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
