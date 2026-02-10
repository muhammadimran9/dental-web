import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { services } from '@/lib/servicesData'
import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  
  if (!service) {
    return { title: 'Service Not Found' }
  }
  
  return {
    title: `${service.title} | Dental Services`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100">{service.description}</p>
        </div>
      </section>

      {/* Service Image */}
      {service.image && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 mb-8">{service.content}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Treatment Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Duration</p>
                  <p className="text-gray-900">{service.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Price</p>
                  <p className="text-gray-900">{service.price}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/appointment">
              <Button variant="primary" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
