import Link from 'next/link'
import Button from './Button'

export default function HeroContent() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Modern & Trusted 
        <span className="block text-gradient">Dental Care</span>
        in Your City
      </h1>
      <p className="text-xl text-gray-100 mb-8 leading-relaxed">
        Experience premium dental care with our patient-focused approach. 
        We combine modern technology with compassionate service.
      </p>
      <HeroButtons />
    </div>
  )
}

function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/appointment">
        <Button variant="primary" className="bg-white text-primary hover:bg-gray-100 shadow-lg">
          Book Appointment
        </Button>
      </Link>
      <a href="tel:+1234567890">
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
          Call Now
        </Button>
      </a>
    </div>
  )
}
