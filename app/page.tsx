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
