'use client'

import PWAInstallButton from './PWAInstallButton'
import PhoneIcon from './icons/PhoneIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function ContactHeader() {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Dental Emergency?</h3>
              <p className="text-gray-600 text-sm">We're available 24/7 for urgent dental care</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PWAInstallButton />
            <a 
              href="tel:+97141234567" 
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Now: +971 4 123 4567
            </a>
            <a 
              href="https://wa.me/971501234567?text=Emergency dental care needed"
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
