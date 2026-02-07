import Card from '../ui/Card'
import StarIcon from '../icons/StarIcon'
import TestimonialNavigation from './TestimonialNavigation'

export default function GulfTestimonialCard({ testimonial, onPrev, onNext }) {
  return (
    <Card className="p-8 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-accent fill-current" />
          ))}
        </div>
        <TestimonialNavigation onPrev={onPrev} onNext={onNext} />
      </div>

      <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </blockquote>

      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-gray-800">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.location}</div>
        </div>
        <div className="bg-accent/10 px-4 py-2 rounded-lg">
          <span className="text-sm font-semibold text-accent">{testimonial.treatment}</span>
        </div>
      </div>
    </Card>
  )
}
