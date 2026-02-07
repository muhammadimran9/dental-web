import Card from './ui/Card'
import StarIcon from './icons/StarIcon'
import HeartIcon from './icons/HeartIcon'
import LightbulbIcon from './icons/LightbulbIcon'
import HandshakeIcon from './icons/HandshakeIcon'

export default function AboutValues() {
  const values = [
    { title: 'Excellence', description: 'We strive for excellence in every procedure and interaction.', icon: <StarIcon /> },
    { title: 'Compassion', description: 'We treat every patient with care, respect, and understanding.', icon: <HeartIcon /> },
    { title: 'Innovation', description: 'We use the latest technology and techniques for better outcomes.', icon: <LightbulbIcon /> },
    { title: 'Integrity', description: 'We maintain the highest ethical standards in all we do.', icon: <HandshakeIcon /> },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <MissionHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionHeader() {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Our Mission & Values
      </h2>
      <p className="text-lg text-gray-700 text-center">
        Our mission is to provide exceptional dental care that improves 
        the health, confidence, and quality of life for every patient we serve.
      </p>
    </div>
  )
}

function ValueCard({ title, description, icon }) {
  return (
    <Card hover>
      <div className="text-5xl mb-4 text-accent">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}
