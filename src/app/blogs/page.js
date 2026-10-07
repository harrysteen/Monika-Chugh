import BlogsPageClient from '../../components/BlogsPageClient';
import { getAllPosts } from '../../sanity/lib/posts';

// Re-check Sanity for new or edited blogs at most once a minute
export const revalidate = 60;

export const metadata = {
  title: 'Blogs | Monika Chugh - Author & Artist',
  description: 'Reflections, stories, and lessons from Monika Chugh on healing, growth, spirituality, and living with intention.'
};

export default async function BlogsPage() {
  const posts = await getAllPosts();
  return <BlogsPageClient posts={posts} />;
}
