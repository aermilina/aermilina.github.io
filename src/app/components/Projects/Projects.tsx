'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { works } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-20 md:py-32 bg-[#030303] relative" id="projects">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 md:mb-24 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-purple-500 mb-4 uppercase tracking-[0.3em]">
              {`// My Portfolio`}
            </h2>
            <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Selected <span className="text-purple-500">Works</span>
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 md:gap-32">
          {works.map((work, idx) => (
            <motion.div
              key={work.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="sticky top-16 md:top-24 w-full"
              style={{ zIndex: idx + 1 }}
            >
              <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-slate-900/90 border border-white/5 backdrop-blur-3xl shadow-2xl group transition-all duration-500 hover:border-purple-500/30">
                <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
                  <div className="relative aspect-video lg:aspect-square overflow-hidden order-1 lg:order-2">
                    <Image
                      src={work.image}
                      alt={work.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden" />
                  </div>

                  <div className="p-8 md:p-14 order-2 lg:order-1 flex flex-col justify-center">
                    <span className="text-[10px] md:text-xs font-mono text-purple-400 mb-4 block tracking-widest uppercase opacity-60">
                      0{idx + 1} &mdash; Project
                    </span>
                    <h4 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {work.name}
                    </h4>

                    <p className="text-slate-400 text-sm md:text-base mb-8 line-clamp-3 leading-relaxed">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {work.technology?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[9px] md:text-[10px] uppercase tracking-widest font-bold bg-white/5 border border-white/5 text-slate-300 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 items-center mt-auto">
                      {/* Умная проверка: показываем кнопку только если есть ссылка */}
                      {work.siteLink && (
                        <Link
                          href={work.siteLink}
                          target="_blank"
                          className="px-8 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase transition-all hover:bg-purple-500 hover:text-white active:scale-95 shadow-lg shadow-white/5"
                        >
                          Live Demo
                        </Link>
                      )}

                      {work.code && (
                        <Link
                          href={work.code}
                          target="_blank"
                          className="text-white/40 hover:text-purple-400 font-bold text-xs uppercase tracking-widest border-b border-white/10 transition-all py-1"
                        >
                          View Code
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
