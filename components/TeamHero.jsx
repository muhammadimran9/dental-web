import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export default function TeamHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Expert
              <span className="block text-accent font-extrabold">Dental Team</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Our experienced dentists and staff are dedicated to providing 
              exceptional care with compassion and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment">
                <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-white">
                  Book Consultation
                </Button>
              </Link>
              <Link href="#team-grid">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Team
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Dental Team" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
