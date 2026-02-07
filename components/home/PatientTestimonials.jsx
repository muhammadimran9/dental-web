import TestimonialCard from './TestimonialCard'
import TestimonialsHeader from './TestimonialsHeader'
import TrustIndicators from './TrustIndicators'
import { testimonials } from './testimonialsData'

export default function PatientTestimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <TestimonialsHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <TrustIndicators />
      </div>
    </section>
  )
}
