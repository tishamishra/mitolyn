import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsMitolyn from '@/components/WhatIsMitolyn';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import { getPageCopy } from '@/lib/page-copy';

export const metadata: Metadata = {
  title: "Boost Your Metabolism with Mitolyn!",
  description: "Learn how Mitolyn can rev up your metabolism for better energy and weight management!",
  openGraph: {
    title: "Boost Your Metabolism with Mitolyn!",
    description: "Learn how Mitolyn can rev up your metabolism for better energy and weight management!",
    url: "https://mitolyn-review-video.vercel.app/mitolyn-metabolism-booster",
  },
  alternates: {
    canonical: "https://mitolyn-review-video.vercel.app/mitolyn-metabolism-booster",
  }
};

export default function Page() {
  const copy = getPageCopy('mitolyn-metabolism-booster');

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
