'use client'

import Button from './Button'
import InstallIcon from './icons/InstallIcon'
import { usePWAInstall } from './hooks/usePWAInstall'

export default function PWAInstallButton() {
  const { showInstallButton, isIOS, handleInstallClick, handleIOSInstall } = usePWAInstall()

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
