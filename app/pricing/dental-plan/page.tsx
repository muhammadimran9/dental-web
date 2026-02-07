import { GiftIcon, ToothIcon, LightningIcon } from '@/components/ui/Icons'

export default function DentalPlan() {
  return (
    <div className="container-custom py-16">
      <PlanHero />
      <PlanBenefits />
      <PlanOptions />
      <PlanComparison />
    </div>
  )
}

function PlanHero() {
  return (
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Dental Membership Plan
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive dental care with affordable monthly payments
      </p>
    </section>
  )
}

function PlanBenefits() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Our Plan?
          </h2>
          <div className="space-y-4">
            <BenefitItem 
              icon={<GiftIcon className="w-8 h-8 text-blue-600" />}
              title="Affordable Monthly Payments" 
              description="Spread your dental costs with predictable monthly installments"
            />
            <BenefitItem 
              icon={<ToothIcon className="w-8 h-8 text-blue-600" />}
              title="Complete Coverage" 
              description="Preventive, diagnostic, and restorative care included"
            />
            <BenefitItem 
              icon={<LightningIcon className="w-8 h-8 text-blue-600" />}
              title="Priority Service" 
              description="Get appointments faster and emergency care when needed"
            />
          </div>
        </div>
        <div className="bg-blue-50 p-8 rounded-xl">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">AED 199</div>
            <div className="text-gray-600 mb-4">per month</div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">Save AED 2,400</div>
              <div className="text-gray-600">annually compared to standard pricing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitItem({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function PlanOptions() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Choose Your Plan
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <PlanCard 
          title="Individual" 
          price="199" 
          features={[
            "1 person covered",
            "2 checkups per year",
            "20% off treatments",
            "Emergency coverage"
          ]}
        />
        <PlanCard 
          title="Couple" 
          price="349" 
          features={[
            "2 people covered", 
            "4 checkups per year",
            "25% off treatments",
            "Emergency coverage"
          ]}
          popular
        />
        <PlanCard 
          title="Family" 
          price="499" 
          features={[
            "Up to 4 people",
            "8 checkups per year", 
            "30% off treatments",
            "Emergency coverage"
          ]}
        />
      </div>
    </section>
  )
}

function PlanCard({ title, price, features, popular = false }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${popular ? 'ring-2 ring-blue-600' : ''}`}>
      {popular && (
        <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
          Best Value
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-blue-600 mb-6">
        AED {price}
        <span className="text-lg text-gray-600">/month</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PlanComparison() {
  return (
    <section className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Plan vs Standard Pricing
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-center">Standard Price</th>
              <th className="p-4 text-center">With Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Regular Checkup</td>
              <td className="p-4 text-center">AED 299</td>
              <td className="p-4 text-center text-green-600 font-bold">FREE</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Teeth Cleaning</td>
              <td className="p-4 text-center">AED 199</td>
              <td className="p-4 text-center text-green-600 font-bold">FREE</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">X-Ray</td>
              <td className="p-4 text-center">AED 150</td>
              <td className="p-4 text-center text-green-600 font-bold">FREE</td>
            </tr>
            <tr>
              <td className="p-4">Fillings</td>
              <td className="p-4 text-center">AED 399</td>
              <td className="p-4 text-center text-blue-600 font-bold">AED 319</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
