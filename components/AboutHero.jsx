import Button from './ui/Button'
import Link from 'next/link'
import UniversalHero from './ui/UniversalHero'

export default function AboutHero() {
  return (
    <UniversalHero 
      title="Our Mission: Your"
      subtitle="Healthy Smile"
      description="Providing exceptional dental care with 20+ years of excellence, compassion, and cutting-edge technology for your perfect smile."
      backgroundImage="/dental-images/appointment-bg.jpg"
      overlayOpacity="bg-black/60"
    >
      <Link href="/appointment">
        <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-white">
          Book Consultation
        </Button>
      </Link>
    </UniversalHero>
  )
}
