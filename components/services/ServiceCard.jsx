import Link from 'next/link'
import Card from '../ui/Card'

export default function ServiceCard({ title, description, icon, href }) {
  return (
    <Link href={href}>
      <Card hover className="group">
        <div className="text-5xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
          Learn More 
          <span className="ml-2 text-xs">›</span>
        </div>
      </Card>
    </Link>
  )
}
