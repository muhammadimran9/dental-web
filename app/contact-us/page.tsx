import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeaderNew'

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />
      <Header />
      <main className="container-custom py-16">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <MapSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

function ContactHero() {
  return (
    <section className="text-center mb-16">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Get in
          <span className="block text-blue-600">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We're here to help you achieve your perfect smile. Reach out to us for appointments, questions, or emergencies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Book Appointment
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Emergency Contact
          </button>
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Contact Information
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ContactCard 
          icon="📍"
          title="Visit Us"
          details={[
            "DentalCare Dubai Clinic",
            "Building 12, Dubai Healthcare City",
            "Dubai, United Arab Emirates"
          ]}
          action="Get Directions"
        />
        <ContactCard 
          icon="📞"
          title="Call Us"
          details={[
            "Main: +971 4 123 4567",
            "Emergency: +971 50 123 4567",
            "WhatsApp: +971 50 123 4567"
          ]}
          action="Call Now"
        />
        <ContactCard 
          icon="📧"
          title="Email Us"
          details={[
            "info@dentalcaredubai.com",
            "appointments@dentalcaredubai.com",
            "emergencies@dentalcaredubai.com"
          ]}
          action="Send Email"
        />
      </div>
    </section>
  )
}

function ContactCard({ icon, title, details, action }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <div className="space-y-2 mb-6">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600 text-center">{detail}</p>
        ))}
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        {action}
      </button>
    </div>
  )
}

function ContactForm() {
  return (
    <section className="mb-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Send Us a Message
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+971 50 123 4567"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option value="">Select Subject</option>
                <option value="appointment">Book Appointment</option>
                <option value="emergency">Emergency</option>
                <option value="question">General Question</option>
                <option value="feedback">Feedback</option>
                <option value="billing">Billing Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Tell us how we can help you..."
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="urgent"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
              />
              <label htmlFor="urgent" className="text-sm text-gray-700">
                This is an urgent matter
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
              <button
                type="button"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Find Our Clinic
      </h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 h-96 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-xl font-semibold">Interactive Map</p>
            <p className="text-sm opacity-90">Building 12, Dubai Healthcare City</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">Clinic Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Thursday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Friday</span>
                  <span className="font-medium">2:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">Getting Here</h4>
              <div className="space-y-2">
                <p className="text-gray-600">🚗 Free parking available</p>
                <p className="text-gray-600">🚇 Dubai Metro: Healthcare City Station</p>
                <p className="text-gray-600">🚌 Bus routes: 10, 21, 28, 33</p>
                <p className="text-gray-600">♿ Wheelchair accessible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <FAQItem 
          question="Do I need an appointment?"
          answer="While we accept walk-ins, we highly recommend booking an appointment to minimize waiting time and ensure we can give you our full attention."
        />
        <FAQItem 
          question="What payment methods do you accept?"
          answer="We accept cash, all major credit cards, debit cards, and most insurance plans. We also offer flexible payment plans for larger treatments."
        />
        <FAQItem 
          question="Do you treat children?"
          answer="Yes! We have a dedicated pediatric dentistry team and child-friendly facilities to make dental visits comfortable for kids of all ages."
        />
        <FAQItem 
          question="What if I have a dental emergency?"
          answer="For dental emergencies, call our emergency line at +971 50 123 4567. We provide 24/7 emergency dental care for urgent situations."
        />
      </div>
    </section>
  )
}

function FAQItem({ question, answer }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h4 className="text-lg font-bold text-gray-800 mb-3">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
