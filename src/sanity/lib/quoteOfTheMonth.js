import { client } from './client';
import { fallbackQuote } from './fallbackQuote';

// The home page re-checks Sanity at most once a minute, so a new quote goes live without a redeploy
const REVALIDATE_SECONDS = 60;

const QUOTE_QUERY = `*[_id == "quoteOfTheMonth"][0] { quote, author }`;

export async function getQuoteOfTheMonth() {
  if (!client) return fallbackQuote;
  try {
    const doc = await client.fetch(QUOTE_QUERY, {}, { next: { revalidate: REVALIDATE_SECONDS } });
    const lines = (doc?.quote || '').split('\n').map((l) => l.trim()).filter(Boolean);
    if (!lines.length) return fallbackQuote;
    return { lines, author: doc.author?.trim() || '' };
  } catch (error) {
    console.error('Sanity: could not load the quote of the month', error);
    return fallbackQuote;
  }
}
