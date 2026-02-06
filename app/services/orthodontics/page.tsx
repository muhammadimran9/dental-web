import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeaderNew'
import { ToothIcon, SparklesIcon, PaletteIcon, RetainerIcon, MicroscopeIcon, LightningIcon } from '@/components/ui/IconsNew'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

interface ProcessItemProps {
  title: string
  subtitle: string
  description: string
}

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function Orthodontics() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />
      <Header />
      <main className="container-custom py-16">
        <ServiceHero 
          title="Orthodontics"
          subtitle="Straighten your smile with confidence"
          description="Advanced orthodontic treatments to align your teeth and create the perfect smile you've always wanted."
        />
        <ServicesGrid />
        <BenefitsSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  )
}

function ServicesGrid() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={<ToothIcon className="w-8 h-8 text-blue-600" />}
          title="Traditional Braces"
          description="Time-tested metal braces for effective teeth alignment."
        />
        <ServiceCard 
          icon={<SparklesIcon className="w-8 h-8 text-blue-600" />}
          title="Clear Aligners"
          description="Nearly invisible aligners for discreet teeth straightening."
        />
        <ServiceCard 
          icon={<PaletteIcon className="w-8 h-8 text-blue-600" />}
          title="Ceramic Braces"
          description="Tooth-colored braces for a more aesthetic appearance."
        />
        <ServiceCard 
          icon={<RetainerIcon className="w-8 h-8 text-blue-600" />}
          title="Retainers"
          description="Custom retainers to maintain your perfect smile."
        />
        <ServiceCard 
          icon={<MicroscopeIcon className="w-8 h-8 text-blue-600" />}
          title="3D Imaging"
          description="Advanced digital scanning for precise treatment planning."
        />
        <ServiceCard 
          icon={<LightningIcon className="w-8 h-8 text-blue-600" />}
          title="Fast Treatment"
          description="Accelerated orthodontics for quicker results."
        />
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitsSection() {
  return (
    <section className="mb-16 bg-blue-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Benefits of Orthodontic Treatment
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          title="Improved Confidence"
          description="A straight smile boosts self-esteem and social confidence."
        />
        <BenefitItem 
          title="Better Oral Health"
          description="Aligned teeth are easier to clean and maintain."
        />
        <BenefitItem 
          title="Enhanced Function"
          description="Improved bite and chewing efficiency."
        />
        <BenefitItem 
          title="Long-Term Results"
          description="Permanent solution for a lifetime of beautiful smiles."
        />
      </div>
    </section>
  )
}

function BenefitItem({ title, description }) {
  return (
    <div className="flex gap-4 items-start">
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
        Our Orthodontic Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number="1"
          title="Consultation"
          description="Comprehensive evaluation and discussion of treatment goals."
        />
        <ProcessStep 
          number="2"
          title="Treatment Planning"
          description="Digital imaging and custom treatment design."
        />
        <ProcessStep 
          number="3"
          title="Active Treatment"
          description="Regular adjustments and progress monitoring."
        />
        <ProcessStep 
          number="4"
          title="Retention"
          description="Retainers to maintain your perfect smile."
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

function ServiceHero({ title, subtitle, description }) {
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
