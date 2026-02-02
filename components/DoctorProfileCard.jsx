import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import Card from './Card'

export default function DoctorProfileCard({ doctor }) {
  return (
    <Card className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-accent/20">
        <Image 
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
          <p className="text-white text-xs font-medium">{doctor.experience}</p>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
      <p className="text-primary font-bold text-sm mb-2">{doctor.title}</p>
      <p className="text-accent font-medium mb-3">{doctor.specialty}</p>
      
      <div className="bg-accent/10 rounded-lg p-3 mb-4">
        <p className="text-sm font-semibold text-accent mb-1">{doctor.education}</p>
        <p className="text-xs text-gray-600">{doctor.certifications}</p>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>
      
      {doctor.achievements && (
        <div className="bg-primary/10 rounded-lg p-2 mb-4">
          <p className="text-xs font-semibold text-primary">{doctor.achievements}</p>
        </div>
      )}
      
      <div className="space-y-2">
        <Link href={`/appointment?doctor=${doctor.name}`}>
          <Button variant="primary" className="w-full bg-accent hover:bg-accent/90 text-white">
            Book with Dr. {doctor.name.split(' ')[1]}
          </Button>
        </Link>
        <Link href={`/team/${doctor.id}`}>
          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
            Full Profile
          </Button>
        </Link>
      </div>
    </Card>
  )
}
