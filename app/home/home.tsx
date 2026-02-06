import Hero from '@/components/Hero'
import ContactHeader from '@/components/ContactHeader'
import TrustHighlights from '@/components/TrustHighlights'
import ServicesPreview from '@/components/ServicesPreview'
import GulfTrustBadges from '@/components/GulfTrustBadges'
import GulfTestimonials from '@/components/GulfTestimonials'
import TechnologyShowcase from '@/components/TechnologyShowcase'
import VirtualTour from '@/components/VirtualTour'
import PatientStories from '@/components/PatientStories'
import WhyChooseUs from '@/components/WhyChooseUs'
import DoctorHighlight from '@/components/DoctorHighlight'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import EmergencyCare from '@/components/EmergencyCare'
import InsuranceFinancing from '@/components/InsuranceFinancing'
import CTABanner from '@/components/CTABanner'
import StickyWhatsApp from '@/components/StickyWhatsApp'

export default function Home() {
  return (
    <div>
      <Hero />
      <GulfTrustBadges />
      <TrustHighlights />
      <ServicesPreview />
      <GulfTestimonials />
      <TechnologyShowcase />
      <VirtualTour />
      <PatientStories />
      <WhyChooseUs />
      <DoctorHighlight />
      <TestimonialsSlider />
      <InsuranceFinancing />
      <CTABanner />
      <StickyWhatsApp />
    </div>
  )
}
