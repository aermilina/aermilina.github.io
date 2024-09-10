import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";


export default function Document() {
  const google = ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N09K7RP38L');`
    
  return (
    <Html lang="en">
      <Head>
        <title>Anna Ermilina - Frontend developer</title>
        <meta name="description" content="I have been developing websites for 4+ years. Get in Touch!"/>
        <meta name="og:title" content="Anna Ermilina - Frontend developer"/>
        <meta name="og:type" content="website"/>
        <meta name="og:description" content="I have been developing websites for 4+ years. Get in Touch!"/>
        <meta name="og:url" content="https://aermilina.github.io/"/>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-N09K7RP38L" />
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{__html:google}}/>
        </Head>      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}