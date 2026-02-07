'use client'

import { useState } from 'react'
import Button from '../ui/Button'
import CalendarIcon from '../icons/CalendarIcon'

export default function StickyBooking() {
  const [selectedService, setSelectedService] = useState('general')
  const [selectedDate, setSelectedDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `/appointment?service=${selectedService}&date=${selectedDate}`
  }

  return (
    <div className="sticky top-24 bg-white rounded-2xl shadow-2xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <CalendarIcon className="text-accent" />
        Quick Booking
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Service
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            <option value="general">General Checkup</option>
            <option value="cleaning">Teeth Cleaning</option>
            <option value="whitening">Teeth Whitening</option>
            <option value="implants">Dental Implants</option>
            <option value="emergency">Emergency Care</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
          Book Appointment
        </Button>
      </form>
    </div>
  )
}
