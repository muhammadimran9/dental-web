import Link from 'next/link'
import Button from '../ui/Button'
import CheckCircleIcon from '../icons/CheckCircleIcon'

export default function HeroContent() {
  return (
    <div className="space-y-8">
      {/* Trust Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
        <span className="text-blue-700 font-medium text-sm">DHA Licensed • 15+ Years Experience</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Exceptional Dental Care
          <span className="block text-blue-600">in the Heart of Dubai</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          Experience world-class dentistry with internationally trained specialists. 
          Advanced technology, personalized care, and beautiful smiles since 2008.
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
        <div>
          <div className="text-2xl font-bold text-gray-900">50,000+</div>
          <div className="text-sm text-gray-600">Happy Patients</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">15+</div>
          <div className="text-sm text-gray-600">Years Experience</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">4.9/5</div>
          <div className="text-sm text-gray-600">Patient Rating</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/appointment">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Book Your Appointment
          </Button>
        </Link>
        <Link href="/services">
          <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold">
            View Our Services
          </Button>
        </Link>
      </div>

      {/* Contact Info */}
      <div className="flex items-center gap-6 text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm">Available 24/7 for Emergencies</span>
        </div>
        <a href="tel:+971501234567" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
          +971 50 123 4567
        </a>
      </div>
    </div>
  )
}
