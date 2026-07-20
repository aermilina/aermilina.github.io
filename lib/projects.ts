export type Project = {
  name: string
  role: string
  category: 'Commercial' | 'Technical Case' | 'Labs' | 'Personal'
  description: string
  result?: string
  image: string
  technology: string[]
  siteLink?: string
  code?: string
  featured?: boolean
}

export const works: Project[] = [
  {
    name: 'ZR.RU',
    role: 'Senior Frontend Developer · sole frontend on the project',
    category: 'Commercial',
    featured: true,
    description:
      'One of Russia\u2019s largest automotive media portals. Independently led the migration of the legacy stack to Next.js: built a library of 76+ reusable React components, page templates, routing and metadata handling, then drove SSR performance work together with backend engineers to cut data payloads.',
    result:
      'Lighthouse Performance 95/100, zero CLS, LCP 2.4s on throttled slow 4G',
    image: '/zrru.webp',
    technology: [
      'Next.js',
      'App Router',
      'SSR',
      'TanStack Query',
      'Storybook',
      'Styled-components',
      'Keycloak',
    ],
    siteLink: 'https://www.zr.ru',
  },
  {
    name: 'KP-IT Digital Library',
    role: 'Frontend Developer · contract',
    category: 'Commercial',
    featured: true,
    description:
      'Touch kiosk application presenting a century of magazine issues as a browsable digital archive. Assembled disparate shadcn/ui components into a single coherent reading mechanism, built a personalized touch for VIP guests \u2014 the app surfaces the issue published on their birthday \u2014 and reworked newspaper text rendering for comfortable reading on tablets.',
    result: '100 years of archive issues browsable on a touch kiosk',
    image: '/library.webp',
    technology: ['Next.js 16', 'React 19', 'TanStack Query', 'shadcn/ui','Radix', 'Sass'],
  },
  {
    name: 'Statistics for KP-IT',
    role: 'Frontend Developer · contract',
    category: 'Commercial',
    featured: true,
    description:
      'Internal analytics dashboard: data visualization modules and a multi-step form flow with client-side validation, built with attention to data integrity across steps.',
    result: 'Replaced manual spreadsheet reporting for the internal team',
    image: '/kpproject.webp',
    technology: ['Next.js', 'TypeScript', 'Material UI', 'Formik'],
    code: 'https://github.com/aermilina/statsboard_example',
  },
  {
    name: 'KP-IT Coupon Hub',
    role: 'Frontend Developer · contract',
    category: 'Commercial',
    featured: true,
    description:
      'SSR frontend for a user-acquisition marketing campaign, from Figma layouts to production, in close coordination with a backend developer on API integration and traffic-spike readiness.',
    result: 'Shipped on campaign deadline; SSR for SEO-driven acquisition',
    image: '/coupons.webp',
    technology: ['Next.js 16', 'React 19', 'TypeScript', 'Figma'],
  },
  {
    name: 'Wargaming Widget',
    role: 'Technical assignment for Wargaming',
    category: 'Technical Case',
    featured: true,
    description:
      'Interview assignment: an interactive widget built framework-free, per the brief. Deliberately minimal bundle, lag-free CSS animations, and a CI pipeline via GitHub Actions — treated as production code, not throwaway test work.',
    result: 'Zero-dependency bundle, deployed live via GitHub Actions',
    image: '/wot.webp',
    technology: ['Vanilla JS', 'TypeScript', 'Vite', 'GitHub Actions'],
    code: 'https://github.com/aermilina/wot',
    siteLink: 'https://aermilina.github.io/wot/',
  },
  {
    name: 'AI SMM Assistant',
    role: 'Personal project',
    category: 'Labs',
    featured: true,
    description:
      'Content-generation Telegram bot on Google Gemini: niche-specific prompt design, asynchronous bot architecture on Aiogram, cost controls, deployed to Railway. Built end-to-end solo.',
    result: 'Cut my own SMM content prep time by roughly 90%',
    image: '/smmbot.webp',
    technology: ['Python', 'Google Gemini API', 'Aiogram', 'Railway'],
    code: 'https://github.com/aermilina/smm-bot',
  },

  // ——— Archive: компактный список без развёрнутых кейсов ———
  {
    name: 'AMP Version ZR.RU',
    role: 'Senior Frontend Developer',
    category: 'Commercial',
    description:
      'AMP edition of the portal for search-driven mobile traffic: article templates adapted to AMP constraints with layout parity to the main site.',
    image: '/ampzrru.webp',
    technology: ['React', 'SSR', 'TypeScript', 'Styled-components'],
    code: 'https://github.com/aermilina/example-react-amp',
  },
  {
    name: 'Frontend Jobs Bot',
    role: 'Personal project',
    category: 'Labs',
    description:
      'Telegram bot aggregating frontend vacancies: scraping pipeline, filtering rules, automated daily digest. Running live.',
    image: '/frontjobs.webp',
    technology: ['Python', 'Telegram API', 'Railway'],
    siteLink: 'https://t.me/frontend_remote',
  },
  {
    name: 'Kameleoon Dashboard',
    role: 'Technical case',
    category: 'Technical Case',
    description:
      'Analytical dashboard with full logic coverage via Vitest and a modular state-management setup.',
    image: '/kameleoon.webp',
    technology: ['React', 'TypeScript', 'Vitest'],
    code: 'https://github.com/aermilina/test_dashboard',
  },
  {
    name: 'CADExchange Case',
    role: 'Technical case',
    category: 'Technical Case',
    description:
      'Multi-step validation flow with a maintainable Styled-components architecture, deployed to Vercel.',
    image: '/cadex.webp',
    technology: ['Next.js', 'Formik', 'Styled-components'],
    code: 'https://github.com/aermilina/testcase-cadex',
    siteLink: 'https://testcase-cadex-2.vercel.app/',
  },
  {
    name: 'INMYROOMS Tapbar',
    role: 'Technical case',
    category: 'Technical Case',
    description:
      'Study of mobile micro-interactions: 60fps gesture-based tapbar animations with Framer Motion.',
    image: '/inmyrooms.webp',
    technology: ['React', 'TypeScript', 'Framer Motion'],
    code: 'https://github.com/aermilina/tapbar_inmyrooms',
    siteLink: 'https://aermilina.github.io/tapbar_inmyrooms/',
  },
  {
    name: 'Realmond Userlist',
    role: 'Technical case',
    category: 'Technical Case',
    description:
      'Design-to-code exercise under a tight deadline: clean Tailwind implementation of a user list UI.',
    image: '/testrealmond.webp',
    technology: ['Next.js', 'Tailwind CSS'],
    code: 'https://github.com/aermilina/userlist_realmond',
  },
  {
    name: 'Portfolio Engine',
    role: 'Personal project',
    category: 'Personal',
    description:
      'This site: Next.js, Framer Motion, deployed via GitHub Actions, built with an AI-assisted workflow.',
    image: '/portfolio.webp',
    technology: ['Next.js 16', 'Framer Motion', 'Tailwind CSS', 'GitHub Actions'],
    code: 'https://github.com/aermilina/aermilina.github.io',
  },
]

export const featuredWorks = works.filter((w) => w.featured)
export const archiveWorks = works.filter((w) => !w.featured)
