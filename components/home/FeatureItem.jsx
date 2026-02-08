import CheckDentalImage from '../images/CheckDentalImage'

export default function FeatureItem({ title, description }) {
  return (
    <div className="flex items-start gap-3">
      <CheckDentalImage className="w-6 h-6 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
