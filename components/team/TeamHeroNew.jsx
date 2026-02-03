import Image from 'next/image'
import Button from '../ui/ButtonNew'
import Link from 'next/link'

export default function TeamHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  )
}

function HeroContent() {
  return (
    <div>
      <HeroBadge />
      <HeroTitle />
      <HeroDescription />
      <HeroButtons />
    </div>
  )
}

function HeroBadge() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <span className="text-blue-300 font-semibold">Dubai's Elite Dental Professionals</span>
    </div>
  )
}

function HeroTitle() {
  return (
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Internationally Trained
      <span className="block text-blue-300 font-extrabold">Dental Experts</span>
    </h1>
  )
}

function HeroDescription() {
  return (
    <p className="text-xl text-gray-100 mb-8 leading-relaxed">
      Our Dubai-based team brings world-class expertise from Harvard, 
      King's College London, and leading international institutions.
      All DHA licensed professionals serving the UAE.
    </p>
  )
}

function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/appointment">
        <Button variant="secondary" className="bg-blue-500 hover:bg-blue-400 text-white">
          Book Expert Consultation
        </Button>
      </Link>
      <Link href="#team-grid">
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
          Meet Our Team
        </Button>
      </Link>
    </div>
  )
}

function HeroImage() {
  return (
    <div className="relative">
      <div className="aspect-square rounded-2xl overflow-hidden ring-4 ring-blue-400/20">
        <Image 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Dubai Dental Team" 
          fill
          className="object-cover"
        />
      </div>
      <ExperienceBadge />
    </div>
  )
}

function ExperienceBadge() {
  return (
    <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-lg p-4 shadow-xl">
      <p className="font-bold text-lg">70+ Years</p>
      <p className="text-sm">Combined Experience</p>
    </div>
  )
}
