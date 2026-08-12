import Header from '../components/Header';
import Hero from '../components/Hero';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';
import SixthSection from '../components/SixthSection';
import SeventhSection from '../components/SeventhSection';
import EighthSection from '../components/EighthSection';
import NinthSection from '../components/NinthSection';
import TenthSection from '../components/TenthSection';
import EleventhSection from '../components/EleventhSection';
import TwelfthSection from '../components/TwelfthSection';
import AboutSection from '../components/AboutSection';
import PortfolioGrid from '../components/PortfolioGrid';
import TypographySpecimen from '../components/TypographySpecimen';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden">
      <Header />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
      <TenthSection />
      <EleventhSection />
      <TwelfthSection />
      <AboutSection />
      <PortfolioGrid />
      <TypographySpecimen />
      <ContactSection />
      <Footer />
    </main>
  );
}
