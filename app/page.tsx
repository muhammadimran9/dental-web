import Hero from '@/components/Hero'
import TrustHighlights from '@/components/TrustHighlights'
import ServicesPreview from '@/components/ServicesPreview'
import WhyChooseUs from '@/components/WhyChooseUs'
import DoctorHighlight from '@/components/DoctorHighlight'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustHighlights />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorHighlight />
      <Testimonials />
      <CTABanner />
    </div>
  )
}
