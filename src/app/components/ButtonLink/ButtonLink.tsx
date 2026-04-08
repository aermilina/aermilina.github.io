import React from 'react';

interface Props {
  name: string;
  href: string;
  download?: boolean | string; // Может быть строкой для указания имени файла
  className?: string;
  target?: string;
}

export default function ButtonLink({ name, href, download, className, target }: Props) {
  const baseStyles = className
    ? className
    : 'inline-block p-3.5 border border-white min-w-[150px] text-center transition-all hover:text-slate-400 hover:border-slate-400 mt-3.5 cursor-pointer';

  const finalTarget = target ? target : href.startsWith('http') || download ? '_blank' : undefined;

  return (
    <a
      href={href}
      className={baseStyles}
      download={download}
      target={finalTarget}
      rel={finalTarget === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {name}
    </a>
  );
}
