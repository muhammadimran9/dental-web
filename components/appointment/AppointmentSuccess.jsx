import Card from '../ui/Card'
import CheckCircleIcon from '../icons/CheckCircleIcon'
import { serviceCategories } from './appointmentData'

export default function AppointmentSuccess({ formData }) {
  const categoryName = serviceCategories.find(c => c.id === formData.selectedCategory)?.name

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
            Service: {categoryName}
          </p>
        </div>
      </div>
    </Card>
  )
}
