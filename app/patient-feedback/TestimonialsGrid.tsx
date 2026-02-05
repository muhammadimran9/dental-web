export default function TestimonialsGrid() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        What Our Patients Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard 
          name="Sarah Johnson"
          treatment="Teeth Whitening"
          rating={5}
          date="March 2024"
          comment="Amazing experience! The team was professional and results exceeded my expectations. My smile has never been brighter!"
          avatar="👩‍⚕️"
        />
        <TestimonialCard 
          name="Mohammed Al-Rashid"
          treatment="Dental Implants"
          rating={5}
          date="February 2024"
          comment="Dr. Ahmed and his team are exceptional. The implant procedure was painless and results look completely natural."
          avatar="👨‍⚕️"
        />
        <TestimonialCard 
          name="Emily Chen"
          treatment="Invisalign"
          rating={5}
          date="January 2024"
          comment="Best decision ever! The Invisalign treatment was comfortable and convenient. I love my new smile!"
          avatar="👩‍⚕️"
        />
        <TestimonialCard 
          name="Ahmed Hassan"
          treatment="Root Canal"
          rating={5}
          date="December 2023"
          comment="I was terrified of root canal, but Dr. Sarah made it completely painless. Highly recommend!"
          avatar="👨‍⚕️"
        />
        <TestimonialCard 
          name="Fatima Al-Mansoori"
          treatment="Cosmetic Dentistry"
          rating={5}
          date="November 2023"
          comment="The veneers transformed my smile! The attention to detail and artistic approach is incredible."
          avatar="👩‍⚕️"
        />
        <TestimonialCard 
          name="John Smith"
          treatment="General Checkup"
          rating={5}
          date="October 2023"
          comment="Professional, thorough, and caring. The entire team makes you feel comfortable and well-cared for."
          avatar="👨‍⚕️"
        />
      </div>
    </section>
  )
}

function TestimonialCard({ name, treatment, rating, date, comment, avatar }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{avatar}</div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">{name}</h4>
            <p className="text-sm text-blue-600 font-medium">{treatment}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">⭐</span>
        ))}
      </div>
      <p className="text-gray-600 italic">"{comment}"</p>
    </div>
  )
}
