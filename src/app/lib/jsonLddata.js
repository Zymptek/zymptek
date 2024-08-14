// /lib/jsonLdData.js

const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zymptek",
    "url": "https://www.zymptek.com",
    "logo": "https://www.zymptek.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-5555",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.facebook.com/zymptek",
      "https://twitter.com/zymptek",
      "https://www.linkedin.com/company/zymptek"
    ]
  };
  
  export default jsonLdData;
  