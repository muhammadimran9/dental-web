import ServiceCategorySelection from './ServiceCategorySelection'
import ServiceSelection from './ServiceSelection'
import DateTimeSelection from './DateTimeSelection'
import PersonalInformation from './PersonalInformation'
import AppointmentConfirmation from './AppointmentConfirmation'

export default function FormSteps({ currentStep, formData, updateFormData, handleInputChange }) {
  return (
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
  )
}
