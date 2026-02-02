'use client'

import { useState } from 'react'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import Logo from './Logo'
import MobileMenuButton from './MobileMenuButton'
import PWAInstallButton from './PWAInstallButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="flex items-center gap-4">
            <PWAInstallButton />
            <NavLinks isMobile={false} />
          </div>
          <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </header>
  )
}
