export default function PricingSection() {
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
