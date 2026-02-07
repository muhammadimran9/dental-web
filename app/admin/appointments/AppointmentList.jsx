import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import AppointmentCard from './AppointmentCard'

export default function AppointmentList({ appointments, onMarkAsRead, onDelete }) {
  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onMarkAsRead={onMarkAsRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
