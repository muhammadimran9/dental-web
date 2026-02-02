import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import Card from '../Card'

export default function EnhancedServiceCard({ title, description, icon, href, beforeImage, afterImage }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-white">{icon}</div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {beforeImage && afterImage && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="relative h-24 rounded-lg overflow-hidden">
              <Image src={beforeImage} alt="Before" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                Before
              </div>
            </div>
            <div className="relative h-24 rounded-lg overflow-hidden">
              <Image src={afterImage} alt="After" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                After
              </div>
            </div>
          </div>
        )}
        
        <div className="flex gap-3">
          <Link href={href} className="flex-1">
            <Button variant="primary" className="w-full bg-accent hover:bg-accent/90 text-white">
              Learn More
            </Button>
          </Link>
          <Link href="/appointment" className="flex-1">
            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
