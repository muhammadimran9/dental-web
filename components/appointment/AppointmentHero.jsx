import CalendarIcon from '../icons/CalendarIcon'
import ClockIcon from '../icons/ClockIcon'

export default function AppointmentHero() {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-white section-padding">
      <div className="container-custom text-center">
        <div className="flex justify-center gap-8 mb-6">
          <div className="flex items-center gap-2">
            <CalendarIcon className="text-3xl" />
            <span className="text-2xl font-bold">30 Seconds</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="text-3xl" />
            <span className="text-2xl font-bold">Quick Booking</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Book Your <span className="text-accent font-extrabold">Appointment</span>
        </h1>
        <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Schedule your visit in just 30 seconds. Choose your preferred date and time, 
          and we'll confirm your appointment instantly.
        </p>
      </div>
    </section>
  )
}
