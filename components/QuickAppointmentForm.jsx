'use client'

import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import CalendarIcon from './icons/CalendarIcon'
import ClockIcon from './icons/ClockIcon'
import UserIcon from './icons/UserIcon'
import PhoneIcon from './icons/PhoneIcon'

export default function QuickAppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'general',
    date: '',
    time: '',
    message: ''
  })

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitSuccess(true)
    setIsSubmitting(false)
  }

  if (submitSuccess) {
    return (
      <Card>
        <div className="text-center py-12">
          <div className="text-green-500 text-6xl mb-6">✓</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Appointment Booked!</h3>
          <p className="text-xl text-gray-600 mb-6">
            We've sent you a confirmation message with all the details.
          </p>
          <div className="bg-accent/10 p-6 rounded-lg">
            <p className="font-semibold text-gray-800">Appointment Details:</p>
            <p className="text-gray-700 mt-2">{formData.date} at {formData.time}</p>
            <p className="text-gray-700">Service: {formData.service}</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Quick Appointment Booking
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <UserIcon className="text-accent" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <PhoneIcon className="text-accent" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <CalendarIcon className="text-accent" />
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <ClockIcon className="text-accent" />
              Preferred Time *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
            >
              <option value="">Select a time</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            <option value="general">General Checkup</option>
            <option value="cleaning">Teeth Cleaning</option>
            <option value="whitening">Teeth Whitening</option>
            <option value="fillings">Fillings</option>
            <option value="root-canal">Root Canal</option>
            <option value="emergency">Emergency Care</option>
            <option value="consultation">Consultation</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Any specific concerns or requirements..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-white py-4 text-lg"
        >
          {isSubmitting ? 'Booking...' : 'Book Appointment Now'}
        </Button>
      </form>
    </Card>
  )
}
