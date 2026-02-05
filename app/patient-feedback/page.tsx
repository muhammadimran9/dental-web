import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeaderNew'

export default function PatientFeedback() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />
      <Header />
      <main className="container-custom py-16">
        <FeedbackHero />
        <TestimonialsGrid />
        <FeedbackForm />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}

function FeedbackHero() {
  return (
    <section className="text-center mb-16">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Patient
          <span className="block text-blue-600">Testimonials</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Hear what our patients have to say about their experience at DentalCare Dubai
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Share Your Experience
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialsGrid() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        What Our Patients Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard 
          name="Sarah Johnson"
          treatment="Teeth Whitening"
          rating={5}
          date="March 2024"
          comment="Amazing experience! The team was professional and the results exceeded my expectations. My smile has never been brighter!"
          avatar="👩‍⚕️"
        />
        <TestimonialCard 
          name="Mohammed Al-Rashid"
          treatment="Dental Implants"
          rating={5}
          date="February 2024"
          comment="Dr. Ahmed and his team are exceptional. The implant procedure was painless and the results look completely natural."
          avatar="👨‍⚕️"
        />
        <TestimonialCard 
          name="Emily Chen"
          treatment="Invisalign"
          rating={5}
          date="January 2024"
          comment="Best decision ever! The Invisalign treatment was comfortable and convenient. I love my new smile!"
          avatar="👩‍⚕️"
        />
        <TestimonialCard 
          name="Ahmed Hassan"
          treatment="Root Canal"
          rating={5}
          date="December 2023"
          comment="I was terrified of root canal, but Dr. Sarah made it completely painless. Highly recommend!"
          avatar="👨‍⚕️"
        />
        <TestimonialCard 
          name="Fatima Al-Mansoori"
          treatment="Cosmetic Dentistry"
          rating={5}
          date="November 2023"
          comment="The veneers transformed my smile! The attention to detail and artistic approach is incredible."
          avatar="👩‍⚕️"
        />
        <TestimonialCard 
          name="John Smith"
          treatment="General Checkup"
          rating={5}
          date="October 2023"
          comment="Professional, thorough, and caring. The entire team makes you feel comfortable and well-cared for."
          avatar="👨‍⚕️"
        />
      </div>
    </section>
  )
}

function TestimonialCard({ name, treatment, rating, date, comment, avatar }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{avatar}</div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">{name}</h4>
            <p className="text-sm text-blue-600 font-medium">{treatment}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">⭐</span>
        ))}
      </div>
      <p className="text-gray-600 italic">"{comment}"</p>
    </div>
  )
}

function FeedbackForm() {
  return (
    <section className="mb-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Share Your Experience
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
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
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Treatment Received *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option value="">Select Treatment</option>
                <option value="general">General Checkup</option>
                <option value="cleaning">Teeth Cleaning</option>
                <option value="whitening">Teeth Whitening</option>
                <option value="implants">Dental Implants</option>
                <option value="invisalign">Invisalign</option>
                <option value="veneers">Veneers</option>
                <option value="root-canal">Root Canal</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating *
              </label>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-3xl hover:text-yellow-400 transition-colors"
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Feedback *
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Share your experience with us..."
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="recommend"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
              />
              <label htmlFor="recommend" className="text-sm text-gray-700">
                I would recommend DentalCare Dubai to friends and family
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Feedback
              </button>
              <button
                type="button"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="mb-16 bg-blue-50 rounded-2xl p-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Our Patient Satisfaction
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <StatCard 
          number="4.9/5"
          label="Average Rating"
          icon="⭐"
        />
        <StatCard 
          number="98%"
          label="Satisfaction Rate"
          icon="😊"
        />
        <StatCard 
          number="5000+"
          label="Happy Patients"
          icon="👥"
        />
        <StatCard 
          number="15+"
          label="Years Experience"
          icon="🏆"
        />
      </div>
    </section>
  )
}

function StatCard({ number, label, icon }) {
  return (
    <div className="text-center bg-white rounded-xl p-6 shadow-md">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}
