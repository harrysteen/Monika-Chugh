'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import EventsHero from '../../components/EventsHero';
import EventsMomentsFilter from '../../components/EventsMomentsFilter';
import EventsFeaturedQuoteCafe from '../../components/EventsFeaturedQuoteCafe';
import EventsMoreMoments from '../../components/EventsMoreMoments';
import Footer from '../../components/Footer';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('quote-cafe');

  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden">
      <Header activePage="events" />
      <EventsHero />
      <EventsMomentsFilter activeTab={activeTab} onTabChange={setActiveTab} />
      <EventsFeaturedQuoteCafe activeTab={activeTab} />
      <EventsMoreMoments />
      <Footer />
    </main>
  );
}
