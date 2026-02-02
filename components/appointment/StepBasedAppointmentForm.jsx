'use client'

import Card from '../Card'
import StepIndicator from './StepIndicator'
import ServiceCategorySelection from './ServiceCategorySelection'
import ServiceSelection from './ServiceSelection'
import DateTimeSelection from './DateTimeSelection'
import PersonalInformation from './PersonalInformation'
import AppointmentConfirmation from './AppointmentConfirmation'
import AppointmentFormNavigation from './AppointmentFormNavigation'
import AppointmentSuccess from './AppointmentSuccess'
import { useAppointmentForm } from '../hooks/useAppointmentForm'

export default function StepBasedAppointmentForm() {
  const {
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
  } = useAppointmentForm()

  if (submitSuccess) {
    return <AppointmentSuccess formData={formData} />
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

        <AppointmentFormNavigation
          currentStep={currentStep}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          isStepValid={isStepValid}
        />
      </div>
    </Card>
  )
}
