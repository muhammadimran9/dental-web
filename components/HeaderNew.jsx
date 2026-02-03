'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './ui/ButtonNew'
import { PhoneIcon, MenuIcon, XIcon } from './ui/IconsNew'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <DesktopNav />
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
    </header>
  )
}

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">DC</span>
      </div>
      <span className="text-xl font-bold text-gray-900">DentalCare</span>
    </Link>
  )
}

function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavLink href="/services">Services</NavLink>
      <NavLink href="/doctors">Team</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <Link href="/appointment">
        <Button size="sm">Book Appointment</Button>
      </Link>
    </div>
  )
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
    >
      {children}
    </Link>
  )
}

function MobileNav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>
      
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg border-t">
          <div className="container-custom py-4 space-y-3">
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/doctors">Team</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <Link href="/appointment">
              <Button className="w-full">Book Appointment</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function MobileNavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
    >
      {children}
    </Link>
  )
}
