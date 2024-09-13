import type { Metadata} from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
      title: "Anna Ermilina - Frontend developer",
      description: "I've been developing websites for 4+ years. Get in Touch!",
      openGraph:{
        title: "Anna Ermilina - Frontend developer",
        description:"I've been developing websites for 4+ years. Get in Touch!",
        type: "website",
        images:[
          'https://aermilina.github.io/avatar.jpg'
        ],
      },
      robots:{
        index: true,
        follow: true,
        nocache: true
      }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-N09K7RP38L"/>
    </html>
  );
}
