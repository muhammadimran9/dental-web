import AppointmentDetailsCard from './AppointmentDetailsCard'
import PatientInformationCard from './PatientInformationCard'
import ImportantInformation from './ImportantInformation'

export default function AppointmentConfirmation({ 
  selectedCategory, 
  selectedService, 
  selectedDate, 
  selectedTime, 
  formData 
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Confirm Your Appointment</h3>
      
      <AppointmentDetailsCard
        selectedCategory={selectedCategory}
        selectedService={selectedService}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />

      <PatientInformationCard formData={formData} />

      <ImportantInformation />
    </div>
  )
}
