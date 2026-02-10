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
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
      title: 'Highly Qualified',
      desc: 'Advanced degrees and certifications from top institutions'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ),
      title: 'Years of Experience',
      desc: '10+ years of combined dental expertise'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Latest Technology',
      desc: 'Trained in cutting-edge dental techniques'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Patient-Centered',
      desc: 'Compassionate care tailored to your needs'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our Team?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="flex justify-center text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
