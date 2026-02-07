import { ToothIcon, BridgeIcon, MicroscopeIcon, LightningIcon, ShieldCheckIcon } from '@/components/ui/Icons'

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

interface ProcessItemProps {
  title: string
  subtitle: string
  description: string
}

export default function DentalImplants() {
  return (
    <main className="container-custom py-16">
      <ServiceHero 
        title="Dental Implants"
        subtitle="Permanent solution for missing teeth"
        description="State-of-the-art dental implants that look, feel, and function like natural teeth, restoring your smile and confidence."
      />
      <ServicesGrid />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}

function ServicesGrid() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={<ToothIcon className="w-8 h-8 text-blue-600" />}
          title="Single Tooth Implants"
          description="Individual implant placement for single missing teeth with natural-looking crowns."
        />
        <ServiceCard 
          icon={<div className="flex gap-1"><ToothIcon className="w-8 h-8 text-blue-600" /><ToothIcon className="w-8 h-8 text-blue-600" /></div>}
          title="Multiple Implants"
          description="Multiple implant solutions for replacing several missing teeth."
        />
        <ServiceCard 
          icon={<BridgeIcon className="w-8 h-8 text-blue-600" />}
          title="Full Arch Restoration"
          description="Complete upper or lower jaw restoration with implant-supported dentures."
        />
        <ServiceCard 
          icon={<MicroscopeIcon className="w-8 h-8 text-blue-600" />}
          title="3D Imaging"
          description="Advanced CT scanning for precise implant planning and placement."
        />
        <ServiceCard 
          icon={<LightningIcon className="w-8 h-8 text-blue-600" />}
          title="Immediate Loading"
          description="Same-day implant placement with temporary crowns in select cases."
        />
        <ServiceCard 
          icon={<ShieldCheckIcon className="w-8 h-8 text-blue-600" />}
          title="Bone Grafting"
          description="Bone augmentation to ensure successful implant integration."
        />
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 text-center">
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
        Why Choose Dental Implants?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          title="Natural Appearance"
          description="Implants look and feel exactly like your natural teeth."
        />
        <BenefitItem 
          title="Permanent Solution"
          description="Unlike dentures, implants are a permanent tooth replacement option."
        />
        <BenefitItem 
          title="Preserves Bone"
          description="Implants prevent bone loss that occurs with missing teeth."
        />
        <BenefitItem 
          title="High Success Rate"
          description="Modern implants have over 95% success rate with proper care."
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
        Dental Implant Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number="1"
          title="Consultation"
          description="Comprehensive evaluation and 3D imaging for implant planning."
        />
        <ProcessStep 
          number="2"
          title="Implant Placement"
          description="Surgical placement of titanium implant in the jawbone."
        />
        <ProcessStep 
          number="3"
          title="Healing"
          description="3-6 months for implant to integrate with jawbone."
        />
        <ProcessStep 
          number="4"
          title="Restoration"
          description="Placement of custom crown on the integrated implant."
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

function ServiceHero({ title, subtitle, description }: ProcessItemProps) {
  return (
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        {title}
      </h1>
      <p className="text-xl text-blue-600 font-medium mb-6">{subtitle}</p>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </section>
  )
}
