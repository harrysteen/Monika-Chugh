import Header from '../../components/Header';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Contact | Monika Chugh - Let's Connect",
  description: "Get in touch with Monika Chugh for speaking engagements, literary inquiries, press requests, or personal connections.",
};

export default function ContactPage() {
  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden">
      <Header activePage="contact" />
      <div className="pt-4 pt-md-5">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
