const positions = [
  {
    period: '2019 — PRESENT',
    role: 'Senior Frontend Developer',
    company: 'OOO "Za Rulem" (ZR.RU) · Remote',
    summary:
      'Sole frontend engineer on a major automotive media portal. Led the migration from legacy stacks (Google Closure, jQuery) to React, then to Next.js. Built the component library, drove SSR performance to Lighthouse 95/100, customized Keycloak auth, implemented JSON-LD structured data.',
  },
  {
    period: '2024 — PRESENT',
    role: 'Frontend Developer · Contract',
    company: 'OOO KP-IT · Remote',
    summary:
      'Delivered three products in parallel with the main role: an internal statistics dashboard, a touch-optimized kiosk library, and an SSR coupon hub for a marketing campaign.',
  },
];

export function Experience() {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-baseline justify-between border-b border-black/10 pb-6">
          <h2 className="text-2xl font-bold tracking-tight text-[#111111]">Experience</h2>
          <span className="font-mono text-xs tracking-widest text-black/60">[ SECTION // 02 ]</span>
        </div>
        <ul>
          {positions.map((p) => (
            <li
              key={p.company}
              className="grid grid-cols-1 gap-4 border-b border-black/10 py-8 md:grid-cols-12 md:gap-8"
            >
              <span className="font-mono text-xs tracking-widest text-black/60 md:col-span-3">
                {p.period}
              </span>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold tracking-tight text-[#111111]">{p.role}</h3>
                <p className="mt-1 font-mono text-xs tracking-widest text-black/60">{p.company}</p>
              </div>
              <p className="text-pretty leading-relaxed text-black/70 md:col-span-5">{p.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
