import Card from './Card'
import SectionHeader from './SectionHeader'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Best dental experience I\'ve ever had! The staff is professional and caring.',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Pain-free root canal treatment. Highly recommend this clinic!',
  },
  {
    name: 'Emily Davis',
    rating: 5,
    text: 'My smile transformation exceeded all expectations. Thank you!',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader title="What Our Patients Say" subtitle="Real reviews from real patients" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
