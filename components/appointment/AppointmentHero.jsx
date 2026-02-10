import UniversalHero from '../ui/UniversalHero'
import CalendarIcon from '../icons/CalendarIcon'
import ClockIcon from '../icons/ClockIcon'

export default function AppointmentHero() {
  return (
    <UniversalHero 
      title="Book Your"
      subtitle="Appointment"
      description="Schedule your visit in just 30 seconds. Choose your preferred date and time, and we'll confirm your appointment instantly."
      backgroundImage="/dental-images/appointment-bg.jpg"
      overlayOpacity="bg-black/60"
    >
      <div className="flex justify-center gap-8 mb-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-12 h-12 text-white" />
          <span className="text-2xl font-bold text-white">30 Seconds</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="w-12 h-12 text-white" />
          <span className="text-2xl font-bold text-white">Quick Booking</span>
        </div>
      </div>
    </UniversalHero>
  )
}
