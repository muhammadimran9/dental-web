import ContactHero from './ContactHero'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import MapSection from './MapSection'
import FAQSection from './FAQSection'

export default function ContactUs() {
  return (
    <main className="container-custom py-16">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      <FAQSection />
    </main>
  )
}
