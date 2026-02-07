import { MapPinIcon, PhoneIcon, MailIcon } from '../../components/ui/Icons'

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  details: string[]
  action: string
}

export default function ContactInfo() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Contact Information
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ContactCard 
          icon={<MapPinIcon className="w-8 h-8 text-blue-600" />}
          title="Visit Us"
          details={[
            "DentalCare Dubai Clinic",
            "Building 12, Dubai Healthcare City",
            "Dubai, United Arab Emirates"
          ]}
          action="Get Directions"
        />
        <ContactCard 
          icon={<PhoneIcon className="w-8 h-8 text-blue-600" />}
          title="Call Us"
          details={[
            "Main: +971 4 123 4567",
            "Emergency: +971 50 123 4567",
            "WhatsApp: +971 50 123 4567"
          ]}
          action="Call Now"
        />
        <ContactCard 
          icon={<MailIcon className="w-8 h-8 text-blue-600" />}
          title="Email Us"
          details={[
            "info@dentalcaredubai.com",
            "appointments@dentalcaredubai.com",
            "emergencies@dentalcaredubai.com"
          ]}
          action="Send Email"
        />
      </div>
    </section>
  )
}

function ContactCard({ icon, title, details, action }: ContactCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <div className="space-y-2 mb-6">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600 text-center">{detail}</p>
        ))}
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        {action}
      </button>
    </div>
  )
}
