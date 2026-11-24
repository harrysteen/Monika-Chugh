// One-time import of the current home page "quote of the month" into Sanity.
//
// Run from the project folder:
//   node --env-file=.env.local scripts/seed-sanity-quote.mjs
//
// Needs SANITY_API_WRITE_TOKEN in .env.local. Safe to run again, but it overwrites
// whatever quote is currently in Sanity.

import { createClient } from '@sanity/client';
import { fallbackQuote } from '../src/sanity/lib/fallbackQuote.js';

const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset = 'production', SANITY_API_WRITE_TOKEN: token } = process.env;

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-10-01', useCdn: false });

await client.createOrReplace({
  _id: 'quoteOfTheMonth',
  _type: 'quoteOfTheMonth',
  quote: fallbackQuote.lines.join('\n'),
  author: fallbackQuote.author
});

console.log('✓ Quote of the Month saved. Refresh the home page (allow up to a minute for the cache).');
