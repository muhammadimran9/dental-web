import ShieldIcon from './icons/ShieldIcon'
import SterilizationIcon from './icons/SterilizationIcon'
import SafetyIcon from './icons/SafetyIcon'
import CleanIcon from './icons/CleanIcon'

const protocols = [
  { icon: <ShieldIcon />, title: 'Autoclave Sterilization', description: 'Medical-grade equipment sterilization' },
  { icon: <SterilizationIcon />, title: 'Single-Use Tools', description: 'Disposable instruments when possible' },
  { icon: <SafetyIcon />, title: 'PPE Protocols', description: 'Full protective equipment for staff' },
  { icon: <CleanIcon />, title: 'Environmental Cleaning', description: 'Regular disinfection of all surfaces' },
]

export default function AboutHygiene() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hygiene & Safety Protocols
          </h2>
          <p className="text-xl text-gray-600">
            Your safety is our highest priority
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {protocols.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4 text-accent">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
