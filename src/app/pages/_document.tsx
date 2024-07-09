import { Html, Head, Main, NextScript } from 'next/document'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anna Ermilina - Frontend developer",
        description: "I've been developing websites for 3 years. Get in Touch",
        icons:"/avatar.jpg",
};

export default function Document() {

    
  return (
    <Html lang="en">
      <Head>
        <title>Мы тут?</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}