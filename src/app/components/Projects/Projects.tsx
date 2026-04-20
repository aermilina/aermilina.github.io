'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { works } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-20 md:py-32 bg-[#030303] relative" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-24 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-xs font-mono text-purple-500 mb-4 uppercase tracking-[0.3em]">
              {`// Selected Works`}
            </h2>
            <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Case <span className="text-purple-500 italic font-serif">Studies</span>
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {works.map((work, idx) => (
            <motion.div
              key={work.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '-50px',
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="sticky top-20 md:top-28 w-full transform-gpu"
              style={{ zIndex: idx + 1 }}
            >
              <div
                className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#0A0A0A] border border-white/5 
                            backdrop-blur-xl md:backdrop-blur-3xl 
                            shadow-xl md:shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.8)] 
                            group transition-all duration-500 hover:border-purple-500/20"
              >
                <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden order-1 lg:order-2">
                    <Image
                      src={work.image}
                      alt={work.name}
                      fill
                      loading={idx < 2 ? 'eager' : 'lazy'} // Умная загрузка
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 right-4 lg:hidden">
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-[9px] uppercase font-bold tracking-widest text-purple-300">
                        {work.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:hidden" />
                  </div>
                  <div className="p-7 md:p-16 order-2 lg:order-1 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-mono text-purple-500 uppercase tracking-widest leading-none mb-2">
                          0{idx + 1}
                        </span>
                        <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight">
                          {work.role}
                        </span>
                      </div>
                      <span className="hidden lg:block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase font-bold tracking-[0.2em] text-slate-400 group-hover:text-purple-300 transition-colors">
                        {work.category}
                      </span>
                    </div>

                    <h4 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9] text-left">
                      {work.name}
                    </h4>

                    <p className="text-slate-400 text-sm md:text-base mb-8 line-clamp-3 md:line-clamp-4 leading-relaxed font-medium text-left">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {work.technology?.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1.5 text-[8px] md:text-[9px] uppercase tracking-widest font-bold bg-white/[0.03] border border-white/5 text-slate-400 rounded-lg group-hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-auto">
                      {work.siteLink && (
                        <Link
                          href={work.siteLink}
                          target="_blank"
                          className="px-8 py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all hover:bg-purple-600 hover:text-white active:scale-95 shadow-xl"
                        >
                          Live Case
                        </Link>
                      )}

                      {work.code && (
                        <Link
                          href={work.code}
                          target="_blank"
                          className="flex items-center gap-2 text-white/40 hover:text-purple-400 font-black text-[10px] uppercase tracking-widest transition-all group/link"
                        >
                          Code
                          <span className="hidden md:block w-4 h-[1px] bg-white/10 group-hover/link:bg-purple-400 transition-all" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
