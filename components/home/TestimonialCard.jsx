import Card from '../ui/Card'
import StarIcon from '../icons/StarIcon'

export default function TestimonialCard({ name, service, rating, text, image }) {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed">"{text}"</p>
      
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-blue-600">{service}</div>
        </div>
      </div>
    </Card>
  )
}
