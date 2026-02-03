import Hero from '@/components/home/Hero'
import ContactHeader from '@/components/ContactHeader'
import AboutClinic from '@/components/home/AboutClinic'
import TrustHighlights from '@/components/home/TrustHighlights'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TeamPreview from '@/components/home/TeamPreview'
import PatientTestimonials from '@/components/home/PatientTestimonials'
import EmergencyCare from '@/components/home/EmergencyCare'
import CTABanner from '@/components/home/CTABanner'

export const metadata = {
  title: 'DentalCare Dubai - Premium Dental Services | DHA Licensed Clinic',
  description: 'World-class dental care in Dubai Healthcare City. Internationally trained dentists, state-of-the-art technology. Book your appointment today for exceptional dental care.',
  keywords: 'dental clinic Dubai, dentist Dubai, dental services Dubai, DHA licensed dentist, cosmetic dentistry Dubai, dental implants Dubai, emergency dental care Dubai',
  openGraph: {
    title: 'DentalCare Dubai - Premium Dental Services',
    description: 'World-class dental care in Dubai. Internationally trained dentists, state-of-the-art technology.',
    images: [
      {
        url: '/images/hero-dental-clinic.jpg',
        width: 1200,
        height: 630,
        alt: 'DentalCare Dubai - Premium Dental Services',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div>
      <ContactHeader />
      <Hero />
      <AboutClinic />
      <TrustHighlights />
      <ServicesPreview />
      <WhyChooseUs />
      <TeamPreview />
      <PatientTestimonials />
      <EmergencyCare />
      <CTABanner />
    </div>
  )
}
