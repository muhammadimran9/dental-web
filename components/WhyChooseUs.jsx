import Card from './Card'
import SectionHeader from './SectionHeader'
import ReasonCard from './ReasonCard'
import TechnologyIcon from './icons/TechnologyIcon'
import PainFreeIcon from './icons/PainFreeIcon'
import DoctorIcon from './icons/DoctorIcon'
import PricingIcon from './icons/PricingIcon'
import StaffIcon from './icons/StaffIcon'

const reasons = [
  { icon: <TechnologyIcon />, title: 'Modern Technology', description: 'State-of-the-art equipment' },
  { icon: <PainFreeIcon />, title: 'Pain-Free Treatment', description: 'Comfortable procedures' },
  { icon: <DoctorIcon />, title: 'Experienced Dentists', description: 'Expert care team' },
  { icon: <PricingIcon />, title: 'Transparent Pricing', description: 'No hidden fees' },
  { icon: <StaffIcon />, title: 'Friendly Staff', description: 'Welcoming environment' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader title="Why Choose Us" subtitle="What sets us apart from other dental clinics" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  )
}
