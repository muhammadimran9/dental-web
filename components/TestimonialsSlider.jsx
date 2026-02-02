import { useState } from 'react'
import Card from './Card'
import StarIcon from './icons/StarIcon'
import ChevronLeftIcon from './icons/ChevronLeftIcon'
import ChevronRightIcon from './icons/ChevronRightIcon'

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Best dental experience I\'ve ever had! The staff is professional and caring.',
    service: 'Teeth Whitening'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Pain-free root canal treatment. Highly recommend this clinic!',
    service: 'Root Canal'
  },
  {
    name: 'Emily Davis',
    rating: 5,
    text: 'My smile transformation exceeded all expectations. Thank you!',
    service: 'Veneers'
  },
  {
    name: 'Robert Wilson',
    rating: 5,
    text: 'Amazing emergency service. They saved my tooth!',
    service: 'Emergency Care'
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="text-yellow-400 w-6 h-6" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <p className="font-bold text-lg text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-accent font-medium">{testimonials[currentIndex].service}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
