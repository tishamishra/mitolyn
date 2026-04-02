export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const baseUrl = 'https://mitolyn-review-video.vercel.app';

const urls = [
  '',
  '/privacy-policy',
  '/disclaimer',
  '/terms',
  '/order-tracking',
  '/refund-policy',
  '/contact-us',
  '/mitolyn-reviews',
  '/mitolyn-scam-exposed',
  '/does-mitolyn-work',
  '/mitolyn-ingredients-and-side-effects',
];

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const lastmod = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => {
      const loc = `${baseUrl}${path}`;
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join('\n')}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

