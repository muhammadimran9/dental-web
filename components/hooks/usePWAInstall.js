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
      try {
        await deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        
        if (outcome === 'accepted') {
          setDeferredPrompt(null)
          setShowInstallButton(false)
        }
      } catch (error) {
        console.error('Installation failed:', error)
      }
    }
  }

  const handleIOSInstall = () => {
    // iOS doesn't support programmatic installation
    // Show simple instructions
    alert('Tap the Share button, then "Add to Home Screen" to install')
  }

  return {
    deferredPrompt,
    showInstallButton,
    isIOS,
    handleInstallClick,
    handleIOSInstall
  }
}
