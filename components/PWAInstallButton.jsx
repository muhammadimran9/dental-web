'use client'

import { useState, useEffect } from 'react'
import Button from './Button'
import InstallIcon from './icons/InstallIcon'

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallButton, setShowInstallButton] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if it's iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    setIsIOS(isIOSDevice)

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Check if app is already installed
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || 
                              window.navigator.standalone === true

    if (isInStandaloneMode) {
      setShowInstallButton(false)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowInstallButton(false)
    }
  }

  const handleIOSInstall = () => {
    // Show iOS install instructions
    const instructions = `
To install DentalCare on your iOS device:
1. Tap the Share button at the bottom of Safari
2. Scroll down and tap "Add to Home Screen"
3. Tap "Add" to install the app
    `
    alert(instructions)
  }

  if (!showInstallButton) return null

  if (isIOS) {
    return (
      <Button
        onClick={handleIOSInstall}
        variant="outline"
        className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-white"
      >
        <InstallIcon className="w-4 h-4" />
        Install App
      </Button>
    )
  }

  return (
    <Button
      onClick={handleInstallClick}
      variant="outline"
      className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-white"
    >
      <InstallIcon className="w-4 h-4" />
      Install App
    </Button>
  )
}
