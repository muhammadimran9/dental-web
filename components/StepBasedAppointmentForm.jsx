'use client'

import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import CalendarIcon from './icons/CalendarIcon'
import ClockIcon from './icons/ClockIcon'
import UserIcon from './icons/UserIcon'
import PhoneIcon from './icons/PhoneIcon'
import CheckCircleIcon from './icons/CheckCircleIcon'
import CategoryIcon from './icons/CategoryIcon'
import SparkleIcon from './icons/SparkleIcon'
import ToolIcon from './icons/ToolIcon'
import RulerIcon from './icons/RulerIcon'
import AlertIcon from './icons/AlertIcon'
import BabyIcon from './icons/BabyIcon'

const serviceCategories = [
  {
    id: 'general',
    name: 'General Dentistry',
    description: 'Routine check-ups, cleanings, and preventive care',
    icon: <CategoryIcon />
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers',
    icon: <SparkleIcon />
  },
  {
    id: 'restorative',
    name: 'Restorative Dentistry',
    description: 'Fillings, crowns, bridges, and implants',
    icon: <ToolIcon />
  },
  {
    id: 'orthodontic',
    name: 'Orthodontics',
    description: 'Braces, aligners, and bite correction',
    icon: <RulerIcon />
  },
  {
    id: 'emergency',
    name: 'Emergency Care',
    description: 'Urgent dental issues and pain relief',
    icon: <AlertIcon />
  },
  {
    id: 'pediatric',
    name: 'Pediatric Dentistry',
    description: 'Dental care for children and teens',
    icon: <BabyIcon />
  }
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
]

export default function StepBasedAppointmentForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState({
    serviceCategory: '',
    specificService: '',
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: ''
  })

  const specificServices = {
    general: ['Routine Check-up', 'Dental Cleaning', 'Fluoride Treatment', 'Oral Examination'],
    cosmetic: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeover', 'Gum Contouring'],
    restorative: ['Dental Fillings', 'Crowns & Bridges', 'Dental Implants', 'Dentures'],
    orthodontic: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Space Maintainers'],
    emergency: ['Tooth Pain', 'Broken Tooth', 'Lost Filling', 'Dental Trauma'],
    pediatric: ['Child Check-up', 'Fluoride Treatment', 'Sealants', 'Orthodontic Evaluation']
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceCategorySelect = (categoryId) => {
    setFormData({ ...formData, serviceCategory: categoryId, specificService: '' })
    setCurrentStep(2)
  }

  const handleSpecificServiceSelect = (service) => {
    setFormData({ ...formData, specificService: service })
    setCurrentStep(3)
  }

  const handleDateTimeSubmit = () => {
    if (formData.date && formData.time) {
      setCurrentStep(4)
    }
  }

  const handlePersonalInfoSubmit = () => {
    if (formData.name && formData.phone) {
      setCurrentStep(5)
    }
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
          <CheckCircleIcon className="text-green-500 text-6xl mb-6 mx-auto" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Appointment Booked!</h3>
          <p className="text-xl text-gray-600 mb-6">
            Thank you for booking with us. We'll send you a confirmation shortly.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h4 className="font-semibold text-gray-800 mb-3">Appointment Details:</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Service:</span> {formData.specificService}</p>
              <p><span className="font-medium">Date:</span> {formData.date}</p>
              <p><span className="font-medium">Time:</span> {formData.time}</p>
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Phone:</span> {formData.phone}</p>
            </div>
          </div>
          <Button 
            onClick={() => window.location.reload()}
            variant="primary"
          >
            Book Another Appointment
          </Button>
        </div>
      </Card>
    )
  }

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= step 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {currentStep > step ? '✓' : step}
            </div>
            {step < 5 && (
              <div className={`w-full h-1 mx-2 ${
                currentStep > step ? 'bg-primary' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-600">
        <span>Category</span>
        <span>Service</span>
        <span>Date & Time</span>
        <span>Personal Info</span>
        <span>Confirm</span>
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Select Service Category</h3>
      <p className="text-gray-600 mb-6">Choose the type of dental service you need</p>
      
      <div className="grid md:grid-cols-2 gap-4">
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleServiceCategorySelect(category.id)}
            className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl text-accent">{category.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-primary">
                  {category.name}
                </h4>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )

  const renderStep2 = () => {
    const category = serviceCategories.find(c => c.id === formData.serviceCategory)
    const services = specificServices[formData.serviceCategory] || []
    
    return (
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Select Specific Service</h3>
        <p className="text-gray-600 mb-6">
          Choose from {category?.name.toLowerCase()} services
        </p>
        
        <div className="space-y-3">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => handleSpecificServiceSelect(service)}
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800 group-hover:text-primary">
                  {service}
                </span>
                <span className="text-primary">→</span>
              </div>
            </button>
          ))}
        </div>
        
        <Button 
          onClick={() => setCurrentStep(1)}
          variant="outline"
          className="mt-4"
        >
          Back to Categories
        </Button>
      </div>
    )
  }

  const renderStep3 = () => (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Select Date & Time</h3>
      <p className="text-gray-600 mb-6">Choose your preferred appointment time</p>
      
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
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex gap-4 mt-6">
        <Button onClick={() => setCurrentStep(2)} variant="outline">
          Back
        </Button>
        <Button 
          onClick={handleDateTimeSubmit}
          disabled={!formData.date || !formData.time}
        >
          Continue
        </Button>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Personal Information</h3>
      <p className="text-gray-600 mb-6">Tell us about yourself</p>
      
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="John Doe"
            required
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="(123) 456-7890"
            required
          />
        </div>
      </div>
      
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="john@example.com"
        />
      </div>
      
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Any specific concerns or requirements..."
        />
      </div>
      
      <div className="flex gap-4 mt-6">
        <Button onClick={() => setCurrentStep(3)} variant="outline">
          Back
        </Button>
        <Button 
          onClick={handlePersonalInfoSubmit}
          disabled={!formData.name || !formData.phone}
        >
          Continue to Confirmation
        </Button>
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Confirm Appointment</h3>
      <p className="text-gray-600 mb-6">Please review your appointment details</p>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-4">Appointment Summary</h4>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Service Category:</span>
            <span className="font-medium">
              {serviceCategories.find(c => c.id === formData.serviceCategory)?.name}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Specific Service:</span>
            <span className="font-medium">{formData.specificService}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{formData.date}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Time:</span>
            <span className="font-medium">{formData.time}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Name:</span>
            <span className="font-medium">{formData.name}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Phone:</span>
            <span className="font-medium">{formData.phone}</span>
          </div>
          {formData.email && (
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Email:</span>
              <span className="font-medium">{formData.email}</span>
            </div>
          )}
          {formData.message && (
            <div className="py-2">
              <span className="text-gray-600">Notes:</span>
              <p className="mt-1 text-sm">{formData.message}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button onClick={() => setCurrentStep(4)} variant="outline">
          Back
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
        </Button>
      </div>
    </div>
  )

  return (
    <Card>
      <div className="p-8">
        {renderProgressBar()}
        
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
        {currentStep === 5 && renderStep5()}
      </div>
    </Card>
  )
}
