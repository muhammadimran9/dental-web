
interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

interface BenefitItemProps {
  title: string
  description: string
}

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
}

export default function CosmeticDentistry() {
  return (
    <main className="container-custom py-16">
      <ServiceHero 
        title="Cosmetic Dentistry"
        subtitle="Transform your smile with confidence"
        description="Enhance your natural beauty with our advanced cosmetic dental treatments designed to give you the perfect smile."
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
          icon="✨"
          title="Teeth Whitening"
          description="Professional whitening treatments for a brighter, more confident smile."
        />
        <ServiceCard 
          icon="🦷"
          title="Porcelain Veneers"
          description="Custom-made porcelain shells to perfect the appearance of your teeth."
        />
        <ServiceCard 
          icon="🎨"
          title="Digital Smile Design"
          description="Advanced digital planning to design your perfect smile before treatment."
        />
        <ServiceCard 
          icon="💎"
          title="Composite Bonding"
          description="Tooth-colored resin to repair chips, cracks, and gaps."
        />
        <ServiceCard 
          icon="🧼"
          title="Stain Removal"
          description="Professional cleaning to remove stubborn stains and discoloration."
        />
        <ServiceCard 
          icon="💉"
          title="Facial Aesthetics"
          description="Non-surgical treatments to enhance facial appearance and reduce wrinkles."
        />
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitsSection() {
  return (
    <section className="mb-16 bg-blue-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Benefits of Cosmetic Dentistry
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          title="Enhanced Confidence"
          description="A beautiful smile boosts self-esteem and social confidence."
        />
        <BenefitItem 
          title="Natural Results"
          description="Our treatments enhance your natural beauty without looking artificial."
        />
        <BenefitItem 
          title="Long-Lasting"
          description="Durable cosmetic solutions that maintain their beauty for years."
        />
        <BenefitItem 
          title="Customized Approach"
          description="Personalized treatments designed specifically for your unique smile."
        />
      </div>
    </section>
  )
}

function BenefitItem({ title, description }: BenefitItemProps) {
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
        Our Cosmetic Dentistry Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number={1}
          title="Smile Analysis"
          description="Digital analysis of your current smile and aesthetic goals."
        />
        <ProcessStep 
          number={2}
          title="Design Phase"
          description="Custom design of your new smile using advanced software."
        />
        <ProcessStep 
          number={3}
          title="Treatment"
          description="Gentle cosmetic procedures to achieve your dream smile."
        />
        <ProcessStep 
          number={4}
          title="Reveal"
          description="Final reveal of your transformed, confident smile."
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
