'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyAppointmentButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 80vh (hero section height)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link 
      href="/appointment"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white px-3 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      style={{ writingMode: 'vertical-rl' }}
    >
      <span className="text-sm font-bold tracking-wider uppercase">
        Book Appointment
      </span>
    </Link>
  )
}
