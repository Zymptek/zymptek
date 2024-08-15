import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '../_theme'; // Make sure your path is correct

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        <script type="application/ld+json">
        {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Zymptek",
                        "url": "https://www.zymptek.com",
                        "logo": "https://www.zymptek.com/logo.png",
                        "contactPoint": [{
                            "@type": "ContactPoint",
                            "areaServed": ["US", "CA"],
                            "contactType": "Customer service",
                            "telephone": "+1-123-456-7890",
                            "email": "info@zymptek.com"
                        }],
                        "sameAs": [
                            "https://www.linkedin.com/company/zymptek",
                            "https://twitter.com/zymptek"
                        ]
                    }
                `}
    </script>
      </body>
    </Html>
  );
}
