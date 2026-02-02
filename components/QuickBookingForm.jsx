import Button from './Button'

export default function QuickBookingForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Booking</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Book Appointment
        </Button>
      </form>
    </div>
  )
}
