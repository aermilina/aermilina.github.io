import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services & pricing — Anna Ermilina',
  description:
    'Unconventional pricing for selected hiring stages. A satirical rate card, not a commercial offer.',
  alternates: { canonical: '/services' },
};

const LANGUAGES = { RU: 'Russian', EN: 'English', SR: 'Serbian' } as const;

type Rate = { label: string; price: string };

const services: { name: string; unit?: string; note?: string; rates: Rate[] }[] = [
  {
    name: 'HR screening',
    unit: '30 / 60 min',
    rates: [
      { label: 'RU', price: '€10 / €20' },
      { label: 'EN', price: '€15 / €30' },
      { label: 'SR', price: '€20 / €40' },
    ],
  },
  {
    name: 'Live coding',
    rates: [
      { label: 'RU', price: '€700' },
      { label: 'EN', price: '€800' },
      { label: 'SR', price: '€1,000' },
    ],
  },
  {
    name: 'Test assignment',
    rates: [
      { label: 'RU', price: '€700' },
      { label: 'EN', price: '€800' },
      { label: 'SR', price: '€1,000' },
    ],
  },
  {
    name: 'Fixing bugs after AI',
    rates: [
      { label: 'One file', price: '€1,000' },
      { label: 'Whole project', price: '€3,000' },
    ],
  },
  {
    name: 'Talking frontend',
    unit: '30 / 60 min',
    rates: [
      { label: 'RU', price: '€10 / €20' },
      { label: 'EN', price: '€15 / €30' },
      { label: 'SR', price: '€20 / €40' },
    ],
  },
  {
    name: 'Hearing out my vibe-coding ideas',
    rates: [
      { label: 'RU', price: '€5' },
      { label: 'EN', price: '€10' },
      { label: 'SR', price: '€15' },
    ],
  },
  {
    name: 'Culture fit interview',
    note: 'I\'ll listen enthusiastically to your “unique values”.',
    rates: [{ label: 'Per interview', price: '€1,200' }],
  },
  {
    name: 'Essay: Why I want to work at [Company name]',
    rates: [
      { label: 'RU', price: '€100' },
      { label: 'EN', price: '€150' },
      { label: 'SR', price: '€200' },
    ],
  },
  {
    name: 'Talking to your AI recruiter',
    rates: [
      { label: 'RU', price: '€20' },
      { label: 'EN', price: '€40' },
      { label: 'SR', price: '€60' },
    ],
  },
  {
    name: 'Staying in your talent pool',
    rates: [
      { label: 'Per month', price: '€100' },
      { label: 'Pool renewal', price: '€200' },
    ],
  },
  {
    name: 'Ghosting after the final round',
    note: 'Therapy compensation included.',
    rates: [{ label: 'Flat fee', price: '€500' }],
  },
];

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]';

function RateLabel({ label }: { label: string }) {
  const language = LANGUAGES[label as keyof typeof LANGUAGES];
  return language ? (
    <abbr title={language} className="no-underline">
      {label}
    </abbr>
  ) : (
    <>{label}</>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] text-[#111111]">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 font-mono text-[11px] tracking-widest sm:px-6 sm:py-5 sm:text-xs">
          <Link href="/" className={`truncate transition-opacity hover:opacity-50 ${focusRing}`}>
            [ ANNA ERMILINA ]
          </Link>
          <nav aria-label="Portfolio" className="flex shrink-0 items-center gap-3 whitespace-nowrap sm:gap-6">
            <Link
              href="/"
              aria-label="Back to portfolio"
              className={`transition-opacity hover:opacity-50 ${focusRing}`}
            >
              <span className="sm:hidden">[ ← ]</span>
              <span className="hidden sm:inline">[ ← PORTFOLIO ]</span>
            </Link>
            <Link
              href="/#contact-section"
              className={`text-[#6366F1] transition-opacity hover:opacity-50 ${focusRing}`}
            >
              <span className="sm:hidden">[ CONTACT ]</span>
              <span className="hidden sm:inline">[ GET IN TOUCH ]</span>
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-8 font-mono text-xs tracking-widest text-black/60">
            [ SERVICES // UNCONVENTIONAL PRICING ]
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Services &amp; pricing
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-black/70">
            My rates for taking part in your interview. Same rates if you&apos;d rather I run it as your HR.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-baseline justify-between border-b border-black/10 pb-6">
            <h2 className="text-2xl font-bold tracking-tight">Rate card</h2>
            <span className="font-mono text-xs tracking-widest text-black/60">[ EUR ]</span>
          </div>

          <ul>
            {services.map((service, idx) => (
              <li
                key={service.name}
                className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-black/10 py-6 md:grid-cols-12 md:gap-x-8 md:py-8"
              >
                <span className="pt-1.5 font-mono text-xs tracking-widest text-black/60 md:col-span-1 md:pt-2.5">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="md:col-span-5">
                  <h3 className="text-xl font-bold tracking-tight md:text-3xl">{service.name}</h3>
                  {service.unit && (
                    <p className="mt-2 font-mono text-xs tracking-widest text-black/60">
                      [ {service.unit.toUpperCase()} ]
                    </p>
                  )}
                  {service.note && (
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-black/60">
                      {service.note}
                    </p>
                  )}
                </div>
                <dl className="col-start-2 mt-4 md:col-span-6 md:col-start-auto md:mt-1">
                  {service.rates.map((rate) => (
                    <div
                      key={rate.label}
                      className="flex items-baseline justify-between gap-6 border-b border-black/5 py-2 last:border-b-0"
                    >
                      <dt className="font-mono text-xs uppercase tracking-widest text-black/60">
                        <RateLabel label={rate.label} />
                      </dt>
                      <dd className="whitespace-nowrap text-lg font-bold tabular-nums tracking-tight md:text-xl">
                        {rate.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-2 font-mono text-xs leading-relaxed tracking-widest text-black/60 sm:flex-row sm:justify-between sm:gap-6">
            <p>[ PAYMENT: RUB · USD · EUR · RSD ]</p>
            <p>[ DISCOUNT IN EFFECT · FOR NOW ]</p>
          </div>
          <p className="mt-2 font-mono text-xs leading-relaxed tracking-widest text-black/60">
            [ BONUS: YOUR VACANCY POSTED IN MY TELEGRAM CHANNEL{' '}
            <a
              href="https://t.me/frontend_remote"
              target="_blank"
              rel="noreferrer"
              className={`text-[#6366F1] transition-opacity hover:opacity-50 ${focusRing}`}
            >
              @FRONTEND_REMOTE
            </a>{' '}
            ]
          </p>

          <p className="mt-16 max-w-2xl border-l-2 border-black/10 pl-4 text-pretty text-sm leading-relaxed text-black/60">
            Disclaimer: this is a satirical price list. If you didn&apos;t read this far, the attentive
            reading service is billed separately.
          </p>
        </div>
      </section>
    </main>
  );
}
