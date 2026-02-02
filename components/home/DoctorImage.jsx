import DoctorImagePlaceholder from '../DoctorImagePlaceholder'

export default function DoctorImage() {
  return (
    <div>
      <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
        <DoctorImagePlaceholder name="John Smith" />
      </div>
    </div>
  )
}
