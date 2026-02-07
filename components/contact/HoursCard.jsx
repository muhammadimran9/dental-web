import Card from '../ui/Card'

export default function HoursCard() {
  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Opening Hours</h2>
      <div className="space-y-2 text-gray-700">
        <HoursRow day="Monday - Friday" hours="9:00 AM - 6:00 PM" />
        <HoursRow day="Saturday" hours="9:00 AM - 2:00 PM" />
        <HoursRow day="Sunday" hours="Closed" />
        <EmergencyNote />
      </div>
    </Card>
  )
}

function HoursRow({ day, hours }) {
  return (
    <div className="flex justify-between">
      <span className="font-semibold">{day}</span>
      <span>{hours}</span>
    </div>
  )
}

function EmergencyNote() {
  return (
    <div className="mt-4 pt-4 border-t">
      <p className="text-sm text-gray-600">
        <strong>Emergency Care:</strong> Available 24/7
      </p>
    </div>
  )
}
