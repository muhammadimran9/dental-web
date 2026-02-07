import Card from '../ui/Card'
import DoctorImagePlaceholder from './DoctorImagePlaceholder'
import FemaleDoctorImagePlaceholder from './FemaleDoctorImagePlaceholder'

export default function DoctorCard({ name, title, specialization, experience, bio, image }) {
  const isFemale = name.includes('Sarah') || name.includes('Emily')
  const ImageComponent = isFemale ? FemaleDoctorImagePlaceholder : DoctorImagePlaceholder
  
  return (
    <Card hover>
      <div className="text-center">
        <DoctorImage name={name} ImageComponent={ImageComponent} />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-primary font-semibold mb-2">{title}</p>
        <p className="text-gray-600 mb-2">{specialization}</p>
        <p className="text-sm text-gray-500 mb-4">{experience} Experience</p>
        <p className="text-gray-700 text-sm">{bio}</p>
      </div>
    </Card>
  )
}

function DoctorImage({ name, ImageComponent }) {
  return (
    <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
      <ImageComponent name={name} />
    </div>
  )
}
