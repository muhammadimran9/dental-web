'use client'
import Link from 'next/link'
import { services } from '@/lib/servicesData'

export default function HomeServices() {
  const featuredServices = services.slice(0, 6)

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From routine check-ups to advanced treatments, we provide complete dental solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg hover:shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
