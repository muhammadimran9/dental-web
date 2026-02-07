import StarIcon from '../icons/StarIcon'

export default function SliderContent({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <StarIcon key={i} className="text-yellow-400 w-6 h-6" />
            ))}
          </div>
          <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
            "{testimonial.text}"
          </p>
          <div>
            <p className="font-bold text-lg text-gray-900">{testimonial.name}</p>
            <p className="text-accent font-medium">{testimonial.service}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
