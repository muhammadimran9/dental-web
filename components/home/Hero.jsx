import Link from 'next/link'
import Button from '../Button'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  )
}
