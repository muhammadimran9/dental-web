export default function AppointmentHeader({ appointment }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <h3 className="text-xl font-semibold text-secondary">{appointment.name}</h3>
      {!appointment.read && (
        <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
          New
        </span>
      )}
    </div>
  )
}
