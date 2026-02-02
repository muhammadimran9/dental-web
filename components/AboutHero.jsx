import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission: Your 
              <span className="block text-accent font-extrabold">Healthy Smile</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Providing exceptional dental care with 20+ years of excellence, 
              compassion, and cutting-edge technology for your perfect smile.
            </p>
            <Link href="/appointment">
              <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-white">
                Book Consultation
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600988227859-6c2857df8de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Dental Clinic" 
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
