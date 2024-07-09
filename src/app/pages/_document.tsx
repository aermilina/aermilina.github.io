import { Html, Head, Main, NextScript } from 'next/document'
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Anna Ermilina - Frontend developer",
        description: "I've been developing websites for 4+ years. Get in Touch",
        icons:"/avatar.jpg",
};


export default function Document() {
  const google = ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N09K7RP38L');`
    
  return (
    <Html lang="en">
      <Head/>      
      <body>
        <Main />
        <NextScript />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N09K7RP38L" />
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{__html:google}}/>
      </body>
    </Html>
  )
}