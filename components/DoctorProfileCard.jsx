import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import Card from './Card'

export default function DoctorProfileCard({ doctor }) {
  return (
    <Card className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <Image 
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
      <p className="text-accent font-medium mb-3">{doctor.specialty}</p>
      <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>
      
      <div className="space-y-2 text-sm text-gray-500 mb-4">
        <p>Experience: {doctor.experience}</p>
        <p>Education: {doctor.education}</p>
      </div>
      
      <div className="space-y-2">
        <Link href={`/appointment?doctor=${doctor.name}`}>
          <Button variant="primary" className="w-full bg-accent hover:bg-accent/90 text-white">
            Book with Dr. {doctor.name.split(' ')[1]}
          </Button>
        </Link>
        <Link href={`/team/${doctor.id}`}>
          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
            View Profile
          </Button>
        </Link>
      </div>
    </Card>
  )
}
