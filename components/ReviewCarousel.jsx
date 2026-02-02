'use client'

import { useState } from 'react'
import StarIcon from './icons/StarIcon'
import ChevronLeftIcon from './icons/ChevronLeftIcon'
import ChevronRightIcon from './icons/ChevronRightIcon'

const reviews = [
  { name: 'Sarah Johnson', rating: 5, text: 'Amazing experience! Professional staff and great results.' },
  { name: 'Michael Chen', rating: 5, text: 'Pain-free treatment. Highly recommend!' },
  { name: 'Emily Davis', rating: 5, text: 'Transformed my smile. Thank you!' },
  { name: 'Robert Wilson', rating: 5, text: 'Best dental clinic in town!' },
]

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          {[...Array(reviews[currentIndex].rating)].map((_, i) => (
            <StarIcon key={i} className="text-yellow-400 w-5 h-5" />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">"{reviews[currentIndex].text}"</p>
        <p className="font-semibold text-gray-900">- {reviews[currentIndex].name}</p>
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button onClick={prevReview} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
        <button onClick={nextReview} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
