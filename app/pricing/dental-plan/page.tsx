import { GiftIcon, ToothIcon, LightningIcon, CheckCircleIcon, UsersIcon, ZapIcon } from '@/components/ui/Icons'

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
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Dental Membership Plan
      </h1>
      <p className="text-xl text-blue-600 font-medium mb-6">
        Comprehensive dental care with affordable monthly payments
      </p>
    </section>
  )
}

function PlanBenefits() {
  return (
    <section className="mb-16 bg-blue-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Our Patient Satisfaction
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          icon={<GiftIcon className="w-8 h-8 text-blue-600" />}
          title="4.9/5 Average Rating"
          description="Over 4,900 happy patients and counting"
        />
        <BenefitItem 
          icon={<ToothIcon className="w-8 h-8 text-blue-600" />}
          title="5000+ Happy Patients"
          description="Years of trusted service and exceptional care"
        />
        <BenefitItem 
          icon={<LightningIcon className="w-8 h-8 text-blue-600" />}
          title="15+ Years Experience"
          description="Decades of dental excellence and innovation"
        />
      </div>
    </section>
  )
}

function PlanOptions() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Choose Your Plan
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PlanCard 
          icon={<CheckCircleIcon className="w-8 h-8 text-blue-600" />}
          title="Individual"
          description="Perfect for occasional visitors and single treatments"
          price="AED 199"
          features={[
            "1 person covered",
            "2 checkups per year",
            "20% off treatments",
            "Emergency coverage"
          ]}
        />
        <PlanCard 
          icon={<UsersIcon className="w-8 h-8 text-blue-600" />}
          title="Couple"
          description="Ideal for families and regular care"
          price="AED 349"
          features={[
            "2 people covered",
            "2 checkups per year", 
            "20% off treatments",
            "Emergency coverage"
          ]}
        />
        <PlanCard 
          icon={<ZapIcon className="w-8 h-8 text-blue-600" />}
          title="Family"
          description="Best value for multiple family members"
          price="AED 599"
          features={[
            "4 people covered",
            "2 checkups per year",
            "20% off treatments",
            "Emergency coverage"
          ]}
        />
      </div>
    </section>
  )
}

function PlanComparison() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Our Plans vs Standard Pricing
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-left">Our Plan</th>
              <th className="p-4 text-left">Standard Pricing</th>
              <th className="p-4 text-left">You Save</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 font-medium">Individual</td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-blue-600">AED 199</div>
                  <div className="text-sm text-gray-600">1 person covered</div>
                  <div className="text-sm text-gray-600">2 checkups per year</div>
                  <div className="text-sm text-gray-600">20% off treatments</div>
                  <div className="text-sm text-gray-600">Emergency coverage</div>
                </td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-gray-600">AED 499</div>
                  <div className="text-sm text-gray-600">1 person covered</div>
                  <div className="text-sm text-gray-600">1 checkup per year</div>
                  <div className="text-sm text-gray-600">10% off treatments</div>
                  <div className="text-sm text-gray-600">No emergency coverage</div>
                </td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-blue-600">AED 300</div>
                  <div className="text-sm text-gray-600">1 person covered</div>
                  <div className="text-sm text-gray-600">1 extra checkup per year</div>
                  <div className="text-sm text-gray-600">10% more off treatments</div>
                  <div className="text-sm text-gray-600">Emergency coverage</div>
                </td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Couple</td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-blue-600">AED 349</div>
                  <div className="text-sm text-gray-600">2 people covered</div>
                  <div className="text-sm text-gray-600">2 checkups per year</div>
                  <div className="text-sm text-gray-600">20% off treatments</div>
                  <div className="text-sm text-gray-600">Emergency coverage</div>
                </td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-gray-600">AED 998</div>
                  <div className="text-sm text-gray-600">2 people covered</div>
                  <div className="text-sm text-gray-600">1 checkup per year</div>
                  <div className="text-sm text-gray-600">10% off treatments</div>
                  <div className="text-sm text-gray-600">No emergency coverage</div>
                </td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-blue-600">AED 649</div>
                  <div className="text-sm text-gray-600">2 people covered</div>
                  <div className="text-sm text-gray-600">1 extra checkup per year</div>
                  <div className="text-sm text-gray-600">10% more off treatments</div>
                  <div className="text-sm text-gray-600">Emergency coverage</div>
                </td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Family</td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-blue-600">AED 599</div>
                  <div className="text-sm text-gray-600">4 people covered</div>
                  <div className="text-sm text-gray-600">2 checkups per year</div>
                  <div className="text-sm text-gray-600">20% off treatments</div>
                  <div className="text-sm text-gray-600">Emergency coverage</div>
                </td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-gray-600">AED 1996</div>
                  <div className="text-sm text-gray-600">4 people covered</div>
                  <div className="text-sm text-gray-600">1 checkup per year</div>
                  <div className="text-sm text-gray-600">10% off treatments</div>
                  <div className="text-sm text-gray-600">No emergency coverage</div>
                </td>
                <td className="p-4 font-medium">
                  <div className="text-2xl font-bold text-blue-600">AED 1397</div>
                  <div className="text-sm text-gray-600">4 people covered</div>
                  <div className="text-sm text-gray-600">1 extra checkup per year</div>
                  <div className="text-sm text-gray-600">10% more off treatments</div>
                  <div className="text-sm text-gray-600">Emergency coverage</div>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

function BenefitItem({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function PlanCard({ icon, title, description, price, features }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-6">
        {price}
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
