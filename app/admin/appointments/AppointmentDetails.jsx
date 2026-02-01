import AppointmentHeader from './AppointmentHeader'
import AppointmentInfo from './AppointmentInfo'
import AppointmentMessage from './AppointmentMessage'
import AppointmentTimestamp from './AppointmentTimestamp'

export default function AppointmentDetails({ appointment }) {
  return (
    <div className="flex-1">
      <AppointmentHeader appointment={appointment} />
      <AppointmentInfo appointment={appointment} />
      {appointment.message && <AppointmentMessage message={appointment.message} />}
      {appointment.createdAt && <AppointmentTimestamp createdAt={appointment.createdAt} />}
    </div>
  )
}
