import PhoneIcon from '../icons/PhoneIcon'
import WhatsAppIcon from '../icons/WhatsAppIcon'
import EmailIcon from '../icons/EmailIcon'
import ClockIcon from '../icons/ClockIcon'
import PinIcon from '../icons/PinIcon'

const contactDetails = [
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    info: '(123) 456-7890',
    description: 'Call us for appointments'
  },
  {
    icon: <WhatsAppIcon />,
    title: 'WhatsApp',
    info: '+1 234 567 890',
    description: 'Chat with us instantly'
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    info: 'info@dentalcare.com',
    description: 'Send us a message'
  },
  {
    icon: <ClockIcon />,
    title: 'Hours',
    info: 'Mon-Fri: 8AM-8PM',
    description: 'Sat: 9AM-5PM, Emergency: 24/7'
  },
  {
    icon: <PinIcon />,
    title: 'Address',
    info: '123 Dental Street',
    description: 'Medical District, NY 10001'
  }
]

export default function ContactDetails() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contactDetails.map((detail, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="text-accent text-2xl mt-1">{detail.icon}</div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">{detail.title}</h3>
              <p className="text-gray-900 font-medium mb-1">{detail.info}</p>
              <p className="text-gray-600 text-sm">{detail.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
