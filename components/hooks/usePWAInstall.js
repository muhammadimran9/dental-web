'use client'

import { useState, useEffect } from 'react'

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallButton, setShowInstallButton] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    setIsIOS(isIOSDevice)

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

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
    const instructions = `
To install DentalCare on your iOS device:
1. Tap the Share button at the bottom of Safari
2. Scroll down and tap "Add to Home Screen"
3. Tap "Add" to install the app
    `
    alert(instructions)
  }

  return {
    deferredPrompt,
    showInstallButton,
    isIOS,
    handleInstallClick,
    handleIOSInstall
  }
}
