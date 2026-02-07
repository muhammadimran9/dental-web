'use client'

import Link from 'next/link'
import { useState } from 'react'
import Button from '../ui/Button'
import { XIcon, ChevronDownIcon, CalendarIcon } from '../ui/Icons'
import { aboutItems, serviceItems, feedbackItems, contactItems } from '../navigationConfig'

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <XIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <MobileNavigation onClose={onClose} />
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t">
            <MobileBookButton onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileNavigation({ onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  return (
    <nav className="space-y-2">
      <MobileNavLink href="/" label="Home" onClick={onClose} />
      <MobileDropdown 
        title="About Us" 
        items={aboutItems} 
        isOpen={openDropdown === 'About Us'}
        onToggle={() => toggleDropdown('About Us')}
        onClose={onClose}
      />
      <MobileDropdown 
        title="Services" 
        items={serviceItems} 
        isOpen={openDropdown === 'Services'}
        onToggle={() => toggleDropdown('Services')}
        onClose={onClose}
      />
      <MobileNavLink href="/invisalign" label="Invisalign" onClick={onClose} />
      <MobileDropdown 
        title="Patient Feedback" 
        items={feedbackItems} 
        isOpen={openDropdown === 'Patient Feedback'}
        onToggle={() => toggleDropdown('Patient Feedback')}
        onClose={onClose}
      />
      <MobileDropdown 
        title="Contact" 
        items={contactItems} 
        isOpen={openDropdown === 'Contact'}
        onToggle={() => toggleDropdown('Contact')}
        onClose={onClose}
      />
    </nav>
  )
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
    >
      {label}
    </Link>
  )
}

function MobileDropdown({ title, items, isOpen, onToggle, onClose }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-700">{title}</span>
        <ChevronDownIcon 
          className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      
      {isOpen && (
        <div className="bg-gray-50 border-t">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={onClose}
              className={`block px-6 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                item.border ? 'border-b border-gray-200' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileBookButton({ onClose }) {
  return (
    <Link 
      href="/appointment"
      onClick={onClose}
      className="block"
    >
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm uppercase text-center rounded-md">
        <div className="inline-flex items-center justify-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          <span className="text-sm">Book Appointment</span>
        </div>
      </Button>
    </Link>
  )
}
