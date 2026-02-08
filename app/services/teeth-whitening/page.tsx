import { SparklesIcon, PackageIcon, ZapIcon, ShieldIcon, DropletIcon, ClockIcon } from '@/components/ui/Icons'
import UniversalHero from '@/components/ui/UniversalHero'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

interface BenefitCardProps {
  title: string
  description: string
}

interface ProcessStepProps {
  number: string
  title: string
  description: string
}


export default function TeethWhitening() {
  return (
    <main>
      <UniversalHero 
        title="Teeth Whitening"
        subtitle="Brighten your smile safely"
        description="Professional teeth whitening treatments that deliver dramatic results while maintaining your dental health and comfort."
        backgroundImage="/dental-images/dental-white.jpg"
        overlayOpacity="bg-black/60"
      />
      <div className="container-custom py-16">
        <ServicesGrid />
        <BenefitsSection />
        <ProcessSection />
      </div>
    </main>
  )
}

function ServicesGrid() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={<SparklesIcon className="w-8 h-8 text-blue-600" />}
          title="In-Office Whitening"
          description="Professional-grade whitening treatment for immediate, dramatic results."
        />
        <ServiceCard 
          icon={<PackageIcon className="w-8 h-8 text-blue-600" />}
          title="Take-Home Kits"
          description="Custom whitening kits for convenient at-home touch-up treatments."
        />
        <ServiceCard 
          icon={<ZapIcon className="w-8 h-8 text-blue-600" />}
          title="Laser Whitening"
          description="Advanced laser technology for faster, more effective whitening."
        />
        <ServiceCard 
          icon={<ShieldIcon className="w-8 h-8 text-blue-600" />}
          title="Desensitizing"
          description="Treatments to reduce sensitivity during and after whitening."
        />
        <ServiceCard 
          icon={<DropletIcon className="w-8 h-8 text-blue-600" />}
          title="Stain Removal"
          description="Professional cleaning to remove stubborn stains before whitening."
        />
        <ServiceCard 
          icon={<ClockIcon className="w-8 h-8 text-blue-600" />}
          title="Quick Results"
          description="Noticeably whiter teeth in just one 60-minute session."
        />
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

function BenefitsSection() {
  return (
    <section className="mb-16 bg-blue-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Benefits of Professional Teeth Whitening
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          title="Immediate Results"
          description="Walk out with a noticeably whiter smile in just one visit."
        />
        <BenefitItem 
          title="Safe & Effective"
          description="FDA-approved treatments that are safe for your enamel."
        />
        <BenefitItem 
          title="Long-Lasting"
          description="Results can last 1-2 years with proper maintenance."
        />
        <BenefitItem 
          title="Boosted Confidence"
          description="A brighter smile significantly enhances your self-esteem."
        />
      </div>
    </section>
  )
}

function BenefitItem({ title, description }: BenefitCardProps) {
  return (
    <div className="flex gap-4 items-start text-center">
      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function ProcessSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Our Whitening Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number="1"
          title="Consultation"
          description="Evaluate your teeth and discuss whitening goals."
        />
        <ProcessStep 
          number="2"
          title="Preparation"
          description="Professional cleaning and protection of gums."
        />
        <ProcessStep 
          number="3"
          title="Whitening"
          description="Application of professional whitening gel."
        />
        <ProcessStep 
          number="4"
          title="Reveal"
          description="Remove gel and reveal your brighter smile."
        />
      </div>
    </section>
  )
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

