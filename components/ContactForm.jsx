'use client'

import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import FormHeader from './FormHeader'
import SubmitButton from './SubmitButton'
import FormField from './FormField'
import MessageField from './MessageField'
import { submitContactForm } from './contactUtils'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submitContactForm(formData, setIsSubmitting, setSubmitSuccess, setSubmitError, () => setFormData({ name: '', email: '', phone: '', subject: '', message: '' }))
  }

  return (
    <Card>
      <FormHeader title="Send us a Message" subtitle="We'll get back to you as soon as possible" />
      <FormMessages submitSuccess={submitSuccess} submitError={submitError} />
      <form onSubmit={handleSubmit} className="space-y-6">
        <ContactFormFields formData={formData} handleChange={handleChange} />
        <SubmitButton isSubmitting={isSubmitting} text="Send Message" />
      </form>
    </Card>
  )
}

function ContactFormFields({ formData, handleChange }) {
  return (
    <div className="space-y-6">
      <FormField
        id="name"
        label="Full Name *"
        type="text"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        id="email"
        label="Email Address *"
        type="email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        id="phone"
        label="Phone Number *"
        type="tel"
        placeholder="(123) 456-7890"
        value={formData.phone}
        onChange={handleChange}
      />
      <FormField
        id="subject"
        label="Subject *"
        type="text"
        placeholder="How can we help you?"
        value={formData.subject}
        onChange={handleChange}
      />
      <MessageField
        id="message"
        label="Message *"
        placeholder="Tell us more about your inquiry..."
        value={formData.message}
        onChange={handleChange}
      />
    </div>
  )
}

function FormMessages({ submitSuccess, submitError }) {
  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
      </div>
    )
  }

  if (submitError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p className="text-red-800">{submitError}</p>
      </div>
    )
  }

  return null
}
