import { MicroscopeIcon, ShieldIcon, ZapIcon, MonitorIcon, WrenchIcon, CrownIcon } from '@/components/ui/Icons'
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

export default function RootCanal() {
  return (
    <main>
      <UniversalHero 
        title="Root Canal Treatment"
        subtitle="Save your natural tooth"
        description="Advanced root canal therapy to relieve pain and preserve your natural tooth, preventing extraction."
        backgroundImage="/dental-images/2.png"
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
          icon={<MonitorIcon className="w-8 h-8 text-blue-600" />}
          title="Diagnostic Imaging"
          description="Digital X-rays and 3D imaging for precise diagnosis."
        />
        <ServiceCard 
          icon={<ZapIcon className="w-8 h-8 text-blue-600" />}
          title="Painless Treatment"
          description="Modern techniques ensuring comfortable root canal therapy."
        />
        <ServiceCard 
          icon={<CrownIcon className="w-8 h-8 text-blue-600" />}
          title="Crown Restoration"
          description="Custom crowns to restore strength and appearance."
        />
        <ServiceCard 
          icon={<WrenchIcon className="w-8 h-8 text-blue-600" />}
          title="Retreatment Options"
          description="Specialized care for failed previous root canals."
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
        Benefits of Root Canal Treatment
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          title="Pain Relief"
          description="Immediate relief from severe tooth pain and sensitivity."
        />
        <BenefitItem 
          title="Tooth Preservation"
          description="Save your natural tooth instead of extraction."
        />
        <BenefitItem 
          title="Prevents Spread"
          description="Stops infection from spreading to other teeth."
        />
        <BenefitItem 
          title="Restores Function"
          description="Return to normal chewing and biting function."
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
        Root Canal Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number="1"
          title="Diagnosis"
          description="X-rays and tests to confirm need for root canal."
        />
        <ProcessStep 
          number="2"
          title="Anesthesia"
          description="Local anesthesia for pain-free treatment."
        />
        <ProcessStep 
          number="3"
          title="Cleaning"
          description="Removal of infected pulp and cleaning of canals."
        />
        <ProcessStep 
          number="4"
          title="Sealing"
          description="Filling and sealing of the tooth to prevent reinfection."
        />
      </div>
    </section>
  )
}

function ProcessStep({ number, title, description }) {
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

