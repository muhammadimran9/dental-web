'use client'

import { useState } from 'react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import PhoneIcon from './icons/PhoneIcon'

export default function GulfStickyButtons() {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showOptions && (
        <div className="flex flex-col gap-3 animate-slide-up">
          <a
            href="tel:+971501234567"
            className="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all"
            title="Call Us"
          >
            <PhoneIcon className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all"
            title="WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
        </div>
      )}
      
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-accent hover:bg-accent-dark text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all"
        title="Contact Options"
      >
        <div className={`w-6 h-6 flex flex-col justify-center gap-1 ${showOptions ? 'rotate-45' : ''} transition-transform`}>
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </div>
      </button>
    </div>
  )
}
