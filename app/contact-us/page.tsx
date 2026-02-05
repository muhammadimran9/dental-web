import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeaderNew'
import ContactHero from './ContactHero'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import MapSection from './MapSection'
import FAQSection from './FAQSection'

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />
      <Header />
      <main className="container-custom py-16">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <MapSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
