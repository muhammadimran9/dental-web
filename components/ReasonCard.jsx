import Card from './ui/Card'

export default function ReasonCard({ icon, title, description }) {
  return (
    <Card className="text-center hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-primary text-3xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}
