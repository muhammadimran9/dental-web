'use client'

import { useState } from 'react'

export function useAppointmentForm() {
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

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return !!formData.selectedCategory
      case 2:
        return !!formData.selectedService
      case 3:
        return !!(formData.selectedDate && formData.selectedTime)
      case 4:
        return !!(formData.name && formData.email && formData.phone)
      default:
        return true
    }
  }

  return {
    currentStep,
    submitSuccess,
    formData,
    totalSteps,
    handleNext,
    handlePrevious,
    handleSubmit,
    updateFormData,
    handleInputChange,
    isStepValid
  }
}
