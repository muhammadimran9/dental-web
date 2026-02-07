import { ToothIcon, SparklesIcon, MicroscopeIcon, ShieldCheckIcon, ClipboardIcon, LightningIcon } from '@/components/ui/Icons'

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

export default function GeneralDentistry() {
  return (
    <main className="container-custom py-16">
      <ServiceHero 
        title="General Dentistry"
        subtitle="Comprehensive dental care for the whole family"
        description="From routine checkups to preventive care, we provide complete dental services to maintain your oral health."
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
          title="Dental Checkups"
          description="Comprehensive oral examinations to detect and prevent dental issues early."
        />
        <ServiceCard 
          icon={<SparklesIcon className="w-8 h-8 text-blue-600" />}
          title="Teeth Cleaning"
          description="Professional cleaning to remove plaque and maintain healthy gums."
        />
        <ServiceCard 
          icon={<MicroscopeIcon className="w-8 h-8 text-blue-600" />}
          title="X-Rays & Diagnostics"
          description="Advanced imaging technology for accurate diagnosis and treatment planning."
        />
        <ServiceCard 
          icon={<ShieldCheckIcon className="w-8 h-8 text-blue-600" />}
          title="Preventive Care"
          description="Fluoride treatments and sealants to protect against cavities."
        />
        <ServiceCard 
          icon={<ClipboardIcon className="w-8 h-8 text-blue-600" />}
          title="Treatment Planning"
          description="Personalized treatment plans tailored to your specific dental needs."
        />
        <ServiceCard 
          icon={<LightningIcon className="w-8 h-8 text-blue-600" />}
          title="Emergency Care"
          description="Prompt treatment for dental emergencies and urgent care needs."
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
        Why Choose Our General Dentistry?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          title="Experienced Team"
          description="Our dentists have years of experience in general dental care."
        />
        <BenefitItem 
          title="Modern Technology"
          description="We use the latest dental equipment for accurate diagnosis and treatment."
        />
        <BenefitItem 
          title="Family-Friendly"
          description="We provide dental care for patients of all ages in a comfortable environment."
        />
        <BenefitItem 
          title="Preventive Focus"
          description="We emphasize preventive care to avoid complex dental problems."
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
        Our General Dentistry Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number="1"
          title="Consultation"
          description="Initial examination and discussion of your dental health goals."
        />
        <ProcessStep 
          number="2"
          title="Diagnosis"
          description="Comprehensive evaluation using advanced diagnostic tools."
        />
        <ProcessStep 
          number="3"
          title="Treatment"
          description="Professional dental procedures using modern techniques."
        />
        <ProcessStep 
          number="4"
          title="Follow-up"
          description="Regular check-ups to monitor and maintain your oral health."
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
