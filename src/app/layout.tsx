import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./socicon.css";
import "./mobirise-sections.css";
import { mitolynYoutube } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "MITOLYN REVIEW 2026 – The Truth They DON’T Want You To Know!",
  description: "Is Mitolyn really the fat-burning miracle everyone is talking about… or just another overhyped scam? In this video, we break down EVERYTHING you need to know.",
  keywords: "mitolyn, mitolyn review, mitolyn reviews 2026, mitolyn fat loss, mitolyn scam, does mitolyn work",
  openGraph: {
    title: "MITOLYN REVIEW 2026 – The Truth They DON’T Want You To Know!",
    description: "Is Mitolyn really the fat-burning miracle everyone is talking about… or just another overhyped scam? In this video, we break down EVERYTHING you need to know.",
    url: "https://mtolyn-us.com/",
    siteName: "Mitolyn Official",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900",
        width: 500,
        height: 500,
        alt: "Mitolyn Official Supplement",
      },
    ],
    videos: [
      {
        url: mitolynYoutube.embedUrl,
        secureUrl: mitolynYoutube.embedUrl,
        type: "text/html",
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    card: "player",
    title: "MITOLYN REVIEW 2026 – The Truth They DON’T Want You To Know!",
    description: "Is Mitolyn really the fat-burning miracle everyone is talking about… or just another overhyped scam? Watch our honest review.",
    images: [mitolynYoutube.thumbnailMax],
  },
  alternates: {
    canonical: "https://mtolyn-us.com/",
  },
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883", type: "image/webp" },
    ],
    apple: [
      { url: "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883", sizes: "180x180", type: "image/webp" },
    ],
    shortcut: "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" type="image/webp" sizes="485x94" />
        <link rel="apple-touch-icon" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" sizes="485x94" />
        <link rel="shortcut icon" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" type="image/webp" />
        <link rel="icon" type="image/webp" sizes="32x32" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" />
        <link rel="icon" type="image/webp" sizes="16x16" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" />
        <meta name="msvalidate.01" content="DF238DB2B8BB655EFD6CF96236274D79" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Mitolyn Official" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Arial, sans-serif' }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
