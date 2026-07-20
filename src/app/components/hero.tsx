import Image from 'next/image';

export function Hero() {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-8 font-mono text-xs tracking-widest text-black/60">
          [ PORTFOLIO // 2026 ]
        </p>
        <h1 className="max-w-4xl text-balance text-3xl font-bold leading-[1.05] tracking-tight text-[#111111] sm:text-6xl md:text-7xl">
          [ SENIOR FRONTEND ENGINEER // REACT & NEXT.JS ]
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-black/10 pt-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-6 font-mono text-xs tracking-widest text-black/60">[ INDEX // 01 ]</p>
            <div className="relative aspect-square w-full overflow-hidden border border-black/10">
              <Image
                src="/avatar-1.webp"
                alt="Anna Ermilina"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                priority
              />
            </div>
          </div>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-black/70 md:col-span-8">
            7+ years in the JavaScript/TypeScript ecosystem. I architect high-performance Next.js
            platforms, lead large-scale migrations from legacy stacks, and tune Core Web Vitals to
            production budgets. I integrate LLM-powered features into web products and use
            AI-assisted workflows to ship faster — most recently as the sole frontend engineer
            behind the Next.js migration of a major automotive media portal.
          </p>
        </div>
      </div>
    </section>
  );
}
