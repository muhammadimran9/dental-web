import Hero from '@/components/home/Hero'
import ContactHeader from '@/components/ContactHeader'
import TrustHighlights from '@/components/home/TrustHighlights'
import ServicesPreview from '@/components/home/ServicesPreview'
import GulfTrustBadges from '@/components/home/GulfTrustBadges'
import GulfTestimonials from '@/components/home/GulfTestimonials'
import TechnologyShowcase from '@/components/home/TechnologyShowcase'
import VirtualTour from '@/components/home/VirtualTour'
import PatientStories from '@/components/home/PatientStories'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import DoctorHighlight from '@/components/home/DoctorHighlight'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import EmergencyCare from '@/components/home/EmergencyCare'
import InsuranceFinancing from '@/components/home/InsuranceFinancing'
import CTABanner from '@/components/home/CTABanner'
import StickyWhatsApp from '@/components/home/StickyWhatsApp'

export default function Home() {
  return (
    <div>
      <ContactHeader />
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
      <EmergencyCare />
      <InsuranceFinancing />
      <CTABanner />
      <StickyWhatsApp />
    </div>
  )
}
