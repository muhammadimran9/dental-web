import Card from '../Card'
import CheckCircleIcon from '../icons/CheckCircleIcon'
import { serviceCategories, services } from './appointmentData'

export default function AppointmentConfirmation({ 
  selectedCategory, 
  selectedService, 
  selectedDate, 
  selectedTime, 
  formData 
}) {
  const categoryName = serviceCategories.find(c => c.id === selectedCategory)?.name
  const serviceDetails = services[selectedCategory]?.find(s => s.id === selectedService)

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Confirm Your Appointment</h3>
      
      <Card className="mb-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="font-medium">Appointment Details</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Service Category</p>
              <p className="font-medium text-gray-800">{categoryName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Specific Service</p>
              <p className="font-medium text-gray-800">{serviceDetails?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date</p>
              <p className="font-medium text-gray-800">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Time</p>
              <p className="font-medium text-gray-800">{selectedTime}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-medium text-gray-800">{serviceDetails?.duration}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="font-medium text-primary">{serviceDetails?.price}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="font-medium">Patient Information</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-medium text-gray-800">{formData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-800">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium text-gray-800">{formData.phone}</p>
            </div>
            {formData.notes && (
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">Notes</p>
                <p className="font-medium text-gray-800">{formData.notes}</p>
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-800 mb-2">Important Information</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Please arrive 10 minutes before your appointment</li>
          <li>• Bring your ID and insurance card if applicable</li>
          <li>• Cancel 24 hours in advance to avoid cancellation fee</li>
          <li>• We'll send a confirmation email and SMS reminder</li>
        </ul>
      </div>
    </div>
  )
}
