import ShieldIcon from '../icons/ShieldIcon'
import ClockIcon from '../icons/ClockIcon'
import PhoneIcon from '../icons/PhoneIcon'
import CheckCircleIcon from '../icons/CheckCircleIcon'

export default function TrustBadges() {
  const trustPoints = [
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "100% Secure Booking",
      description: "Your information is protected and confidential"
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Quick Response",
      description: "We respond within 24 hours to confirm your appointment"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Free Consultation",
      description: "No obligation, no hidden fees for initial consultation"
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6" />,
      title: "Expert Care",
      description: "DHA Licensed specialists with 15+ years experience"
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {trustPoints.map((point, index) => (
        <div key={index} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
          <div className="flex justify-center text-blue-600 mb-2">
            {point.icon}
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{point.title}</h3>
          <p className="text-xs text-gray-600">{point.description}</p>
        </div>
      ))}
    </div>
  )
}
