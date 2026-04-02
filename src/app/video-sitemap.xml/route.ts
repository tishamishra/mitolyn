import { mitolynYoutube } from '@/lib/youtube';

const baseUrl = 'https://mtolyn-us.com';

const pages = [
  '',
  '/mitolyn-reviews',
  '/mitolyn-scam-exposed',
  '/does-mitolyn-work',
  '/mitolyn-ingredients-and-side-effects'
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <video:video>
      <video:thumbnail_loc>${mitolynYoutube.thumbnailMax}</video:thumbnail_loc>
      <video:title><![CDATA[${mitolynYoutube.title}]]></video:title>
      <video:description><![CDATA[${mitolynYoutube.description}]]></video:description>
      <video:player_loc>${mitolynYoutube.embedUrl}</video:player_loc>
      <video:publication_date>${mitolynYoutube.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
  });
}
