import LicensedIcon from './icons/LicensedIcon'
import ExperienceIcon from './icons/ExperienceIcon'
import PatientsIcon from './icons/PatientsIcon'
import EmergencyIcon from './icons/EmergencyIcon'

const highlights = [
  { icon: <LicensedIcon />, title: 'Licensed Dentists', description: 'Fully certified professionals' },
  { icon: <ExperienceIcon />, title: '20+ Years Experience', description: 'Trusted by thousands' },
  { icon: <PatientsIcon />, title: '10,000+ Happy Patients', description: 'Satisfied customers' },
  { icon: <EmergencyIcon />, title: 'Emergency Care', description: 'Available 24/7' },
]

export default function TrustHighlights() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <TrustHighlight key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustHighlight({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
