// One-time import of the site's 6 existing blogs into Sanity.
//
// Run from the project folder:
//   node --env-file=.env.local scripts/seed-sanity-blogs.mjs
//
// Needs SANITY_API_WRITE_TOKEN in .env.local (an Editor token from
// sanity.io/manage -> API -> Tokens). Safe to run again: each blog has a fixed ID,
// so re-running updates the same 6 posts instead of creating duplicates.

import { createClient } from '@sanity/client';
import { createReadStream } from 'node:fs';
import { randomUUID } from 'node:crypto';
import path from 'node:path';

const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset = 'production', SANITY_API_WRITE_TOKEN: token } = process.env;

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-10-01', useCdn: false });

const key = () => randomUUID().replace(/-/g, '').slice(0, 12);

// Build Portable Text blocks. Strings are paragraphs; { h2 } / { strong } make a heading or a bold line.
function blocks(parts) {
  return parts.map((part) => {
    const style = part.h2 ? 'h2' : 'normal';
    const text = part.h2 || part.strong || part;
    return {
      _type: 'block',
      _key: key(),
      style,
      markDefs: [],
      children: [{ _type: 'span', _key: key(), text, marks: part.strong ? ['strong'] : [] }]
    };
  });
}

const blogs = [
  {
    slug: 'the-silent-ache-of-a-guru',
    title: 'The Silent Ache of a Guru',
    category: 'Spirituality',
    image: 'featured_guru.jpg',
    readingMinutes: 5,
    publishedAt: '2026-08-18T09:00:00Z',
    body: [
      'The journey of a spiritual guide is often painted as one of effortless tranquility. Yet, behind every luminous presence lies an unspoken ache—the weight of holding space for thousands of seeking hearts while walking the lonely path between human vulnerability and boundless transcendence.',
      'When we sit in the silence of deep meditation, we begin to realize that enlightenment does not divorce us from earthly empathy; rather, it amplifies our connection to every ripple of human joy and suffering.'
    ]
  },
  {
    slug: 'write-write-write',
    title: 'Write. Write. Write...',
    category: 'Self Growth',
    image: 'writing.jpg',
    readingMinutes: 4,
    publishedAt: '2026-08-14T09:00:00Z',
    excerpt: 'The hardest lesson for me has been learning to let go. What finally helped came subtly, through my own words: on tissue papers, journals, sticky notes and restaurant napkins.',
    body: [
      'The hardest lesson for me has been learning to let go, and truly, it wasn’t easy. There was so much I was carrying, old weight, baggage without any meaning.',
      'It was ingrained into my cells, my bones, plastered all over. So much self-pity, which was dooming me. Every few months, I would tell myself, “This is it, I’ve let go,” and then, somehow, it would return. Boomerang effect. And I would find myself holding on all over again. Total mess, a cycle I didn’t fully understand.',
      'But then, something came subtly, through “my own words.” The ones I wrote to myself. On tissue papers, notepads, journals, sticky notes, restaurant napkins, you name it. Coffee and words became my saviors, holding me when nothing else could.',
      '2019 felt heavy, 2020–2021 even more so, but somewhere in those pages, I dissolved, and something started to move.',
      'My words and I created a motherly connection. They questioned me, held me, hugged me, and sometimes even felt stern, but they lingered. My confidantes, my best friends. And slowly, very slowly, they showed me that life was not as complicated as we made it out to be. That somewhere, in the middle of everything, there was still beauty. We just had to allow ourselves to see it.',
      'I began turning inward; my inner nucleus, that core, was what needed attention. It was asking for help.',
      'Turning point; Not overnight, not perfect, but something allowed me to breathe.',
      'I tried many things, listening, learning, seeking, but what stayed with me was this: how I spoke to myself.',
      { strong: 'MY WORDS.' },
      { h2: 'But if there is one thing I would say, it’s this: JUST WRITE.' },
      'Your WORDS will surprise you in ways nothing else can. They will hold you, challenge you, and walk you back to yourself.',
      'Sometimes, all you need to do is empty your vessel and keep refilling it, again and again. Give yourself the permission to be incomplete.',
      'You will not go wrong, only right.',
      { strong: 'TRUST ME!' }
    ]
  },
  {
    slug: 'what-is-love-after-all',
    title: 'What is love after all?',
    category: 'Relationships',
    image: 'love.jpg',
    readingMinutes: 6,
    publishedAt: '2026-08-10T09:00:00Z',
    body: [
      'Love is neither ownership nor an eternal emotional high. In its truest essence, love is unconditional witnessing—the gentle art of allowing another soul to unfold in their fullness without demanding that they bend to fit our expectations.',
      'When two people walk together across the wild meadow of life, true intimacy blossoms not from losing oneself in the other, but from creating a sacred space where both can grow with fearless freedom.'
    ]
  },
  {
    slug: 'motivators-singing-out',
    title: 'Motivators Singing out',
    category: 'Travel',
    image: 'travel.jpg',
    readingMinutes: 5,
    publishedAt: '2026-08-06T09:00:00Z',
    body: [
      'The open road carries an ancient frequency of renewal. Stripping away familiar walls, travel introduces us to the vastness of the horizon and reminds us how small yet significant our place in the universe truly is.',
      'Every winding mountain curve and sun-drenched valley whispers the same forgotten truth: the journey itself is the home we have been searching for all along.'
    ]
  },
  {
    slug: 'brimless-soul',
    title: 'Brimless Soul',
    category: 'Health',
    image: 'birds.jpg',
    readingMinutes: 4,
    publishedAt: '2026-08-02T09:00:00Z',
    body: [
      'Like a flock of white birds soaring effortlessly into the golden morning dawn, our inner spirit knows no rigid boundaries. We spend so much energy trying to fit into tight boxes created by circumstance, forgetting that our true nature is boundless and expansive.',
      'Take a deep breath. Let go of the need to control the currents of life, and trust the wings that were woven into your spirit.'
    ]
  },
  {
    slug: 'heal',
    title: 'Heal',
    category: 'Inspiration',
    image: 'heal.jpg',
    readingMinutes: 7,
    publishedAt: '2026-07-28T09:00:00Z',
    body: [
      'Healing rarely arrives with trumpets and fireworks. More often, it enters as a gentle shaft of light breaking quietly through overcast clouds on an ordinary afternoon. It is the subtle moment when you realize you no longer flinch at old memories.',
      'Be patient with your healing timeline. The soil must rest in the dark before the flower can blossom in radiance.'
    ]
  }
];

// Short card excerpt: the first paragraph, cut at a word boundary
function makeExcerpt(blog) {
  if (blog.excerpt) return blog.excerpt;
  const first = blog.body.find((p) => typeof p === 'string') || '';
  if (first.length <= 200) return first;
  return first.slice(0, first.lastIndexOf(' ', 197)) + '...';
}

const imagesDir = path.join(process.cwd(), 'public', 'images', 'blogs');

for (const blog of blogs) {
  const asset = await client.assets.upload('image', createReadStream(path.join(imagesDir, blog.image)), { filename: blog.image });

  const doc = {
    _id: `post-${blog.slug}`,
    _type: 'post',
    title: blog.title,
    slug: { _type: 'slug', current: blog.slug },
    category: blog.category,
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id }, alt: blog.title },
    excerpt: makeExcerpt(blog),
    publishedAt: blog.publishedAt,
    readingMinutes: blog.readingMinutes,
    body: blocks(blog.body)
  };

  await client.createOrReplace(doc);
  console.log(`✓ ${blog.title}  ->  /blogs/${blog.slug}`);
}

console.log('\nDone. Refresh /blogs to see the posts (allow up to a minute for the cache).');
