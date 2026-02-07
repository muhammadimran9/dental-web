import Image from 'next/image'
import Button from '../ui/Button'
import Link from 'next/link'

export default function TeamHero() {
  return (
    <section className="relative text-white section-padding" style={{backgroundColor: '#2563EB'}}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-semibold">Dubai's Elite Dental Professionals</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Internationally Trained
              <span className="block text-accent font-extrabold">Dental Experts</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
              Our Dubai-based team brings world-class expertise from Harvard, 
              King's College London, and leading international institutions.
              All DHA licensed professionals serving the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/appointment">
                <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  Book Expert Consultation
                </Button>
              </Link>
              <Link href="#team-grid">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
            <div className="relative order-first md:order-last">
            <div className="aspect-square rounded-2xl overflow-hidden ring-4 ring-accent/20 max-w-md mx-auto md:max-w-none">
              <Image 
                src="/images/team-hero.svg" 
                alt="Dental Experts Team" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white rounded-lg p-3 sm:p-4 shadow-xl">
              <p className="font-bold text-base sm:text-lg">70+ Years</p>
              <p className="text-xs sm:text-sm">Combined Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
