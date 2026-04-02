import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsMitolyn from '@/components/WhatIsMitolyn';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import { getPageCopy } from '@/lib/page-copy';

export const metadata: Metadata = {
  title: "Mitolyn Ingredients & Side Effects Explained (2026 Review)",
  description: "A complete breakdown of Mitolyn ingredients and potential side effects. See what's inside this natural fat-burning formula before buying.",
  openGraph: {
    title: "Mitolyn Ingredients & Side Effects Explained (2026 Review)",
    description: "A complete breakdown of Mitolyn ingredients and potential side effects. See what's inside this natural fat-burning formula before buying.",
    url: "https://mitolyn-review-video.vercel.app/mitolyn-ingredients-and-side-effects",
  },
  alternates: {
    canonical: "https://mitolyn-review-video.vercel.app/mitolyn-ingredients-and-side-effects",
  }
};

export default function Page() {
  const copy = getPageCopy('mitolyn-ingredients-and-side-effects');

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
