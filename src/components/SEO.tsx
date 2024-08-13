import Head from 'next/head';
import React from 'react';

interface SeoProps {
    title: string,
    description: string
}

const SEO: React.FC<SeoProps> = ({ title, description }) => {
  const defaultTitle = 'Zymptek - Connecting Indian Exporters with Global Buyers';
  const defaultDescription = 'Zymptek helps people around the world import high-quality products from Indian exporters by matching top suppliers with buyers.';

  return (
    <Head>
      <title>{title ? `${title} | Zymptek` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content="Zymptek" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default SEO