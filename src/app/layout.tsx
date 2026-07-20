import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter, Geist_Mono } from 'next/font/google';
import { JsonLd } from '@/src/app/components/schema';
import './globals.css';

const inter = Inter({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = 'https://aermilina.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Anna Ermilina — Senior Frontend Engineer · React & Next.js',
  description:
    'Senior Frontend Engineer with 7+ years in the React ecosystem. Next.js architecture, large-scale platform migrations, Core Web Vitals optimization, LLM-powered features.',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Anna Ermilina — Senior Frontend Engineer · React & Next.js',
    description:
      'Next.js architecture, platform migrations, Core Web Vitals, LLM-powered features. Open to senior frontend roles, remote.',
    siteName: 'Anna Ermilina',
    images: [
      {
        url: '/og-image.png', // 1200x630, положить в /public
        width: 1200,
        height: 630,
        alt: 'Anna Ermilina — Senior Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Ermilina — Senior Frontend Engineer · React & Next.js',
    description:
      'Next.js architecture, platform migrations, Core Web Vitals, LLM-powered features.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-[#FBFBFB]`}>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId="G-N09K7RP38L" />
        )}
      </body>
    </html>
  );
}
