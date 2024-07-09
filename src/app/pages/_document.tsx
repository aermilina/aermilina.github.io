import { Html, Head, Main, NextScript } from 'next/document'
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "Anna Ermilina - Frontend developer",
        description: "I've been developing websites for 4+ years. Get in Touch",
        icons:"/avatar.jpg",
};

export default function Document() {

    
  return (
    <Html lang="en">
      <Head/>      
      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics gaId="G-N09K7RP38L" />
      </body>
    </Html>
  )
}