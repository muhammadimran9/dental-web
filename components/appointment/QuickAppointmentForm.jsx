'use client'

import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import QuickFormFields from './QuickFormFields'
import QuickFormSuccess from './QuickFormSuccess'

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
        <QuickFormSuccess formData={formData} />
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Appointment Booking</h2>
      <form onSubmit={handleSubmit}>
        <QuickFormFields formData={formData} onChange={handleChange} />
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white mt-6"
        >
          {isSubmitting ? 'Booking...' : 'Book Appointment'}
        </Button>
      </form>
    </Card>
  )
}
