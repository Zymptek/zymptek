// pages/index.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import companyData from '@/app/data.json';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About'
import Mission from '@/components/Mission';
import Background from '@/components/Background';
import ServicePage from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{companyData.seoTitle}</title>
        <meta name="description" content={companyData.seoDescription} />
        <meta name="keywords" content={companyData.seoKeywords.join(', ')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={companyData.seoTitle} />
        <meta property="og:description" content={companyData.seoDescription} />
        <meta property="og:url" content="https://zymptek.com/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Zymptek" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={companyData.seoTitle} />
        <meta name="twitter:description" content={companyData.seoDescription} />
        <link rel="icon" href="/favicon.ico" />
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

