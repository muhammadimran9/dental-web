import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import ContactMap from '@/components/ContactMap'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import Button from '@/components/Button'

export const dynamic = 'force-dynamic'

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactSection />
    </div>
  )
}

function ContactSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ContactMap />
          <ContactCTA />
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <div className="text-center">
      <Link href="/appointment">
        <Button variant="primary" className="text-lg px-8 py-4">
          Book an Appointment
        </Button>
      </Link>
    </div>
  )
}
