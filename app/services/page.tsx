"use client";
import { useState } from 'react'
import ContactHeader from '@/components/ContactHeader'
import ServicesHero from '@/components/services/ServicesHero'
import ServiceTabs from '@/components/services/ServiceTabs'
import EnhancedServiceCard from '@/components/services/EnhancedServiceCard'
import StickyBooking from '@/components/services/StickyBooking'
import ServicesFAQ from '@/components/services/ServicesFAQ'
import { allServices } from '@/components/servicesConfig'

export const dynamic = 'force-dynamic'

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => 
        service.title.toLowerCase().includes(activeCategory.toLowerCase())
      )

  return (
    <div>
      <ServicesHero />
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Comprehensive Dental Services
            </h1>
            <p className="text-xl text-gray-600">
              Professional dental care tailored to your needs in Dubai Healthcare City
            </p>
          </div>
          
          <ServiceTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredServices.map((service, index) => (
                  <EnhancedServiceCard 
                    key={index} 
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    href={service.href}
                    beforeImage={null}
                    afterImage={null}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <StickyBooking />
            </div>
          </div>
        </div>
      </section>
      <ServicesFAQ />
    </div>
  )
}
