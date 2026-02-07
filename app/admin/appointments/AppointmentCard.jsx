import Card from '@/components/ui/Card'
import AppointmentDetails from './AppointmentDetails'
import AppointmentActions from './AppointmentActions'

export default function AppointmentCard({ appointment, onMarkAsRead, onDelete }) {
  return (
    <Card className={!appointment.read ? 'border-l-4 border-primary' : ''}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <AppointmentDetails appointment={appointment} />
        <AppointmentActions 
          appointment={appointment} 
          onMarkAsRead={onMarkAsRead} 
          onDelete={onDelete} 
        />
      </div>
    </Card>
  )
}
