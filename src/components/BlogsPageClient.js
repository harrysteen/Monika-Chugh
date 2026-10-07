'use client';

import { useState } from 'react';
import Header from './Header';
import BlogFeaturedHero from './BlogFeaturedHero';
import BlogGridSection from './BlogGridSection';
import Footer from './Footer';

export default function BlogsPageClient({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="blogs" />
      <BlogFeaturedHero
        post={posts[0]}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
      <BlogGridSection posts={posts} searchQuery={searchQuery} />
      <Footer />
    </main>
  );
}
