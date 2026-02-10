import Image from 'next/image'

const reasons = [
  { image: '/dental-images/12.png', title: 'Modern Technology', description: 'State-of-the-art equipment for precise treatment' },
  { image: '/dental-images/13.png', title: 'Experienced Dentists', description: 'Expert care from qualified professionals' },
  { image: '/dental-images/14.png', title: 'Pain-Free Treatment', description: 'Comfortable procedures with advanced techniques' },
  { image: '/dental-images/15.png', title: 'Affordable Pricing', description: 'Quality dental care at competitive rates' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">What sets us apart from other dental clinics</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition group">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image src={reason.image} alt={reason.title} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition">{reason.title}</h3>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
