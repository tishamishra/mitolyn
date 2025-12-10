import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./socicon.css";
import "./mobirise-sections.css";

export const metadata: Metadata = {
  title: "Mitolyn Official - Natural Fat Loss Support | USA",
  description: "Mitolyn official website supplement. Buy Mitolyn for fat loss, weight loss & energy boost. Read reviews, learn benefits & order today. USA official website.",
  keywords: "mitolyn, mitolyn official, mitolyn buy, mitolyn fat loss, mitolyn reviews, mitolyn official website supplement, mitolyn usa official website",
  openGraph: {
    title: "Mitolyn Official - Natural Fat Loss Support | USA",
    description: "Mitolyn official website supplement. Buy Mitolyn for fat loss, weight loss & energy boost. Read reviews & order today.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitolyn Official - Natural Fat Loss Support",
    description: "Mitolyn official website supplement. Buy Mitolyn for fat loss & weight loss. Read reviews & order today.",
    images: ["https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900"],
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
        <Script id="disable-context-menu">
          {`
            document.addEventListener('contextmenu', event => event.preventDefault());
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
