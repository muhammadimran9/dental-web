import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeaderNew'

export default function Invisalign() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />
      <Header />
      <main className="container-custom py-16">
        <InvisalignHero />
        <InvisalignBenefits />
        <TreatmentProcess />
        <TechnologySection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

function InvisalignHero() {
  return (
    <section className="text-center mb-16">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Invisalign
          <span className="block text-blue-600">Clear Aligners</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your smile with virtually invisible aligners. The modern alternative to traditional braces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Your Journey
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

function InvisalignBenefits() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Why Choose Invisalign?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard 
          icon="👁️"
          title="Virtually Invisible"
          description="Clear aligners that are barely noticeable, perfect for professionals and adults."
        />
        <BenefitCard 
          icon="🦷"
          title="Removable"
          description="Eat, drink, and clean normally. No food restrictions like traditional braces."
        />
        <BenefitCard 
          icon="⏱️"
          title="Faster Results"
          description="Average treatment time of 12-18 months, faster than traditional braces."
        />
        <BenefitCard 
          icon="😊"
          title="Comfortable"
          description="Smooth plastic aligners without metal brackets or wires."
        />
        <BenefitCard 
          icon="📱"
          title="SmartTrack Technology"
          description="Advanced material for more predictable and comfortable tooth movement."
        />
        <BenefitCard 
          icon="🎯"
          title="Precise Results"
          description="3D digital planning ensures accurate and predictable outcomes."
        />
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TreatmentProcess() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Your Invisalign Journey
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number="1"
          title="Consultation"
          description="Free consultation to assess your smile and discuss treatment goals."
        />
        <ProcessStep 
          number="2"
          title="3D Scan"
          description="Digital scan creates precise 3D model of your teeth."
        />
        <ProcessStep 
          number="3"
          title="Custom Plan"
          description="Personalized treatment plan with virtual preview of results."
        />
        <ProcessStep 
          number="4"
          title="Aligners"
          description="Receive your custom aligners and start your transformation."
        />
      </div>
    </section>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        {number}
      </div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TechnologySection() {
  return (
    <section className="mb-16 bg-blue-50 rounded-2xl p-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Advanced Technology
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <TechCard 
          icon="📊"
          title="ClinCheck 3D"
          description="See your virtual treatment plan and expected results before starting."
        />
        <TechCard 
          icon="🦷"
          title="SmartTrack Material"
          description="Proprietary material for gentle, constant tooth movement."
        />
        <TechCard 
          icon="📱"
          title="Invisalign App"
          description="Track progress and get reminders with the mobile app."
        />
        <TechCard 
          icon="🎯"
          title="Precision Fit"
          description="Custom-made aligners using advanced 3D printing technology."
        />
      </div>
    </section>
  )
}

function TechCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

function PricingSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Investment in Your Smile
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard 
          title="Simple Case"
          price="From AED 12,000"
          duration="6-12 months"
          features={[
            "Up to 14 aligners",
            "Regular check-ups",
            "Retainers included",
            "Payment plans available"
          ]}
          popular={false}
        />
        <PricingCard 
          title="Moderate Case"
          price="From AED 18,000"
          duration="12-18 months"
          features={[
            "Up to 26 aligners",
            "Regular check-ups",
            "Retainers included",
            "Payment plans available"
          ]}
          popular={true}
        />
        <PricingCard 
          title="Complex Case"
          price="From AED 25,000"
          duration="18-24 months"
          features={[
            "Up to 40+ aligners",
            "Regular check-ups",
            "Retainers included",
            "Payment plans available"
          ]}
          popular={false}
        />
      </div>
    </section>
  )
}

function PricingCard({ title, price, duration, features, popular }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${popular ? 'ring-2 ring-blue-600' : ''} hover:shadow-xl transition-all`}>
      {popular && (
        <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-6">{duration}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
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
          question="How long does Invisalign treatment take?"
          answer="Treatment time varies from 6 to 24 months depending on your case complexity. Most adults complete treatment in 12-18 months."
        />
        <FAQItem 
          question="Is Invisalign painful?"
          answer="Invisalign is generally more comfortable than traditional braces. You may feel temporary discomfort when switching to new aligners, but this typically subsides within a few days."
        />
        <FAQItem 
          question="Can I eat with aligners in?"
          answer="No, you should remove your aligners when eating or drinking anything other than water. This is one of the main advantages over traditional braces."
        />
        <FAQItem 
          question="How often do I need to wear aligners?"
          answer="For best results, wear your aligners 20-22 hours per day, removing them only for eating, drinking, and oral hygiene."
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
