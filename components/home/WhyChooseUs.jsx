import Card from '../ui/Card'
import SectionHeader from '../SectionHeader'
import ReasonCard from '../ReasonCard'
import TechnologyDentalImage from '../images/TechnologyDentalImage'
import ExperienceDentalImage from '../images/ExperienceDentalImage'
import UserDentalImage from '../images/UserDentalImage'
import HeartDentalImage from '../images/HeartDentalImage'

const reasons = [
  { icon: <TechnologyDentalImage className="w-8 h-8" />, title: 'Modern Technology', description: 'State-of-the-art equipment' },
  { icon: <ExperienceDentalImage className="w-8 h-8" />, title: 'Pain-Free Treatment', description: 'Comfortable procedures' },
  { icon: <UserDentalImage className="w-8 h-8" />, title: 'Experienced Dentists', description: 'Expert care team' },
  { icon: <HeartDentalImage className="w-8 h-8" />, title: 'Friendly Staff', description: 'Welcoming environment' },
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
