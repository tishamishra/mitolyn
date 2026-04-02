import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsMitolyn from '@/components/WhatIsMitolyn';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import { getPageCopy } from '@/lib/page-copy';

export const metadata: Metadata = {
  title: "Does Mitolyn Really Work? Science-Backed Weight Loss Review",
  description: "Does Mitolyn actually work for fat loss? We break down the science, ingredients, and mitochondrial support claims in our full 2026 review.",
  openGraph: {
    title: "Does Mitolyn Really Work? Science-Backed Weight Loss Review",
    description: "Does Mitolyn actually work for fat loss? We break down the science, ingredients, and mitochondrial support claims in our full 2026 review.",
    url: "https://mtolyn-us.com/does-mitolyn-work",
  },
  alternates: {
    canonical: "https://mtolyn-us.com/does-mitolyn-work",
  }
};

export default function Page() {
  const copy = getPageCopy('does-mitolyn-work');

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #f8f9ff 0%, #ffffff 50%, #f8f9ff 100%)' }}>
      <StructuredData />
      <Header />
      <main>
        <Hero title={copy.heroTitle} intro={copy.heroIntro} />
        <WhatIsMitolyn title={copy.whatTitle} paragraphs={copy.whatParagraphs} />
        <FAQ
          title={copy.faqTitle}
          items={copy.faqs}
          safetyTitle={copy.safetyTitle}
          safetyParagraphs={copy.safetyParagraphs}
        />
      </main>
      <Footer />
    </div>
  );
}
