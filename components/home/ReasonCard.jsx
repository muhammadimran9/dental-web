import Card from './ui/Card'

export default function ReasonCard({ icon, title, description }) {
  return (
    <Card hover>
      <div className="text-4xl mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Card>
  )
}
