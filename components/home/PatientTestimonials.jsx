import Card from '../Card'
import StarIcon from '../icons/StarIcon'

const testimonials = [
  {
    name: "Ahmed Hassan",
    service: "Dental Implants",
    rating: 5,
    text: "Outstanding service and professionalism. Dr. Sarah made me feel comfortable throughout the entire process. The results exceeded my expectations!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Maria Garcia",
    service: "Teeth Whitening",
    rating: 5,
    text: "The team at DentalCare Dubai is amazing. They explained everything clearly and the results were fantastic. My confidence has never been higher!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "James Wilson",
    service: "Orthodontic Treatment",
    rating: 5,
    text: "Dr. Chen transformed my smile with Invisalign. The entire journey was smooth and the staff was incredibly supportive. Highly recommend!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Fatima Al-Mansoori",
    service: "Pediatric Dentistry",
    rating: 5,
    text: "Dr. Emily is wonderful with children. My kids actually look forward to dental visits now. The clinic is clean, modern, and very welcoming.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
]

export default function PatientTestimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-700 font-medium text-sm">Patient Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Patients
            <span className="block text-blue-600">Say About Us</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from real patients. Discover why thousands of Dubai residents 
            trust DentalCare Dubai with their smiles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-blue-50 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, service, rating, text, image }) {
  return (
    <Card className="p-6 space-y-4">
      {/* Rating */}
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      {/* Testimonial */}
      <p className="text-gray-700 leading-relaxed">"{text}"</p>
      
      {/* Patient Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-blue-600">{service}</div>
        </div>
      </div>
    </Card>
  )
}
