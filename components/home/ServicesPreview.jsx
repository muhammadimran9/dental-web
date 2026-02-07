import Link from 'next/link'
import Button from '../ui/Button'
import Card from '../ui/Card'
import SectionHeader from '../SectionHeader'
import ServiceCard from './ServicesPreviewCard'
import { previewServices } from '../servicesConfig'
import ServicesGrid from '../services/ServicesGrid'
import ViewAllButton from '../ViewAllButton'

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-700 font-medium text-sm">Our Dental Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Dental Care
            <span className="block text-blue-600">For Your Entire Family</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine check-ups to advanced cosmetic procedures, our internationally trained specialists 
            provide world-class dental care using the latest technology and techniques.
          </p>
        </div>
        
        <ServicesGrid services={previewServices} ServiceCard={ServiceCard} />
        
        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
