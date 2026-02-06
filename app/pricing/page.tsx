export default function Pricing() {
  return (
    <div className="container-custom py-16">
      <PricingHero />
      <PricingPlans />
      <DentalPlan />
    </div>
  )
}

function PricingHero() {
  return (
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Transparent Pricing
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Clear, competitive pricing with no hidden fees
      </p>
    </section>
  )
}

function PricingPlans() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard 
          title="Basic Checkup" 
          price="299" 
          features={[
            "Complete dental examination",
            "X-rays if needed", 
            "Cleaning & polishing",
            "Treatment plan"
          ]}
        />
        <PricingCard 
          title="Standard Care" 
          price="599" 
          features={[
            "Everything in Basic",
            "Deep cleaning",
            "Fluoride treatment",
            "Oral hygiene education"
          ]}
          popular
        />
        <PricingCard 
          title="Premium Package" 
          price="999" 
          features={[
            "Everything in Standard",
            "Teeth whitening",
            "Laser cleaning",
            "3-month follow-up"
          ]}
        />
      </div>
    </section>
  )
}

function PricingCard({ title, price, features, popular = false }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${popular ? 'ring-2 ring-blue-600' : ''}`}>
      {popular && (
        <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-blue-600 mb-6">
        AED {price}
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DentalPlan() {
  return (
    <section className="bg-blue-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Dental Membership Plan
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            AED 199/month
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-600">✓ 2 free checkups per year</li>
            <li className="text-gray-600">✓ 20% off all treatments</li>
            <li className="text-gray-600">✓ Priority appointments</li>
            <li className="text-gray-600">✓ Emergency care coverage</li>
            <li className="text-gray-600">✓ Family discounts available</li>
          </ul>
        </div>
        <div className="text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">Save 40%</div>
            <div className="text-gray-600">Compared to pay-per-visit</div>
          </div>
        </div>
      </div>
    </section>
  )
}
