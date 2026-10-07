import { client, imageUrl } from './client';
import { fallbackPosts } from './fallbackPosts';

// Pages re-check Sanity at most once a minute, so new blogs go live without a redeploy
const REVALIDATE_SECONDS = 60;

const CARD_FIELDS = `
  "slug": slug.current,
  title,
  category,
  excerpt,
  publishedAt,
  readingMinutes,
  mainImage
`;

const ALL_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { ${CARD_FIELDS} }`;
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] { ${CARD_FIELDS}, body }`;

// Shape every post the same way, whether it came from Sanity or the fallback list
function toCard(post) {
  if (!post) return null;
  return {
    slug: post.slug,
    title: post.title,
    category: post.category || '',
    excerpt: post.excerpt || '',
    publishedAt: post.publishedAt || null,
    readTime: post.readingMinutes ? `${post.readingMinutes} min read` : post.readTime || '',
    image: post.image || imageUrl(post.mainImage, 900),
    heroImage: post.image || imageUrl(post.mainImage, 1800),
    imageAlt: post.mainImage?.alt || post.title,
    body: post.body || null
  };
}

async function sanityFetch(query, params = {}) {
  return client.fetch(query, params, { next: { revalidate: REVALIDATE_SECONDS } });
}

export async function getAllPosts() {
  if (!client) return fallbackPosts.map(toCard);
  try {
    const posts = await sanityFetch(ALL_POSTS_QUERY);
    return posts.map(toCard);
  } catch (error) {
    console.error('Sanity: could not load blog posts', error);
    return [];
  }
}

export async function getPost(slug) {
  if (!client) return null;
  try {
    const post = await sanityFetch(POST_QUERY, { slug });
    if (post) return toCard(post);
    // Not in the cache - it may have just been published, so ask Sanity directly before showing a 404
    return toCard(await client.fetch(POST_QUERY, { slug }, { cache: 'no-store' }));
  } catch (error) {
    console.error(`Sanity: could not load blog post "${slug}"`, error);
    return null;
  }
}

// Newest posts other than the current one (sidebar)
export async function getLatestPosts(excludeSlug, limit = 2) {
  const posts = await getAllPosts();
  return posts.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

// Same-category posts first, topped up with other recent posts
export async function getRelatedPosts(post, limit = 3) {
  const others = (await getAllPosts()).filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
