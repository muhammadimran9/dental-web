import TeamHero from '@/components/team/TeamHero'
import DoctorProfileCard from '@/components/team/DoctorProfileCard'
import TeamValues from '@/components/team/TeamValues'
import { doctors } from '@/components/doctorsConfig'

export default function Team() {
  return (
    <div>
      <TeamHero />
      <section id="team-grid" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Expert Dentists
            </h2>
            <p className="text-xl text-gray-600">
              Highly qualified professionals dedicated to your oral health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorProfileCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      <TeamValues />
    </div>
  )
}
