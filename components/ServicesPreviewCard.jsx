import Link from 'next/link'
import Card from './Card'

export default function ServiceCard({ title, description, icon, href }) {
  return (
    <Link href={href}>
      <Card hover>
        <div className="text-4xl mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </Link>
  )
}
