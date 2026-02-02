import Card from '../Card'

export default function GulfTrustBadges() {
  const badges = [
    { name: 'DHA Licensed', desc: 'Dubai Health Authority' },
    { name: 'ISO Certified', desc: 'Quality Management' },
    { name: '20+ Years', desc: 'Trusted Experience' },
    { name: '5,000+ Smiles', desc: 'Happy Patients' }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted by Dubai Residents
          </h2>
          <p className="text-xl text-gray-600">
            Your confidence is our priority
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-bold text-primary text-lg mb-1">{badge.name}</h3>
              <p className="text-sm text-gray-600">{badge.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
