'use client'

import { useState } from 'react'
import SliderContent from './SliderContent'
import SliderControls from './SliderControls'
import { sliderTestimonials } from './sliderTestimonialsData'

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderTestimonials.length) % sliderTestimonials.length)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Patient Success Stories
          </h2>
          <p className="text-xl text-gray-600">Real reviews from real patients</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <SliderContent testimonial={sliderTestimonials[currentIndex]} />
          <SliderControls onPrev={prevTestimonial} onNext={nextTestimonial} />
        </div>
      </div>
    </section>
  )
}
