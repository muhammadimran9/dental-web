import Card from '../ui/Card'
import StarIcon from '../icons/StarIcon'

export default function TestimonialCard({ name, service, rating, text, image }) {
  return (
    <Card className="p-6 group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <div className="flex-1 mb-4">
        <p className="text-gray-700 leading-relaxed text-base italic">"{text}"</p>
      </div>
      
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 group-hover:border-blue-200 transition-all duration-300 shadow-md flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-900 text-base group-hover:text-blue-600 transition-colors duration-300">{name}</div>
          <div className="text-sm text-blue-600 font-medium">{service}</div>
        </div>
      </div>
    </Card>
  )
}
