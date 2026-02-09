'use client'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/ChevronLeftIcon'

const testimonials = [
  { name: 'Sarah Ahmed', role: 'Dubai Marina', text: 'Exceptional dental care! The team made me feel comfortable throughout my treatment. Highly recommend their cosmetic dentistry services.', rating: 5 },
  { name: 'Mohammed Al-Rashid', role: 'Business Bay', text: 'Professional and caring staff. My dental implant procedure was painless and the results are amazing. Best dental clinic in Dubai!', rating: 5 },
  { name: 'Emily Johnson', role: 'JBR', text: 'Outstanding service from start to finish. The clinic is modern, clean, and the doctors are highly skilled. My smile has never looked better!', rating: 5 },
  { name: 'Ahmed Hassan', role: 'Downtown Dubai', text: 'I was nervous about my root canal, but the team was so gentle and professional. The entire experience exceeded my expectations.', rating: 5 }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <p className="text-xl text-gray-700 text-center mb-8 italic">"{testimonials[current].text}"</p>
            <div className="text-center">
              <p className="font-bold text-gray-900 text-lg">{testimonials[current].name}</p>
              <p className="text-gray-600">{testimonials[current].role}</p>
            </div>
          </div>
          
          <button onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="text-2xl">‹</span>
          </button>
          <button onClick={() => setCurrent((current + 1) % testimonials.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="text-2xl">›</span>
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition ${current === i ? 'bg-blue-600' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
