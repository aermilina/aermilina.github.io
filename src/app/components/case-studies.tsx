'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { featuredWorks, archiveWorks } from '@/lib/projects';
import type { Project } from '@/lib/projects';

const EASE = [0.16, 1, 0.3, 1] as const;

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-video w-full overflow-hidden border border-white/10">
        <Image
          src={project.image || '/placeholder.webp'}
          alt={`${project.name} — interface screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold uppercase tracking-tight lg:text-3xl">{project.name}</h3>
        <p className="font-mono text-xs tracking-widest text-white/60">{project.role}</p>
      </div>
      <p className="text-pretty leading-relaxed text-white/70">{project.description}</p>
      {project.result && (
        <p className="border-l-2 border-[#818CF8] pl-4 font-mono text-xs leading-relaxed tracking-widest text-white">
          [ RESULT ] {project.result}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {project.technology.map((tool) => (
          <span
            key={tool}
            className="border border-white/15 px-2 py-1 font-mono text-[10px] tracking-widest text-white/60"
          >
            {tool}
          </span>
        ))}
      </div>
      {(project.siteLink || project.code) && (
        <div className="mt-2 flex items-center gap-6 border-t border-white/10 pt-4 font-mono text-xs tracking-widest text-white">
          {project.siteLink && (
            <a
              href={project.siteLink}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#818CF8]"
            >
              [ Live ]
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#818CF8]"
            >
              [ Code ]
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = featuredWorks[activeIdx];

  return (
    <section className="bg-[#111111] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-baseline justify-between border-b border-white/10 pb-6">
          <h2 className="text-2xl font-bold tracking-tight">Case Studies</h2>
          <span className="font-mono text-xs tracking-widest text-white/50">[ SECTION // 03 ]</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:min-h-[600px] lg:grid-cols-12">
          {/* Список: на мобиле — аккордеон, на lg+ — навигация левой колонки */}
          <nav aria-label="Featured case studies" className="lg:col-span-5">
            <ul className="flex flex-col">
              {featuredWorks.map((project, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <li key={project.name} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      aria-expanded={isActive}
                      aria-current={isActive ? 'true' : undefined}
                      className="group flex w-full items-baseline gap-4 py-5 text-left font-mono text-sm tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#818CF8]"
                    >
                      <span className={isActive ? 'text-[#818CF8]' : 'text-white/40'}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="flex flex-1 flex-col gap-1">
                        <span
                          className={`text-base font-bold uppercase tracking-tight transition-colors ${
                            isActive
                              ? 'text-white underline decoration-[#818CF8] decoration-2 underline-offset-4'
                              : 'text-white/50 group-hover:text-white/80'
                          }`}
                        >
                          {project.name}
                        </span>
                        <span
                          className={`text-[11px] tracking-widest transition-colors ${
                            isActive ? 'text-white/60' : 'text-white/40'
                          }`}
                        >
                          {project.category}
                        </span>
                      </span>
                      {/* индикатор раскрытия — только на мобиле */}
                      <span
                        aria-hidden="true"
                        className={`text-white/40 transition-transform duration-300 lg:hidden ${
                          isActive ? 'rotate-45' : ''
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* Мобильный аккордеон: деталка прямо под пунктом */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden lg:hidden"
                        >
                          <div className="pb-8 pt-1">
                            <ProjectDetail project={project} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Правая колонка — только lg+ */}
          <div className="hidden lg:col-span-7 lg:block">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <ProjectDetail project={active} />
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* Archive: остальные работы одной строкой */}
        <div className="mt-20">
          <div className="mb-6 flex items-baseline justify-between border-b border-white/10 pb-4">
            <h3 className="font-mono text-xs tracking-widest text-white/60">
              [ ARCHIVE // MORE WORK ]
            </h3>
          </div>
          <ul>
            {archiveWorks.map((project) => (
              <li
                key={project.name}
                className="flex flex-col gap-2 border-b border-white/10 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-bold uppercase tracking-tight text-white/80">
                      {project.name}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-white/40">
                      {project.category}
                    </span>
                  </div>
                  <span className="truncate font-mono text-[10px] tracking-widest text-white/40">
                    {project.technology.join(' · ')}
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-5 font-mono text-[11px] tracking-widest text-white/70">
                  {project.siteLink && (
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-opacity hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#818CF8]"
                    >
                      [ Live ]
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-opacity hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#818CF8]"
                    >
                      [ Code ]
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
