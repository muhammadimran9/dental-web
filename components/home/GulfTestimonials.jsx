'use client'

import { useState } from 'react'
import GulfTestimonialCard from './GulfTestimonialCard'
import { gulfTestimonials } from './gulfTestimonialsData'

export default function GulfTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % gulfTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + gulfTestimonials.length) % gulfTestimonials.length)
  }

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
          <GulfTestimonialCard 
            testimonial={gulfTestimonials[currentIndex]}
            onPrev={prevTestimonial}
            onNext={nextTestimonial}
          />
        </div>
      </div>
    </section>
  )
}
