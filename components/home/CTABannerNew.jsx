import Link from 'next/link'
import Button from '../ui/ButtonNew'
import QuickBookingForm from './CTAQuickBooking'

export default function CTABanner() {
  return (
    <section className="section-padding bg-blue-600 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <CTAContent />
          <CTAForm />
        </div>
      </div>
    </section>
  )
}

function CTAContent() {
  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready for Your Dream Smile?
      </h2>
      <p className="text-xl text-white/90 mb-8">
        Book now and get 10% off your first visit. 
        Emergency appointments available 24/7.
      </p>
      <CTAButtons />
    </div>
  )
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/appointment">
        <Button variant="secondary" className="bg-blue-500 hover:bg-blue-400 text-white">
          Full Booking
        </Button>
      </Link>
      <a href="tel:+971501234567">
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
          Call Emergency
        </Button>
      </a>
    </div>
  )
}

function CTAForm() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Quick Booking
      </h3>
      <QuickBookingForm />
    </div>
  )
}
