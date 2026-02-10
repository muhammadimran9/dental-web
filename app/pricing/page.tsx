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
              {[
                '2 Free dental checkups per year',
                '2 Professional cleanings included',
                '20% discount on all treatments',
                'Priority appointment scheduling',
                'Emergency care coverage',
                'Family discounts available'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
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
  const options = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Credit/Debit',
      desc: 'All major cards'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Payment Plans',
      desc: '0% financing'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Insurance',
      desc: 'Most plans accepted'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Cash',
      desc: 'Instant discounts'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Flexible Payment Options</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {options.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
