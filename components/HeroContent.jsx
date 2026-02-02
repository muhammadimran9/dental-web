import Link from 'next/link'
import Button from './Button'

export default function HeroContent() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Transform Your Smile
        <span className="block text-gradient">Today</span>
      </h1>
      <p className="text-xl text-gray-100 mb-8 leading-relaxed">
        Experience premium dental care with our patient-focused approach. 
        Book now and get 10% off your first visit!
      </p>
      <HeroButtons />
    </div>
  )
}

function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/appointment">
        <Button variant="primary" className="bg-accent hover:bg-accent/90 text-white shadow-lg transform hover:scale-105 transition-all">
          Book Now - Save 10%
        </Button>
      </Link>
      <a href="tel:+1234567890">
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
          Call Emergency
        </Button>
      </a>
    </div>
  )
}
