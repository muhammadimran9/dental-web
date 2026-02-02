'use client'

import { useState } from 'react'
import Card from '../Card'
import StarIcon from '../icons/StarIcon'
import ChevronLeftIcon from '../icons/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon'

const testimonials = [
  {
    name: 'Sheikh Mohammed Al Maktoum',
    location: 'Dubai Marina',
    rating: 5,
    text: 'Exceptional dental care. Dr. Ahmed transformed my smile with world-class expertise. Truly Dubai\'s finest.',
    treatment: 'Full Smile Makeover'
  },
  {
    name: 'Fatima Al Qassimi',
    location: 'Abu Dhabi',
    rating: 5,
    text: 'The best pediatric dentist! My children actually enjoy visiting Dr. Fatima. Professional and caring.',
    treatment: 'Pediatric Care'
  },
  {
    name: 'Khalid Al Nahyan',
    location: 'Sharjah',
    rating: 5,
    text: 'Advanced orthodontic treatment. Dr. Hassan used cutting-edge technology. Results exceeded expectations.',
    treatment: 'Invisalign Treatment'
  }
]

export default function GulfTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted by UAE Elite
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from distinguished patients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
              "{current.text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-800">{current.name}</div>
                <div className="text-sm text-gray-600">{current.location}</div>
              </div>
              <div className="bg-accent/10 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-accent">{current.treatment}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
