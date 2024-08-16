import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '../_theme'; // Make sure your path is correct
import seoData from "@/app/lib/seo.json"

export default function Document() {
  return (
    <Html>
      <Head >
      <meta name="description" content={seoData.seoDescription} />
          <meta name="keywords" content={seoData.seoKeywords.join(', ')} />
         <meta property="og:title" content={seoData.seoTitle} />
         <meta property="og:description" content={seoData.seoDescription} />
         <meta property="og:url" content={seoData.url} />
         <meta property="og:image" content={seoData.image} />
         <meta property="og:type" content={seoData.type} />
         <meta property="og:site_name" content={seoData.siteName} />

         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content={seoData.seoTitle} />
         <meta name="twitter:description" content={seoData.seoDescription} />
         <meta name="twitter:image" content={seoData.image} />
        
         <meta name="robots" content={seoData.robots} />
       <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.zymptek.com/",
        "logo": "https://www.zymptek.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "ontario, Canada",
          "postalCode": "M3J1V6",
          "streetAddress": "470 Sentinel Road",
          "addressCountry": "CA"
        },
        "email": "zymptek@gmail.com",
        "name": "Zymptek"
      }
    ) }}
  />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
