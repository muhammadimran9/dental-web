import StarIcon from './icons/StarIcon'

export default function RatingStars({ rating }) {
  return (
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <StarIcon key={i} className="text-yellow-400 text-xl" />
      ))}
    </div>
  )
}
