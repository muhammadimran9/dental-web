import Link from 'next/link'
import Button from '../ui/Button'
import FeatureItem from './FeatureItem'

const features = [
  { title: "DHA Licensed Clinic", description: "Fully certified by Dubai Health Authority" },
  { title: "International Specialists", description: "American and European trained dentists" },
  { title: "Advanced Technology", description: "Latest dental equipment and techniques" },
  { title: "Patient-Centered Care", description: "Personalized treatment for every smile" }
]

export default function AboutClinicContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-blue-700 font-medium text-sm">About DentalCare Dubai</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Your Trusted Partner
          <span className="block text-blue-600">for Dental Excellence</span>
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          Since 2008, DentalCare Dubai has been providing world-class dental services 
          to the UAE community. Our internationally trained dentists combine expertise 
          with cutting-edge technology to deliver exceptional patient care.
        </p>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/about">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold">
            Learn More About Us
          </Button>
        </Link>
        <Link href="/doctors">
          <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 font-semibold">
            Meet Our Team
          </Button>
        </Link>
      </div>
    </div>
  )
}
