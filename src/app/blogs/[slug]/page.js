import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import BlogPostView from '../../../components/BlogPostView';
import Footer from '../../../components/Footer';
import { getPost, getLatestPosts, getRelatedPosts } from '../../../sanity/lib/posts';

// Re-check Sanity for edits at most once a minute; new blogs work straight away
export const revalidate = 60;

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Blog not found | Monika Chugh' };
  return {
    title: `${post.title} | Monika Chugh - Author & Artist`,
    description: post.excerpt,
    openGraph: post.heroImage ? { images: [post.heroImage] } : undefined
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const [latestPosts, relatedPosts] = await Promise.all([
    getLatestPosts(post.slug, 2),
    getRelatedPosts(post, 3)
  ]);

  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="blogs" />
      <BlogPostView post={post} latestPosts={latestPosts} relatedPosts={relatedPosts} />
      <Footer />
    </main>
  );
}
