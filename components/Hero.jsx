import Link from 'next/link'
import Button from './Button'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  )
}
