export default function TechnologySection() {
  return (
    <section className="mb-16 bg-blue-50 rounded-2xl p-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Advanced Technology
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <TechCard 
          icon="📊"
          title="ClinCheck 3D"
          description="See your virtual treatment plan and expected results before starting."
        />
        <TechCard 
          icon="🦷"
          title="SmartTrack Material"
          description="Proprietary material for gentle, constant tooth movement."
        />
        <TechCard 
          icon="📱"
          title="Invisalign App"
          description="Track progress and get reminders with the mobile app."
        />
        <TechCard 
          icon="🎯"
          title="Precision Fit"
          description="Custom-made aligners using advanced 3D printing technology."
        />
      </div>
    </section>
  )
}

function TechCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
