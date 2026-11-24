import { post } from './post';
import { book } from './book';
import { poem } from './poem';
import { quoteOfTheMonth } from './quoteOfTheMonth';

export const schemaTypes = [post, book, poem, quoteOfTheMonth];

// Types that have exactly one document (edited directly, never created or deleted)
export const singletonTypes = new Set(['quoteOfTheMonth']);
