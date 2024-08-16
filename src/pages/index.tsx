// pages/index.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About'
import Mission from '@/components/Mission';
import Background from '@/components/Background';
import ServicePage from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import seoData from "@/app/lib/seo.json"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{seoData.seoTitle}</title>
        <meta name="description" content={seoData.seoDescription} />
        <meta name="keywords" content={seoData.seoKeywords.join(', ')} />

        {/* Open Graph */}
        <meta property="og:title" content={seoData.seoTitle} />
        <meta property="og:description" content={seoData.seoDescription} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content={seoData.type} />
        <meta property="og:site_name" content={seoData.siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.seoTitle} />
        <meta name="twitter:description" content={seoData.seoDescription} />
        <meta name="twitter:image" content={seoData.image} />
        
        <link rel="canonical" href={seoData.url} />
        <meta name="robots" content={seoData.robots} />
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.zymptek.com/",
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
      <Navbar />
      <Background>
        
        <Hero />
        <About />
        <Mission />
        <ServicePage />
        <Testimonials/>
        <ContactForm />
        <Footer />
      </Background>


      
    </>
  );
};

export default Home;

