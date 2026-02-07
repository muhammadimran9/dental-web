export default function Periodontics() {
  return (
    <main className="container-custom py-16">
      <ServiceHero 
        title="Periodontics"
        subtitle="Healthy gums for healthy smile"
        description="Specialized treatment for gum disease and supporting structures to ensure the foundation of your smile stays strong."
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
          icon="●"
          title="Gum Disease Treatment"
          description="Therapy for gingivitis and periodontitis to restore gum health."
        />
        <ServiceCard 
          icon="◆"
          title="Deep Cleaning"
          description="Professional scaling and root planing for thorough cleaning."
        />
        <ServiceCard 
          icon="◈"
          title="Gum Surgery"
          description="Surgical procedures to treat advanced gum disease."
        />
        <ServiceCard 
          icon="■"
          title="Bone Grafting"
          description="Regeneration of lost bone to support teeth."
        />
        <ServiceCard 
          icon="◇"
          title="Crown Lengthening"
          description="Procedures to expose more tooth for restoration."
        />
        <ServiceCard 
          icon="○"
          title="Preventive Care"
          description="Maintenance programs to prevent gum disease recurrence."
        />
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }) {
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
        Why Choose Periodontal Care?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitItem 
          title="Prevents Tooth Loss"
          description="Healthy gums provide essential support for your teeth."
        />
        <BenefitItem 
          title="Improves Overall Health"
          description="Gum health is linked to heart and systemic health."
        />
        <BenefitItem 
          title="Eliminates Bad Breath"
          description="Treating gum disease addresses the source of chronic bad breath."
        />
        <BenefitItem 
          title="Restores Comfort"
          description="Relieves gum pain, bleeding, and sensitivity."
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
        Our Periodontal Treatment Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number="1"
          title="Periodontal Evaluation"
          description="Comprehensive assessment of gum health and pocket depth."
        />
        <ProcessStep 
          number="2"
          title="Treatment Planning"
          description="Personalized plan based on your specific gum condition."
        />
        <ProcessStep 
          number="3"
          title="Active Therapy"
          description="Deep cleaning and treatment to restore gum health."
        />
        <ProcessStep 
          number="4"
          title="Maintenance"
          description="Ongoing care to prevent recurrence of gum disease."
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
