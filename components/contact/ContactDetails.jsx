import PhoneIcon from '../icons/PhoneIcon'
import WhatsAppIcon from '../icons/WhatsAppIcon'
import EmailIcon from '../icons/EmailIcon'
import ClockIcon from '../icons/ClockIcon'
import PinIcon from '../icons/PinIcon'

const contactDetails = [
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    info: '+971 4 123 4567',
    description: 'Call us for appointments and inquiries'
  },
  {
    icon: <WhatsAppIcon />,
    title: 'WhatsApp',
    info: '+971 50 123 4567',
    description: 'Chat with us instantly for quick questions'
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    info: 'info@dentalcaredubai.com',
    description: 'Send us detailed inquiries or appointment requests'
  },
  {
    icon: <ClockIcon />,
    title: 'Clinic Hours',
    info: 'Mon-Fri: 9AM-8PM',
    description: 'Sat: 9AM-6PM, Emergency: 24/7 Available'
  },
  {
    icon: <PinIcon />,
    title: 'Address',
    info: 'Dubai Healthcare City, Block 3',
    description: 'Dubai, United Arab Emirates'
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
