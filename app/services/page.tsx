import { useState } from 'react'
import ServicesHero from '@/components/ServicesHero'
import ServiceTabs from '@/components/ServiceTabs'
import EnhancedServiceCard from '@/components/EnhancedServiceCard'
import StickyBooking from '@/components/StickyBooking'
import ServicesFAQ from '@/components/ServicesFAQ'
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional dental care tailored to your needs
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
