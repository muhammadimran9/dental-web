import Hero from '@/components/Hero'
import TrustHighlights from '@/components/TrustHighlights'
import ServicesPreview from '@/components/ServicesPreview'
import TechnologyShowcase from '@/components/TechnologyShowcase'
import VirtualTour from '@/components/VirtualTour'
import PatientStories from '@/components/PatientStories'
import WhyChooseUs from '@/components/WhyChooseUs'
import DoctorHighlight from '@/components/DoctorHighlight'
import Testimonials from '@/components/Testimonials'
import EmergencyCare from '@/components/EmergencyCare'
import InsuranceFinancing from '@/components/InsuranceFinancing'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustHighlights />
      <ServicesPreview />
      <TechnologyShowcase />
      <VirtualTour />
      <PatientStories />
      <WhyChooseUs />
      <DoctorHighlight />
      <Testimonials />
      <EmergencyCare />
      <InsuranceFinancing />
      <CTABanner />
    </div>
  )
}
