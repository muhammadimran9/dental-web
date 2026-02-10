import Image from 'next/image'
import Link from 'next/link'
import TeamHero from '@/components/team/TeamHero'
import DoctorProfileCard from '@/components/team/DoctorProfileCard'
import TeamValues from '@/components/team/TeamValues'
import { doctors } from '@/components/doctorsConfig'

export default function Team() {
  return (
    <div>
      <EnhancedTeamHero />
      <section id="team-grid" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Dentists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highly qualified professionals with years of experience, dedicated to providing exceptional dental care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorProfileCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      <WhyChooseOurTeam />
      <TeamValues />
    </div>
  )
}

function EnhancedTeamHero() {
  return (
    <section className="relative h-[60vh] bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="absolute inset-0">
        <Image src="/dental-images/23.png" alt="Our Team" fill className="object-cover opacity-20" />
      </div>
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Expert Team</h1>
          <p className="text-2xl mb-8">Experienced professionals committed to your smile and oral health</p>
          <Link href="/appointment" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyChooseOurTeam() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our Team?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '🎓', title: 'Highly Qualified', desc: 'Advanced degrees and certifications from top institutions' },
            { icon: '⭐', title: 'Years of Experience', desc: '10+ years of combined dental expertise' },
            { icon: '🔬', title: 'Latest Technology', desc: 'Trained in cutting-edge dental techniques' },
            { icon: '❤️', title: 'Patient-Centered', desc: 'Compassionate care tailored to your needs' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
