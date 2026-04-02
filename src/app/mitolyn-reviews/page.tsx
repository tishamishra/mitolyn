import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsMitolyn from '@/components/WhatIsMitolyn';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mitolyn Reviews 2026 - Real Customer Results & Complaints",
  description: "Read honest Mitolyn reviews for 2026. Discover real customer results, complaints, and the truth about this fat-burning supplement.",
  openGraph: {
    title: "Mitolyn Reviews 2026 - Real Customer Results & Complaints",
    description: "Read honest Mitolyn reviews for 2026. Discover real customer results, complaints, and the truth about this fat-burning supplement.",
    url: "https://mtolyn-us.com/mitolyn-reviews",
  },
  alternates: {
    canonical: "https://mtolyn-us.com/mitolyn-reviews",
  }
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #f8f9ff 0%, #ffffff 50%, #f8f9ff 100%)' }}>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <WhatIsMitolyn />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
