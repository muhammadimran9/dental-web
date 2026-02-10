'use client'
import Link from 'next/link'

export default function StickyAppointmentButton() {
  return (
    <Link 
      href="/appointment"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white px-3 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
      style={{ writingMode: 'vertical-rl' }}
    >
      <span className="text-sm font-bold tracking-wider uppercase">
        Book Appointment
      </span>
    </Link>
  )
}
