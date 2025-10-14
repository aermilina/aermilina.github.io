import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anna Ermilina - Frontend developer',
  description: "I've been developing websites for 6+ years. Get in Touch!",
  openGraph: {
    title: 'Anna Ermilina - Frontend developer',
    description: "I've been developing websites for 6+ years. Get in Touch!",
    type: 'website',
    images: ['https://aermilina.github.io/avatar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-N09K7RP38L" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
