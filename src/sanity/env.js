// Sanity connection settings, read from .env.local (see .env.local.example)
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';

// Until a project ID is added, the site keeps showing the built-in fallback blogs
export const isSanityConfigured = Boolean(projectId);
