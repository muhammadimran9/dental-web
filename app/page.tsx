import HeroSlider from '@/components/home/HeroSlider'
import ServicesPreview from '@/components/home/ServicesPreview'
import TeamPreview from '@/components/home/TeamPreview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import SmileGallery from '@/components/home/SmileGallery'
import Newsletter from '@/components/home/Newsletter'
import { metadata as homeMetadata } from './homeMetadata'

export const metadata = homeMetadata

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ServicesPreview />
      <TeamPreview />
      <WhyChooseUs />
      <Testimonials />
      <SmileGallery />
      <Newsletter />
    </div>
  )
}
