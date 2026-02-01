import Card from './Card'
import RatingStars from './RatingStars'

export default function TestimonialCard({ name, rating, text }) {
  return (
    <Card hover>
      <RatingStars rating={rating} />
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <p className="font-semibold text-gray-800">- {name}</p>
    </Card>
  )
}
