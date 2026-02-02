import Link from 'next/link'
import Button from '../Button'

export default function HeroContent() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
        <span className="text-accent font-semibold">Premium Dental Care Dubai</span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Your Trusted Dental
        <span className="block text-gradient">Excellence in Dubai</span>
      </h1>
      <p className="text-xl text-gray-100 mb-8 leading-relaxed">
        World-class dental care in the heart of Dubai. 
        Internationally trained dentists, state-of-the-art technology.
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
          Book Appointment
        </Button>
      </Link>
      <a href="tel:+971501234567">
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
          Call +971 50 123 4567
        </Button>
      </a>
    </div>
  )
}
