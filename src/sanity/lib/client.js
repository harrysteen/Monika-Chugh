import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId, isSanityConfigured } from '../env';

export const client = isSanityConfigured
  // useCdn: false so a just-published blog is found immediately (Next.js caches the results anyway)
  ? createClient({ projectId, dataset, apiVersion, useCdn: false })
  : null;

const builder = isSanityConfigured ? imageUrlBuilder({ projectId, dataset }) : null;

// Returns a resized image URL for a Sanity image field, or '' if there is no image
export function imageUrl(source, width = 1200) {
  if (!builder || !source?.asset) return '';
  return builder.image(source).width(width).fit('max').auto('format').url();
}
