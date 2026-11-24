import { client, imageUrl } from './client';
import { fallbackPoems } from './fallbackPoems';

// The Poems page re-checks Sanity at most once a minute, so edits go live without a redeploy
const REVALIDATE_SECONDS = 60;

const POEMS_QUERY = `*[_type == "poem"] | order(order asc, title asc) { _id, title, image, previewLines, link }`;

function toPoem(poem) {
  return {
    id: poem._id,
    title: poem.title,
    image: imageUrl(poem.image, 700),
    imageAlt: poem.image?.alt || poem.title,
    link: poem.link || '',
    lines: (poem.previewLines || '').split('\n').map((l) => l.trim()).filter(Boolean)
  };
}

const sortedFallback = () => [...fallbackPoems].sort((a, b) => a.order - b.order);

// Poems for the "Echoes of My Heart Through Verse" row
export async function getPoems() {
  if (!client) return sortedFallback();
  try {
    const poems = await client.fetch(POEMS_QUERY, {}, { next: { revalidate: REVALIDATE_SECONDS } });
    return poems.map(toPoem);
  } catch (error) {
    console.error('Sanity: could not load poems', error);
    return sortedFallback();
  }
}
