import { HeartIcon, ShieldIcon, StarIcon } from '../ui/IconsNew'

const values = [
  { icon: <HeartIcon />, title: 'Patient-Centered Care', description: 'Your comfort and health are our top priorities' },
  { icon: <ShieldIcon />, title: 'Excellence', description: 'We strive for the highest standards in dental care' },
  { icon: <StarIcon />, title: 'Innovation', description: 'Latest technology and advanced treatment methods' },
]

export default function TeamValues() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ValuesHeader />
        <ValuesGrid />
      </div>
    </section>
  )
}

function ValuesHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Our Team Values
      </h2>
      <p className="text-xl text-gray-600">
        The principles that guide our practice
      </p>
    </div>
  )
}

function ValuesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <ValueCard key={index} value={value} />
      ))}
    </div>
  )
}

function ValueCard({ value }) {
  return (
    <div className="text-center bg-white p-8 rounded-xl shadow-lg">
      <div className="text-5xl mb-4 text-blue-500">{value.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
      <p className="text-gray-600">{value.description}</p>
    </div>
  )
}
