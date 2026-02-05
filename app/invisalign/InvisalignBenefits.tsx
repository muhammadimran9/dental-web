export default function InvisalignBenefits() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Why Choose Invisalign?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard 
          icon="👁️"
          title="Virtually Invisible"
          description="Clear aligners that are barely noticeable, perfect for professionals and adults."
        />
        <BenefitCard 
          icon="🦷"
          title="Removable"
          description="Eat, drink, and clean normally. No food restrictions like traditional braces."
        />
        <BenefitCard 
          icon="⏱️"
          title="Faster Results"
          description="Average treatment time of 12-18 months, faster than traditional braces."
        />
        <BenefitCard 
          icon="😊"
          title="Comfortable"
          description="Smooth plastic aligners without metal brackets or wires."
        />
        <BenefitCard 
          icon="📱"
          title="SmartTrack Technology"
          description="Advanced material for more predictable and comfortable tooth movement."
        />
        <BenefitCard 
          icon="🎯"
          title="Precise Results"
          description="3D digital planning ensures accurate and predictable outcomes."
        />
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
