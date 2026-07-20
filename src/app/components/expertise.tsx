const credentials = [
  {
    label: '[ MIGRATIONS & NEXT.JS ARCHITECTURE ]',
    body: 'Transforming legacy web systems into modern Next.js environments: breaking monolithic layouts into maintainable component architectures, structuring predictable data flows, and modernizing state management. 76+ component design system built solo on my last migration.',
  },
  {
    label: '[ PERFORMANCE & CORE WEB VITALS ]',
    body: 'Optimizing heavy platforms to strict production budgets: SSR/SSG rendering strategies, payload reduction with backend teams, asset discipline. Proven result: Lighthouse 95/100 with zero CLS on a high-traffic media portal.',
  },
  {
    label: '[ AI-POWERED FEATURES & WORKFLOW ]',
    body: 'Integrating LLM APIs (Gemini, Claude) into products — bots, content pipelines, structured-data output for LLM discoverability — and using AI-assisted development (Cursor, Claude) to cut implementation and research time.',
  },
];

export function Expertise() {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-baseline justify-between border-b border-black/10 pb-6">
          <h2 className="text-2xl font-bold tracking-tight text-[#111111]">Expertise</h2>
          <span className="font-mono text-xs tracking-widest text-black/60">[ SECTION // 01 ]</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {credentials.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-6 py-6 md:py-2 ${
                i !== credentials.length - 1
                  ? 'border-b border-black/10 md:border-b-0 md:border-r md:pr-8'
                  : ''
              } ${i !== 0 ? 'md:pl-8' : ''}`}
            >
              <span className="font-mono text-[11px] tracking-widest text-[#111111]">
                {item.label}
              </span>
              <p className="text-pretty leading-relaxed text-black/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
