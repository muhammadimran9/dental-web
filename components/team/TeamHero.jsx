import Button from '../ui/Button'
import Link from 'next/link'
import UniversalHero from '../ui/UniversalHero'

export default function TeamHero() {
  return (
    <UniversalHero 
      title="Internationally Trained"
      subtitle="Dubai's Elite Dental Professionals"
      description="Our Dubai-based team brings world-class expertise from Harvard, King's College London, and leading international institutions. All DHA licensed professionals serving UAE."
      backgroundImage="/dental-images/man-150x150.png"
      overlayOpacity="bg-black/60"
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Link href="/appointment">
          <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            Book Expert Consultation
          </Button>
        </Link>
        <Link href="#team-grid">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            Meet Our Team
          </Button>
        </Link>
      </div>
    </UniversalHero>
  )
}
