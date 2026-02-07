'use client'

import { useState } from 'react'
import MobileLogo from './header/MobileLogo'
import MobileMenuButton from './header/MobileMenuButton'
import DesktopLogo from './header/DesktopLogo'
import Navigation from './header/Navigation'
import BookAppointmentButton from './header/BookAppointmentButton'
import MobileMenu from './MobileMenuProfessional'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="w-full py-3 sticky top-0 z-40 bg-white shadow-md">
        <div className="container-custom">
          <div className="flex items-center justify-between lg:hidden">
            <MobileLogo />
            <MobileMenuButton onClick={toggleMobileMenu} />
          </div>
          <DesktopNav />
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu}
      />
    </>
  )
}

function DesktopNav() {
  return (
    <div className="hidden lg:flex w-full items-center justify-between">
      <DesktopLogo />
      <Navigation />
      <BookAppointmentButton />
    </div>
  )
}
