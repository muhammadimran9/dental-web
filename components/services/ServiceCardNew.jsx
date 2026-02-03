import Link from 'next/link'
import Card from '../ui/CardNew'
import Button from '../ui/ButtonNew'
import { ArrowRightIcon } from '../ui/IconsNew'

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  className = ''
}) {
  return (
    <Card hover className={className}>
      <div className="space-y-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {icon}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>
        
        <Link href={href}>
          <Button variant="outline" size="sm" className="w-full">
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </Card>
  )
}
