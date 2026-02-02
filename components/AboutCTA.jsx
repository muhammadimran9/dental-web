import QuickBookingForm from './QuickBookingForm'

export default function AboutCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Care?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied patients who trust us with their smiles. 
              Book your consultation today and take the first step towards optimal dental health.
            </p>
            <div className="grid grid-cols-2 gap-4 text-white">
              <div>
                <h4 className="font-bold text-2xl mb-2">20+</h4>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-2">10,000+</h4>
                <p className="text-white/80">Happy Patients</p>
              </div>
            </div>
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
