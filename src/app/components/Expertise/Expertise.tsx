'use client';
import React from 'react';
import { expertises, ExpertiseIcons } from '@/app/constants';

export default function Expertise() {
  return (
    <section className="py-24 md:py-32 bg-[#030303] relative overflow-hidden" id="expertise">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left transition-all duration-700">
          <h2 className="text-xs font-mono text-purple-500 mb-4 uppercase tracking-[0.4em]">
            {`// Proof of Competence`}
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Expertise <span className="text-purple-500 italic">&</span> Toolset
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertises.map((item, idx) => (
            <div key={item.category} className="group relative h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex flex-col transition-all duration-500 group-hover:border-white/10 group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 text-white shadow-xl">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-700 tracking-[0.3em]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mt-1 tracking-tight uppercase">
                    {item.title}
                  </h4>
                </div>

                <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[9px] font-bold text-slate-300 uppercase tracking-widest group-hover:border-purple-500/30 group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-auto flex items-center gap-3 p-3 rounded-2xl border ${item.badge.accent} bg-opacity-5 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center border border-white/5">
                    <ExpertiseIcons.Trophy />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-black uppercase tracking-tighter opacity-70">
                      {item.badge.org} Verified
                    </span>
                    <span className="text-[11px] text-white font-bold leading-none mt-0.5">
                      {item.badge.name}
                    </span>
                  </div>
                  <div className="ml-auto opacity-40">
                    <ExpertiseIcons.Check />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
