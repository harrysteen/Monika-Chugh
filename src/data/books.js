// Published books with their own detail page (/books/<slug>).
// `cover` is the cover image used in "Explore more"; `coverSvg` describes the empty space
// around the cover inside that image (SVG units) so all covers can be shown at the same size.
export const BOOKS = [
  {
    slug: 'quote-cafe',
    title: 'Quote Cafe – Thoughts In a Cup',
    shortTitle: 'Quote Café - Thoughts In a Cup',
    heroImage: '/images/books/quote_cafe_3d_stack.webp',
    heroMaxWidth: '460px',
    description:
      'Some stories wait until we find the courage to share them. Quote Café began when I found mine. A sanctuary of reflections, affirmations, and short poems on self-love, forgiveness, and letting go. This is my story. Perhaps you’ll find a little of yours here.',
    marquee: 'quote cafe . thoughts in a cup . ',
    cover: '/images/home_section4_book1.svg',
    coverSvg: { w: 246, y: 0 }
  },
  {
    slug: 'quiet-zone',
    title: 'A Quiet Zone With Affirmations',
    shortTitle: 'A Quiet Zone With Affirmations',
    heroImage: '/images/books/quiet_zone_3d_stack.webp',
    heroMaxWidth: '460px',
    description:
      '“Take care of yourself; the world can wait.” A reminder I often gave my patients, and slowly learned to offer myself. A Quiet Zone With Affirmations began in my journals, with words I needed to hear. In my own company, writing became a daily ritual. Make a little room for yourself here.',
    marquee: 'A Quiet Zone With Affirmations . ',
    cover: '/images/home_section4_book2.svg',
    coverSvg: { w: 277, y: 12.2 }
  },
  {
    slug: 'rebirth',
    title: 'Rebirth – The Phoenix Rising',
    shortTitle: 'Rebirth – The Phoenix Rising',
    heroImage: '/images/books/rebirth_3d_stack.webp',
    heroMaxWidth: '460px',
    description:
      'The phoenix is the symbol of renewal and rebirth. As one life ends, a nest is built, the old phoenix sets fire to itself, and a new one emerges from the ashes. Rebirth and renewal are never easy, as the stories of these brave women will testify. Each shares a story of a fragmented and fractured life. To feel safe and secure often means stepping through layers of darkness and fragments of yourself to find the light and a way back to who you truly are.',
    marquee: 'Rebirth - The Phoenix Rising ',
    cover: '/images/home_section4_book3.svg',
    coverSvg: { w: 254, y: 0 }
  }
];

export const getBook = (slug) => BOOKS.find((b) => b.slug === slug);
