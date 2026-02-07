export default function EmergencyItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
