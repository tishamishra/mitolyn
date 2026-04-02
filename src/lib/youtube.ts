/** Official Mitolyn video — used for embed, schema, and OG tags. */
export const MITOLYN_VIDEO_ID = "bhcqSygCwok" as const;

export const mitolynYoutube = {
  id: MITOLYN_VIDEO_ID,
  watchUrl: `https://www.youtube.com/watch?v=${MITOLYN_VIDEO_ID}`,
  embedUrl: `https://www.youtube.com/embed/${MITOLYN_VIDEO_ID}?si=1UFD0TwPDfJ1ocnF`,
  /** Prefer maxres; fallback hq for schema array */
  thumbnailMax: `https://i.ytimg.com/vi/${MITOLYN_VIDEO_ID}/maxresdefault.jpg`,
  thumbnailHq: `https://i.ytimg.com/vi/${MITOLYN_VIDEO_ID}/hqdefault.jpg`,
  title: "MITOLYN REVIEW 2026 – The Truth They DON’T Want You To Know!",
  description:
    "Is Mitolyn really the fat-burning miracle everyone is talking about… or just another overhyped scam? In this video, I break down EVERYTHING you need to know before you buy! Learn how Mitolyn supports mitochondrial health, metabolism, and natural fat loss.",
  /** ISO 8601 */
  uploadDate: "2026-04-02T00:52:39-07:00",
} as const;
