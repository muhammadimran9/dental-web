'use client'

import { useState, useEffect } from 'react'
import PhoneIcon from './icons/PhoneIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function ContactHeader() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstall, setShowInstall] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setShowInstall(false)
    }
    setDeferredPrompt(null)
  }

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
            {showInstall && (
              <button
                onClick={handleInstall}
                className="flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Install App
              </button>
            )}
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
