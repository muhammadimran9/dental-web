export default function AppointmentTimestamp({ createdAt }) {
  return (
    <p className="text-xs text-gray-500 mt-2">
      Submitted: {new Date(createdAt.seconds * 1000).toLocaleString()}
    </p>
  )
}
