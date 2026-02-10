import ExperienceIcon from './icons/ExperienceIcon'
import TechnologyIcon from './icons/TechnologyIcon'
import CareIcon from './icons/CareIcon'
import ResultsIcon from './icons/ResultsIcon'

const approaches = [
  { icon: <ExperienceIcon className="w-16 h-16 text-blue-600" />, title: '20+ Years Experience', description: 'Trusted expertise in dental care' },
  { icon: <TechnologyIcon className="w-16 h-16 text-blue-600" />, title: 'Advanced Technology', description: 'Latest dental equipment and techniques' },
  { icon: <CareIcon className="w-16 h-16 text-blue-600" />, title: 'Patient-Centered Care', description: 'Your comfort is our priority' },
  { icon: <ResultsIcon className="w-16 h-16 text-blue-600" />, title: 'Proven Results', description: 'Thousands of satisfied patients' },
]

export default function AboutApproach() {
  return (
    <section className="section-padding bg-gray-50">

      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600">
            Combining expertise, technology, and compassionate care
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {approaches.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
