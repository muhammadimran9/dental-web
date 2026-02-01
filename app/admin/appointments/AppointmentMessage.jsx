export default function AppointmentMessage({ message }) {
  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-700"><strong>Message:</strong> {message}</p>
    </div>
  )
}
