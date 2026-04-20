export const credentials = [
  {
    org: 'Google',
    title: 'AI Essentials Certified',
    subtitle: 'Certified AI-Driven Engineer',
    description:
      'Verified mastery in generative AI tools to optimize workflows, automate routines, and boost development productivity by 30%.',
    color: 'from-orange-500/10 to-transparent',
    borderColor: 'group-hover:border-orange-500/30',
    iconColor: 'text-orange-400',
    link: '',
  },
  {
    org: 'Meta',
    title: 'Front-End Professional',
    subtitle: 'Meta Certified Developer',
    description:
      'Expertise in the React ecosystem, modern interface architecture, and UX principles, verified by the creators of the library.',
    color: 'from-blue-500/10 to-transparent',
    borderColor: 'group-hover:border-blue-500/30',
    iconColor: 'text-blue-400',
    link: 'https://coursera.org/share/e2b4f3b0bb53e0e8f8bc359d716359ce',
  },
];

export const CertIcons = {
  Award: () => (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75V21m-4.5-2.25l-1.5 1.5m9-1.5l1.5 1.5"
      />
    </svg>
  ),
  Check: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  External: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  ),
};
