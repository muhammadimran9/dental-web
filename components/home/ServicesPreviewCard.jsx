import Link from 'next/link'
import Card from '../ui/Card'
import Button from '../ui/Button'
import ArrowRightIcon from '../icons/ArrowRightIcon'

export default function ServicesPreviewCard({ title, description, icon, href }) {
  return (
    <Card hover className="group text-center h-full">
      <div className="p-8 space-y-6">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
          <div className="text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* CTA */}
        <Link href={href}>
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
            Learn More
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </Link>
      </div>
    </Card>
  )
}
