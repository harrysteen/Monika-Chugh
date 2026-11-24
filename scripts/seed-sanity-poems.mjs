// One-time import of the 6 poems in the "Echoes of My Heart Through Verse" row into Sanity.
//
// Run from the project folder:
//   node --env-file=.env.local scripts/seed-sanity-poems.mjs
//
// Needs SANITY_API_WRITE_TOKEN in .env.local. Safe to run again: each poem has a fixed ID,
// so re-running updates the same poems instead of creating duplicates.

import { createClient } from '@sanity/client';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fallbackPoems } from '../src/sanity/lib/fallbackPoems.js';

const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset = 'production', SANITY_API_WRITE_TOKEN: token } = process.env;

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-10-01', useCdn: false });

const publicDir = path.join(process.cwd(), 'public');

for (const poem of fallbackPoems) {
  const filename = path.basename(poem.image);
  const asset = await client.assets.upload('image', createReadStream(path.join(publicDir, poem.image)), { filename });

  await client.createOrReplace({
    _id: `poem-${poem.id}`,
    _type: 'poem',
    title: poem.title,
    order: poem.order,
    image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id }, alt: poem.title },
    previewLines: poem.lines.join('\n'),
    link: poem.link
  });
  console.log(`✓ ${poem.title}`);
}

console.log('\nDone. Refresh /poems-articles to see them (allow up to a minute for the cache).');
