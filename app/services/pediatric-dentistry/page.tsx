import { HeartIcon, ShieldIcon, BookOpenIcon, AppleIcon, StethoscopeIcon, UserCheckIcon } from '@/components/ui/Icons'
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


export default function PediatricDentistry() {
  return (
    <main>
      <UniversalHero 
        title="Pediatric Dentistry"
        subtitle="Gentle care for little smiles"
        description="Specialized dental care for children in a fun, friendly environment that makes dental visits enjoyable."
        backgroundImage="/dental-images/3.png"
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
          icon={<HeartIcon className="w-8 h-8 text-blue-600" />}
          title="Child Checkups"
          description="Gentle examinations designed specifically for children's dental needs."
        />
        <ServiceCard 
          icon={<ShieldIcon className="w-8 h-8 text-blue-600" />}
          title="Preventive Care"
          description="Fluoride treatments and sealants to protect growing teeth."
        />
        <ServiceCard 
          icon={<BookOpenIcon className="w-8 h-8 text-blue-600" />}
          title="Fun Education"
          description="Teaching proper brushing and flossing through interactive activities."
        />
        <ServiceCard 
          icon={<AppleIcon className="w-8 h-8 text-blue-600" />}
          title="Nutrition Guidance"
          description="Dietary advice for healthy tooth development."
        />
        <ServiceCard 
          icon={<UserCheckIcon className="w-8 h-8 text-blue-600" />}
          title="Habit Correction"
          description="Early intervention for thumb-sucking and other oral habits."
        />
        <ServiceCard 
          icon={<StethoscopeIcon className="w-8 h-8 text-blue-600" />}
          title="Orthodontic Screening"
          description="Early detection of alignment issues for timely treatment."
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
        Why Choose Pediatric Dentistry?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          title="Child-Friendly Environment"
          description="Colorful, welcoming office designed to reduce anxiety."
        />
        <BenefitItem 
          title="Specialized Training"
          description="Dentists with additional training in child psychology."
        />
        <BenefitItem 
          title="Early Detection"
          description="Identifying issues before they become serious problems."
        />
        <BenefitItem 
          title="Building Good Habits"
          description="Teaching lifelong dental hygiene practices."
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
        Our Pediatric Dentistry Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number="1"
          title="Welcome & Comfort"
          description="Creating a friendly atmosphere to reduce anxiety."
        />
        <ProcessStep 
          number="2"
          title="Gentle Examination"
          description="Careful checkup using child-appropriate techniques."
        />
        <ProcessStep 
          number="3"
          title="Interactive Education"
          description="Teaching dental hygiene through fun activities."
        />
        <ProcessStep 
          number="4"
          title="Positive Reinforcement"
          description="Rewards and praise for good dental behavior."
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

function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
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
