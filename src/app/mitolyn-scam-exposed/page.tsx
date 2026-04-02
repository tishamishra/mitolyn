import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsMitolyn from '@/components/WhatIsMitolyn';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mitolyn Scam Exposed? What They Don't Want You to Know",
  description: "Is Mitolyn a scam? We expose the truth behind the hype. Watch our full video review before you buy the Mitolyn supplement.",
  openGraph: {
    title: "Mitolyn Scam Exposed? What They Don't Want You to Know",
    description: "Is Mitolyn a scam? We expose the truth behind the hype. Watch our full video review before you buy the Mitolyn supplement.",
    url: "https://mtolyn-us.com/mitolyn-scam-exposed",
  },
  alternates: {
    canonical: "https://mtolyn-us.com/mitolyn-scam-exposed",
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
