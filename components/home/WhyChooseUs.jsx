import Card from '../ui/Card'
import SectionHeader from '../SectionHeader'
import ReasonCard from '../ReasonCard'
import { TechnologyIcon, PainFreeIcon, DoctorIcon, PricingIcon, StaffIcon } from '../ui/Icons'

const reasons = [
  { icon: <TechnologyIcon className="w-8 h-8 text-blue-600" />, title: 'Modern Technology', description: 'State-of-the-art equipment' },
  { icon: <PainFreeIcon className="w-8 h-8 text-blue-600" />, title: 'Pain-Free Treatment', description: 'Comfortable procedures' },
  { icon: <DoctorIcon className="w-8 h-8 text-blue-600" />, title: 'Experienced Dentists', description: 'Expert care team' },
  { icon: <PricingIcon className="w-8 h-8 text-blue-600" />, title: 'Transparent Pricing', description: 'No hidden fees' },
  { icon: <StaffIcon className="w-8 h-8 text-blue-600" />, title: 'Friendly Staff', description: 'Welcoming environment' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader title="Why Choose Us" subtitle="What sets us apart from other dental clinics" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  )
}
