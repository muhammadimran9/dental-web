import Link from 'next/link'
import Card from '../ui/Card'
import Button from '../ui/Button'
import ArrowRightIcon from '../icons/ArrowRightIcon'

export default function ServicesPreviewCard({ title, description, icon, href }) {
  return (
    <Card hover className="group text-center h-full flex flex-col relative overflow-hidden">
      <div className="p-8 space-y-6 flex-1 flex flex-col relative z-10">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 shadow-lg">
          <div className="text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4 flex-1">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base">
            {description}
          </p>
        </div>
        
        {/* CTA */}
        <div className="mt-auto pt-4">
          <Link href={href}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                Learn More
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  )
}
