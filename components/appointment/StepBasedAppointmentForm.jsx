'use client'

import Card from '../ui/Card'
import StepIndicator from './StepIndicator'
import FormSteps from './FormSteps'
import AppointmentFormNavigation from './AppointmentFormNavigation'
import AppointmentSuccess from './AppointmentSuccess'
import { useAppointmentForm } from '../hooks/useAppointmentForm'

export default function StepBasedAppointmentForm() {
  const {
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
  } = useAppointmentForm()

  if (submitSuccess) {
    return <AppointmentSuccess formData={formData} />
  }

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Appointment</h2>
        
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        <FormSteps 
          currentStep={currentStep}
          formData={formData}
          updateFormData={updateFormData}
          handleInputChange={handleInputChange}
        />

        <AppointmentFormNavigation
          currentStep={currentStep}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          isStepValid={isStepValid}
          isSubmitting={isSubmitting}
        />
      </div>
    </Card>
  )
}
