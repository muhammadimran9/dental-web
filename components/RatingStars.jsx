export default function RatingStars({ rating }) {
  return (
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">⭐</span>
      ))}
    </div>
  )
}
