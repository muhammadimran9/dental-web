'use client'

import { useState } from 'react'
import Button from './Button'

export default function QuickBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'general'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `/appointment?name=${formData.name}&phone=${formData.phone}&service=${formData.service}`
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20"
          required
        />
      </div>
      <div className="mb-6">
        <select
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          <option value="general">General Checkup</option>
          <option value="cleaning">Teeth Cleaning</option>
          <option value="whitening">Teeth Whitening</option>
          <option value="emergency">Emergency</option>
        </select>
      </div>
      <Button type="submit" variant="secondary" className="w-full bg-accent hover:bg-accent/90 text-white">
        Quick Booking
      </Button>
    </form>
  )
}
