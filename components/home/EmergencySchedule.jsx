import Card from '../ui/Card'
import EmergencyDentalImage from '../images/EmergencyDentalImage'

export default function EmergencySchedule() {
  return (
    <Card className="bg-white">
      <div className="text-center">
        <EmergencyDentalImage className="w-16 h-16 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Available 24/7</h3>
        <div className="space-y-3 text-left">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-semibold">8:00 AM - 8:00 PM</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Saturday</span>
            <span className="font-semibold">9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Sunday</span>
            <span className="font-semibold">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Emergency Hotline</span>
            <span className="font-semibold text-red-600">24/7 Available</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
