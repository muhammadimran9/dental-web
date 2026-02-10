'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { services } from '@/lib/servicesData'
import ConsultationModal from '@/components/ConsultationModal'

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const openModal = (serviceName) => {
    setSelectedService(serviceName)
    setModalOpen(true)
  }

  return (
    <div>
      <PricingHero />
      <ServicesPricing openModal={openModal} />
      <DentalPlan />
      <PaymentOptions />
      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceName={selectedService}
      />
    </div>
  )
}

function PricingHero() {
  return (
    <section className="relative h-[50vh] bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="absolute inset-0">
        <Image src="/dental-images/22.png" alt="Pricing" fill className="object-cover opacity-20" />
      </div>
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-2xl mb-8">Quality dental care with clear, competitive pricing and flexible payment options</p>
        </div>
      </div>
    </section>
  )
}

function ServicesPricing({ openModal }) {
  const categories = {
    'Preventive Care': ['routine-dental-checkup', 'teeth-cleaning'],
    'Cosmetic Dentistry': ['teeth-whitening', 'dental-veneers', 'cosmetic-dentistry'],
    'Restorative': ['dental-implants', 'dental-crowns', 'dental-fillings', 'root-canal-treatment'],
    'Orthodontics': ['orthodontic-treatment', 'metal-braces', 'clear-aligners'],
    'Specialized Care': ['childrens-dentistry', 'gum-treatment', 'emergency-dental-care']
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services & Pricing</h2>
          <p className="text-xl text-gray-600">Click "Get Offer" for a free consultation</p>
        </div>

        {Object.entries(categories).map(([category, slugs]) => (
          <div key={category} className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">{category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slugs.map(slug => {
                const service = services.find(s => s.slug === slug)
                if (!service) return null
                return (
                  <div key={slug} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-xl transition group">
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{service.description}</p>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => openModal(service.title)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl"
                      >
                        Get Offer
                      </button>
                      <Link 
                        href={`/services/${slug}`} 
                        className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg font-bold text-center transition"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DentalPlan() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dental Membership Plan</h2>
          <p className="text-xl text-gray-600">Save up to 40% with our annual membership</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">AED 199</div>
              <div className="text-gray-600">per month</div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700">2 Free dental checkups per year</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700">2 Professional cleanings included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700">20% discount on all treatments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700">Priority appointment scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700">Emergency care coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700">Family discounts available</span>
              </li>
            </ul>
            <Link href="/pricing/dental-plan" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg mt-8 transition">
              Join Now
            </Link>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-green-600 mb-2">Save 40%</div>
              <div className="text-xl text-gray-600">Compared to pay-per-visit</div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Annual Savings Example:</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>2 Checkups:</span>
                  <span className="font-semibold">AED 400</span>
                </div>
                <div className="flex justify-between">
                  <span>2 Cleanings:</span>
                  <span className="font-semibold">AED 500</span>
                </div>
                <div className="flex justify-between">
                  <span>Treatment Discounts:</span>
                  <span className="font-semibold">AED 1,000+</span>
                </div>
                <div className="border-t-2 border-green-300 pt-2 mt-2 flex justify-between text-lg font-bold text-green-600">
                  <span>Total Value:</span>
                  <span>AED 1,900+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PaymentOptions() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Flexible Payment Options</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Credit/Debit</h3>
            <p className="text-gray-600 text-sm">All major cards</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Plans</h3>
            <p className="text-gray-600 text-sm">0% financing</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance</h3>
            <p className="text-gray-600 text-sm">Most plans accepted</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cash</h3>
            <p className="text-gray-600 text-sm">Instant discounts</p>
          </div>
        </div>
      </div>
    </section>
  )
}
