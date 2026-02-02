import ContactForm from '@/components/ContactForm'
import ContactMap from '@/components/ContactMap'
import ContactDetails from '@/components/ContactDetails'
import EmergencyBanner from '@/components/EmergencyBanner'

export const dynamic = 'force-dynamic'

export default function Contact() {
  return (
    <div>
      {/* Emergency Banner */}
      <EmergencyBanner />
      
      {/* Contact Hero */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions about our dental services? We're here to help. 
            Contact us today to schedule your appointment.
          </p>
        </div>
      </section>

      {/* Contact Details Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us
            </p>
          </div>
          <ContactDetails />
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactMap />
          </div>
        </div>
      </section>
    </div>
  )
}
