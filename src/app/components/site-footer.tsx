import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl items-baseline justify-end gap-4 px-6 sm:justify-between py-6 font-mono text-[11px] tracking-widest text-black/60 sm:text-xs">
        <span className="hidden sm:inline">[ ANNA ERMILINA // 2026 ]</span>
        <Link
          href="/services"
          className="transition-opacity hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"
        >
          [ SERVICES / UNCONVENTIONAL PRICING ]
        </Link>
      </div>
    </footer>
  );
}
