'use client'

import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import ContactFormFields from './ContactFormFields'
import ContactFormSuccess from './ContactFormSuccess'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitSuccess(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', service: 'general', message: '' })
  }

  if (submitSuccess) {
    return (
      <Card>
        <ContactFormSuccess />
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit}>
        <ContactFormFields formData={formData} onChange={handleChange} />
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Card>
  )
}
