import QuickBookingForm from './home/QuickBookingForm'
import Image from 'next/image'

export default function AboutCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Care?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Join thousands of satisfied patients who trust us with their smiles. 
              Book your consultation today and take the first step towards optimal dental health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 lg:mb-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <h4 className="font-bold text-3xl mb-4 text-primary">20+</h4>
                <p className="text-white/80 text-lg">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-3xl mb-4 text-primary">10,000+</h4>
                <p className="text-white/80 text-lg">Happy Patients</p>
              </div>
            </div>
          </div>
            
          <div className="relative rounded-xl overflow-hidden shadow-2xl lg:order-first lg:order-last">
            <Image
              src="/dental-images/dental-veneers.jpg"
              alt="Happy patient with beautiful smile"
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
            
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Book Your Consultation
            </h3>
            <QuickBookingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
