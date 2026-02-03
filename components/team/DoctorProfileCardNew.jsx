import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/ButtonNew'
import Card from '../ui/CardNew'

export default function DoctorProfileCard({ doctor }) {
  return (
    <Card className="text-center">
      <DoctorImage doctor={doctor} />
      <DoctorInfo doctor={doctor} />
      <DoctorActions doctor={doctor} />
    </Card>
  )
}

function DoctorImage({ doctor }) {
  return (
    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-400/20">
      <Image 
        src={doctor.image}
        alt={doctor.name}
        fill
        className="object-cover"
      />
      <ExperienceOverlay experience={doctor.experience} />
    </div>
  )
}

function ExperienceOverlay({ experience }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
      <p className="text-white text-xs font-medium">{experience}</p>
    </div>
  )
}

function DoctorInfo({ doctor }) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
        <p className="text-blue-600 font-bold text-sm mb-2">{doctor.title}</p>
        <p className="text-blue-500 font-medium">{doctor.specialty}</p>
      </div>
      
      <EducationInfo doctor={doctor} />
      
      <p className="text-gray-600 text-sm">{doctor.bio}</p>
      
      {doctor.achievements && (
        <Achievements achievements={doctor.achievements} />
      )}
    </div>
  )
}

function EducationInfo({ doctor }) {
  return (
    <div className="bg-blue-50 rounded-lg p-3">
      <p className="text-sm font-semibold text-blue-600 mb-1">{doctor.education}</p>
      <p className="text-xs text-gray-600">{doctor.certifications}</p>
    </div>
  )
}

function Achievements({ achievements }) {
  return (
    <div className="bg-blue-100 rounded-lg p-2">
      <p className="text-xs font-semibold text-blue-700">{achievements}</p>
    </div>
  )
}

function DoctorActions({ doctor }) {
  return (
    <div className="space-y-2">
      <Link href={`/appointment?doctor=${doctor.name}`}>
        <Button variant="primary" className="w-full bg-blue-600 hover:bg-blue-700">
          Book with Dr. {doctor.name.split(' ')[1]}
        </Button>
      </Link>
      <Link href={`/team/${doctor.id}`}>
        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
          Full Profile
        </Button>
      </Link>
    </div>
  )
}
