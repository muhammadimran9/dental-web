import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import TrustHighlights from '@/components/home/TrustHighlights'
import { metadata as homeMetadata } from './homeMetadata'

// Lazy load below-the-fold components
const AboutClinic = dynamic(() => import('@/components/home/AboutClinic'))
const ServicesPreview = dynamic(() => import('@/components/home/ServicesPreview'))
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'))
const TeamPreview = dynamic(() => import('@/components/home/TeamPreview'))
const PatientTestimonials = dynamic(() => import('@/components/home/PatientTestimonials'))
const EmergencyCare = dynamic(() => import('@/components/home/EmergencyCare'))
const CTABanner = dynamic(() => import('@/components/home/CTABanner'))

export const metadata = homeMetadata

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustHighlights />
      <AboutClinic />
      <ServicesPreview />
      <WhyChooseUs />
      <TeamPreview />
      <PatientTestimonials />
      <EmergencyCare />
      <CTABanner />
    </div>
  )
}
