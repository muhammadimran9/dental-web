'use client'

import { useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import CheckCircleIcon from '../icons/CheckCircleIcon'
import StepIndicator from './StepIndicator'
import ServiceCategorySelection from './ServiceCategorySelection'
import ServiceSelection from './ServiceSelection'
import DateTimeSelection from './DateTimeSelection'
import PersonalInformation from './PersonalInformation'
import AppointmentConfirmation from './AppointmentConfirmation'
import { serviceCategories, services } from './appointmentData'

export default function StepBasedAppointmentForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState({
    selectedCategory: '',
    selectedService: '',
    selectedDate: '',
    selectedTime: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  const totalSteps = 5

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitSuccess(true)
  }

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData(name, value)
  }

  if (submitSuccess) {
    return (
      <Card>
        <div className="text-center py-12">
          <CheckCircleIcon className="text-green-500 text-6xl mb-6 mx-auto" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Appointment Booked!</h3>
          <p className="text-xl text-gray-600 mb-6">
            We've sent you a confirmation message with all the details.
          </p>
          <div className="bg-primary/10 p-6 rounded-lg">
            <p className="font-semibold text-gray-800">Appointment Details:</p>
            <p className="text-gray-700 mt-2">{formData.selectedDate} at {formData.selectedTime}</p>
            <p className="text-gray-700">
              Service: {serviceCategories.find(c => c.id === formData.selectedCategory)?.name}
            </p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Appointment</h2>
        
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        <div className="mb-8">
          {currentStep === 1 && (
            <ServiceCategorySelection
              selectedCategory={formData.selectedCategory}
              onSelectCategory={(category) => updateFormData('selectedCategory', category)}
            />
          )}

          {currentStep === 2 && (
            <ServiceSelection
              selectedCategory={formData.selectedCategory}
              selectedService={formData.selectedService}
              onSelectService={(service) => updateFormData('selectedService', service)}
            />
          )}

          {currentStep === 3 && (
            <DateTimeSelection
              selectedDate={formData.selectedDate}
              selectedTime={formData.selectedTime}
              onSelectDate={(date) => updateFormData('selectedDate', date)}
              onSelectTime={(time) => updateFormData('selectedTime', time)}
            />
          )}

          {currentStep === 4 && (
            <PersonalInformation
              formData={formData}
              onChange={handleInputChange}
            />
          )}

          {currentStep === 5 && (
            <AppointmentConfirmation
              selectedCategory={formData.selectedCategory}
              selectedService={formData.selectedService}
              selectedDate={formData.selectedDate}
              selectedTime={formData.selectedTime}
              formData={formData}
            />
          )}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={currentStep === 1 ? 'invisible' : ''}
          >
            Previous
          </Button>

          {currentStep === 5 ? (
            <Button
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Confirm Appointment
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !formData.selectedCategory) ||
                (currentStep === 2 && !formData.selectedService) ||
                (currentStep === 3 && (!formData.selectedDate || !formData.selectedTime)) ||
                (currentStep === 4 && (!formData.name || !formData.email || !formData.phone))
              }
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
