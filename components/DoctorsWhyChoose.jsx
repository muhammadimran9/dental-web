import GraduationIcon from './icons/GraduationIcon'
import BriefcaseIcon from './icons/BriefcaseIcon'
import HeartIcon from './icons/HeartIcon'

export default function DoctorsWhyChoose() {
  const reasons = [
    {
      icon: <GraduationIcon />,
      title: 'Highly Educated',
      description: 'All our dentists hold advanced degrees and continue their education regularly.',
    },
    {
      icon: <BriefcaseIcon />,
      title: 'Experienced',
      description: 'Combined decades of experience treating thousands of patients.',
    },
    {
      icon: <HeartIcon />,
      title: 'Compassionate',
      description: 'We treat every patient with care, respect, and understanding.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Why Choose Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-4 text-accent">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
