import React from 'react';

export const ExpertiseIcons = {
  Layers: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path
        d="M5 3V1M3 5H1M6 6L7 7M3 11v2m10-8h2m-4 10l-2 2m8-8l2 2m-2-7l1 1m-7 10l1 1"
        strokeLinecap="round"
      />
      <path d="M12 12l3-3 3 3-3 3-3-3z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Trophy: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M6 9V2h12v7M6 18h12m-9 4h6m-3-4v4M6 9a4 4 0 010 8m12-8a4 4 0 000 8" />
    </svg>
  ),
  Check: () => (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const expertises = [
  {
    category: 'Development',
    title: 'Enterprise Architecture',
    description: 'Building scalable systems with a focus on robust UI foundations and performance.',
    icon: <ExpertiseIcons.Layers />,
    tags: ['Next.js 15+', 'React 19', 'TypeScript', 'MUI', 'Styled Components'],
    color: 'from-purple-500/10 via-transparent to-transparent',
    badge: {
      org: 'Meta',
      name: 'Front-End Professional',
      accent: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    },
  },
  {
    category: 'AI-Powered Workflow',
    title: 'Smart Engineering',
    description:
      'Accelerating delivery by 30% through advanced AI integration and prompt engineering.',
    icon: <ExpertiseIcons.Sparkles />,
    tags: ['Cursor & Claude', 'Gemini', 'Prompt Engineering', 'Automation'],
    color: 'from-orange-500/10 via-transparent to-transparent',
    badge: {
      org: 'Google',
      name: 'AI Essentials Certified',
      accent: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    },
  },
  {
    category: 'Quality & Logic',
    title: 'Reliable Systems',
    description: 'Focused on maintainability, modular architecture, and high-performance metrics.',
    icon: <ExpertiseIcons.Shield />,
    tags: ['Jest & RTL', 'Modular Design', 'Core Web Vitals', 'GitHub Actions'],
    color: 'from-emerald-500/10 via-transparent to-transparent',
    badge: {
      org: 'Google Standards',
      name: 'Web Vitals Optimized',
      accent: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    },
  },
];
