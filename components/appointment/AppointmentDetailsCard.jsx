import Card from '../Card'
import CheckCircleIcon from '../icons/CheckCircleIcon'
import { serviceCategories, services } from './appointmentData'

export default function AppointmentDetailsCard({ 
  selectedCategory, 
  selectedService, 
  selectedDate, 
  selectedTime 
}) {
  const categoryName = serviceCategories.find(c => c.id === selectedCategory)?.name
  const serviceDetails = services[selectedCategory]?.find(s => s.id === selectedService)

  return (
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
  )
}
