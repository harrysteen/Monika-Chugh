// One-time import of the site's existing books (3 published + 3 upcoming) into Sanity.
//
// Run from the project folder:
//   node --env-file=.env.local scripts/seed-sanity-books.mjs
//
// Needs SANITY_API_WRITE_TOKEN in .env.local. Safe to run again: each book has a fixed ID,
// so re-running updates the same books instead of creating duplicates.

import { createClient } from '@sanity/client';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fallbackBooks } from '../src/sanity/lib/fallbackBooks.js';

const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset = 'production', SANITY_API_WRITE_TOKEN: token } = process.env;

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-10-01', useCdn: false });

const publicDir = path.join(process.cwd(), 'public');

async function uploadImage(publicPath, alt) {
  if (!publicPath) return undefined;
  const filename = path.basename(publicPath);
  const asset = await client.assets.upload('image', createReadStream(path.join(publicDir, publicPath)), { filename });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id }, ...(alt ? { alt } : {}) };
}

for (const book of fallbackBooks) {
  const doc = {
    _id: `book-${book.id}`,
    _type: 'book',
    title: book.title,
    status: book.status,
    order: book.order,
    flatlay: await uploadImage(book.flatlay, book.title),
    cover: await uploadImage(book.cover),
    description: book.description,
    ...(book.amazonLink ? { amazonLink: book.amazonLink } : {}),
    ...(book.learnMoreLink ? { learnMoreLink: book.learnMoreLink } : {})
  };

  await client.createOrReplace(doc);
  console.log(`✓ ${book.status === 'upcoming' ? 'Upcoming ' : 'Published'}  ${book.title}`);
}

console.log('\nDone. Refresh /books to see them (allow up to a minute for the cache).');
