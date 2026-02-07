import { AlertTriangleIcon, PhoneIcon, HeartIcon, ShieldIcon, UserIcon } from '../ui/Icons'
import EmergencyItem from './EmergencyItem'

const emergencies = [
  { icon: <HeartIcon className="w-4 h-4 text-red-600" />, title: "Severe Toothache", description: "Persistent pain that doesn't go away" },
  { icon: <ShieldIcon className="w-4 h-4 text-red-600" />, title: "Broken Tooth", description: "Cracked or knocked-out teeth" },
  { icon: <UserIcon className="w-4 h-4 text-red-600" />, title: "Bleeding Gums", description: "Uncontrolled bleeding from gums" },
  { icon: <AlertTriangleIcon className="w-4 h-4 text-red-600" />, title: "Infection/Swelling", description: "Painful swelling in face or gums" }
]

export default function EmergencyContent() {
  return (
    <div>
      <div className="flex items-center mb-4">
        <AlertTriangleIcon className="w-6 h-6 mr-3 text-red-600" />
        <h2 className="text-3xl font-bold text-gray-800">
          Dental <span className="text-red-600">Emergency?</span>
        </h2>
      </div>
      <p className="text-gray-600 text-lg mb-6">
        We're here for you when you need us most. Same-day appointments available for dental emergencies.
      </p>
      
      <div className="space-y-4 mb-8">
        {emergencies.map((item, index) => (
          <EmergencyItem 
            key={index}
            icon={<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">{item.icon}</div>}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="tel:+97141234567" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
          <PhoneIcon className="w-5 h-5" />
          Call Now: +971 4 123 4567
        </a>
        <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
          Book Emergency Appointment
        </button>
      </div>
    </div>
  )
}
