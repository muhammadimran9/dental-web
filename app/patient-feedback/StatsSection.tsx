interface StatCardProps {
  number: string
  label: string
  icon: string
}

export default function StatsSection() {
  return (
    <section className="mb-16 bg-blue-50 rounded-2xl p-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Our Patient Satisfaction
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <StatCard 
          number="4.9/5"
          label="Average Rating"
          icon="★"
        />
        <StatCard 
          number="98%"
          label="Satisfaction Rate"
          icon="●"
        />
        <StatCard 
          number="5000+"
          label="Happy Patients"
          icon="◆"
        />
        <StatCard 
          number="15+"
          label="Years Experience"
          icon="◈"
        />
      </div>
    </section>
  )
}

function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="text-center bg-white rounded-xl p-6 shadow-md">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}
