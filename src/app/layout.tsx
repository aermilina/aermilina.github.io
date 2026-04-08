import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anna Ermilina | Senior Frontend Engineer | React & Next.js Expert',
  description:
    'Senior Frontend Engineer specializing in high-end React & Next.js applications. Leveraging AI to build robust, scalable architecture without the digital noise.',

  openGraph: {
    title: 'Anna Ermilina - Building the Future of Web',
    description:
      'Expert React & Next.js development. Turning complex requirements into clean, high-performance digital products.',
    url: 'https://aermilina.github.io',
    siteName: 'Anna Ermilina Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://aermilina.github.io/avatar.png',
        width: 1200,
        height: 630,
        alt: 'Anna Ermilina - Senior Frontend Engineer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Anna Ermilina | Frontend Expert',
    description: 'High-performance React & Next.js applications.',
    images: ['https://aermilina.github.io/avatar.png'],
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
