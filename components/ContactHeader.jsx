import PhoneIcon from './icons/PhoneIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'
import PWAInstallButton from './PWAInstallButton'

export default function ContactHeader() {
  return (
    <div className="bg-blue-500 text-white py-4 px-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Dental Emergency?</h3>
              <p className="text-blue-100">We're available 24/7 for urgent dental care</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PWAInstallButton />
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 bg-white text-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Now: (123) 456-7890
            </a>
            <a 
              href="https://wa.me/1234567890?text=Emergency dental care needed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
