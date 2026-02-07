'use client'

import { useState } from 'react'
import { auth, db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export function useAppointmentForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
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
    if (!auth || !db) {
      alert('Please try again later.')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Save appointment to Firebase
      await addDoc(collection(db, 'appointments'), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp(),
        read: false,
        patientInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        },
        appointmentDetails: {
          category: formData.selectedCategory,
          service: formData.selectedService,
          date: formData.selectedDate,
          time: formData.selectedTime,
          notes: formData.notes
        }
      })

      // Simulate success
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error submitting appointment:', error)
      alert('Failed to submit appointment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
    isSubmitting,
    handleNext,
    handlePrevious,
    handleSubmit,
    updateFormData,
    handleInputChange,
    isStepValid
  }
}
