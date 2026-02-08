import Card from './ui/Card'
import StarDentalImage from './images/StarDentalImage'
import HeartDentalImage from './images/HeartDentalImage'
import LightbulbDentalImage from './images/LightbulbDentalImage'
import HandshakeDentalImage from './images/HandshakeDentalImage'

export default function AboutValues() {
  const values = [
    { 
      title: 'Excellence', 
      description: 'We strive for excellence in every procedure and interaction, ensuring the highest standards of dental care.', 
      icon: <StarDentalImage /> 
    },
    { 
      title: 'Compassion', 
      description: 'We treat every patient with care, respect, and understanding, making your comfort our priority.', 
      icon: <HeartDentalImage /> 
    },
    { 
      title: 'Innovation', 
      description: 'We use the latest technology and techniques for better outcomes and faster recovery times.', 
      icon: <LightbulbDentalImage /> 
    },
    { 
      title: 'Integrity', 
      description: 'We maintain the highest ethical standards in all we do, building trust through transparency.', 
      icon: <HandshakeDentalImage /> 
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <MissionHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Comprehensive Dental Care for Your Entire Family. 
        From routine check-ups to advanced cosmetic procedures, our internationally trained specialists 
        provide world-class dental care using the latest technology and techniques.
      </p>
    </div>
  )
}

function ValueCard({ title, description, icon }) {
  return (
    <Card hover className="h-full">
      <div className="text-center p-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}
