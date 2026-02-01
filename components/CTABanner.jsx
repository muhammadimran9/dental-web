import Link from 'next/link'
import Button from './Button'

export default function CTABanner() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Book Your Appointment Today
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Take the first step towards a healthier, brighter smile. 
          Schedule your consultation with our expert team.
        </p>
        <Link href="/appointment">
          <Button variant="secondary" className="bg-secondary hover:bg-secondary-light">
            Schedule Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
