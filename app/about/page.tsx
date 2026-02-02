import AboutHero from '@/components/AboutHero'
import ContactHeader from '@/components/ContactHeader'
import AboutStory from '@/components/AboutStory'
import AboutApproach from '@/components/AboutApproach'
import AboutValues from '@/components/AboutValues'
import AboutWhyChoose from '@/components/AboutWhyChoose'
import AboutHygiene from '@/components/AboutHygiene'
import AboutCTA from '@/components/AboutCTA'

export default function About() {
  return (
    <div>
      <ContactHeader />
      <AboutHero />
      <AboutStory />
      <AboutApproach />
      <AboutValues />
      <AboutWhyChoose />
      <AboutHygiene />
      <AboutCTA />
    </div>
  )
}
