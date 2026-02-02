import Link from 'next/link'
import Button from './Button'
import QuickBookingForm from './QuickBookingForm'

export default function CTABanner() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Dream Smile?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book now and get 10% off your first visit. 
              Emergency appointments available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment">
                <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-white">
                  Full Booking
                </Button>
              </Link>
              <a href="tel:+1234567890">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Call Emergency
                </Button>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Quick Booking
            </h3>
            <QuickBookingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
