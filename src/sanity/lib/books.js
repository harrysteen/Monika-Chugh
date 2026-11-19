import { client, imageUrl } from './client';
import { fallbackBooks } from './fallbackBooks';

// The Books page re-checks Sanity at most once a minute, so edits go live without a redeploy
const REVALIDATE_SECONDS = 60;

const BOOKS_QUERY = `*[_type == "book"] | order(order asc, title asc) {
  _id, status, order, title, description, amazonLink, learnMoreLink, flatlay, cover
}`;

// Shape a Sanity book the same way as the fallback list
function toBook(book) {
  return {
    id: book._id,
    status: book.status,
    title: book.title,
    flatlay: imageUrl(book.flatlay, 1600),
    flatlayAlt: book.flatlay?.alt || book.title,
    cover: imageUrl(book.cover, 600),
    description: book.description || '',
    learnMoreLink: book.learnMoreLink || '#',
    amazonLink: book.amazonLink || ''
  };
}

function split(books) {
  return {
    published: books.filter((b) => b.status !== 'upcoming'),
    upcoming: books.filter((b) => b.status === 'upcoming')
  };
}

// Returns { published, upcoming } for the Books page
export async function getCatalogBooks() {
  if (!client) return split([...fallbackBooks].sort((a, b) => a.order - b.order));
  try {
    const books = await client.fetch(BOOKS_QUERY, {}, { next: { revalidate: REVALIDATE_SECONDS } });
    return split(books.map(toBook));
  } catch (error) {
    console.error('Sanity: could not load books', error);
    return split([...fallbackBooks].sort((a, b) => a.order - b.order));
  }
}
