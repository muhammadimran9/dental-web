export default function AppointmentInfo({ appointment }) {
  return (
    <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
      <p><strong>Phone:</strong> <a href={`tel:${appointment.phone}`} className="text-primary hover:underline">{appointment.phone}</a></p>
      <p><strong>Email:</strong> <a href={`mailto:${appointment.email}`} className="text-primary hover:underline">{appointment.email}</a></p>
      <p><strong>Preferred Date:</strong> {appointment.preferredDate}</p>
      <p><strong>Status:</strong> <span className="capitalize">{appointment.status}</span></p>
    </div>
  )
}
