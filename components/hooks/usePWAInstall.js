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

    // Always show install button for testing on desktop
    if (!isInStandaloneMode && !isIOSDevice) {
      setShowInstallButton(true)
    } else if (isIOSDevice && !isInStandaloneMode) {
      setShowInstallButton(true)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null)
        setShowInstallButton(false)
      }
    } else {
      // Show instructions for manual installation
      const instructions = `
To install DentalCare:
1. Click the menu button (⋮) in your browser
2. Select "Install" or "Add to Home screen"
3. Follow the prompts to complete installation
      `
      alert(instructions)
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
