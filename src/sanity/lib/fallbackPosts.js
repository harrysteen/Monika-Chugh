// Shown only while Sanity is not connected (no NEXT_PUBLIC_SANITY_PROJECT_ID).
// They all open the existing static post at /blogs/write-write-write.
const PLACEHOLDER_EXCERPT =
  'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...';

export const fallbackPosts = [
  { slug: 'write-write-write', category: 'Spirituality', title: 'The Silent Ache of a Guru', image: '/images/blogs/featured_guru.jpg', readTime: '5 min read', publishedAt: '2026-08-18' },
  { slug: 'write-write-write', category: 'Growth', title: 'Write. Write. Write...', image: '/images/blogs/writing.jpg', readTime: '4 min read', publishedAt: '2026-08-14' },
  { slug: 'write-write-write', category: 'Relationships', title: 'What is love after all?', image: '/images/blogs/love.jpg', readTime: '6 min read', publishedAt: '2026-08-10' },
  { slug: 'write-write-write', category: 'Travel', title: 'Motivators Singing out', image: '/images/blogs/travel.jpg', readTime: '5 min read', publishedAt: '2026-08-06' },
  { slug: 'write-write-write', category: 'Wellness', title: 'Brimless Soul', image: '/images/blogs/birds.jpg', readTime: '4 min read', publishedAt: '2026-08-02' },
  { slug: 'write-write-write', category: 'Inspiration', title: 'Heal', image: '/images/blogs/heal.jpg', readTime: '7 min read', publishedAt: '2026-07-28' }
].map((post) => ({ ...post, excerpt: PLACEHOLDER_EXCERPT }));
