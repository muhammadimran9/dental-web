import Link from 'next/link'
import Button from '../ui/Button'
import UniversalHero from '../ui/UniversalHero'

export default function Hero() {
  return (
    <UniversalHero 
      title="Transform Your Smile Today"
      subtitle="Expert Dental Care in Dubai"
      description="Experience world-class dental treatments with our internationally trained specialists. From routine check-ups to advanced cosmetic procedures, we're here to help you achieve the perfect smile."
      backgroundImage="/components/images/home-img.webp"
      overlayOpacity="bg-black/50"
    >
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/appointment">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Book Appointment
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
            Contact Us
          </Button>
        </Link>
      </div>
    </UniversalHero>
  )
}
