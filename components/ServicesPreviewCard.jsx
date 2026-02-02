import Link from 'next/link'
import Card from './Card'
import Button from './Button'

export default function ServiceCard({ title, description, icon, href }) {
  return (
    <Card hover className="text-center">
      <div className="text-5xl mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={href}>
        <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-white">
          Learn More
        </Button>
      </Link>
    </Card>
  )
}
