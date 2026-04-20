import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Anna Ermilina | Senior Frontend Engineer | Lead Next.js & React Expert',

  description:
    'Senior Frontend Engineer with 6+ years of experience. Expert in Next.js, React, and TypeScript. Specializing in high-performance architectural migrations, autonomous product delivery, and AI-augmented development workflows.',

  openGraph: {
    title: 'Anna Ermilina | Lead Frontend Engineer | Next.js Specialist',
    description:
      'Autonomous delivery of high-performance web applications. Expert in React ecosystem, architectural migrations, and scalable B2B solutions.',
    url: 'https://aermilina.github.io',
    siteName: 'Anna Ermilina | Senior Frontend Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://aermilina.github.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anna Ermilina - Senior Frontend Engineer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Anna Ermilina | Senior Frontend Expert',
    description:
      'Building scalable, high-performance React & Next.js applications with full ownership.',
    images: ['https://aermilina.github.io/og-image.png'],
  },

  alternates: {
    canonical: 'https://aermilina.github.io',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030303] text-white antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-N09K7RP38L" />
      </body>
    </html>
  );
}
