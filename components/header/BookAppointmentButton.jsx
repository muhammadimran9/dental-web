import Link from 'next/link'
import Button from '../ui/ButtonNew'
import { CalendarIcon } from '../ui/IconsNew'

export default function BookAppointmentButton() {
  return (
    <Link href="/appointment" className="hidden lg:block">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 text-sm uppercase text-center rounded-md">
        <div className="inline-flex items-center justify-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          <span className="text-sm">Book Appointment</span>
        </div>
      </Button>
    </Link>
  )
}
