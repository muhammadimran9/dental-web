import Image from 'next/image'
import Link from 'next/link'

interface TimelineItemProps {
  year: string
  title: string
  description: string
}

export default function OurStory() {
  return (
    <div>
      <StoryHero />
      <StoryContent />
      <MissionVision />
      <StoryTimeline />
      <Achievements />
      <CallToAction />
    </div>
  )
}

function StoryHero() {
  return (
    <section className="relative h-[60vh] bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="absolute inset-0">
        <Image src="/dental-images/24.png" alt="Our Story" fill className="object-cover opacity-20" />
      </div>
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-2xl mb-8">Excellence in Dental Care Since 2008</p>
        </div>
      </div>
    </section>
  )
}

function StoryContent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Vision to Reality
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2008 with a vision to provide world-class dental care in Dubai, 
              our clinic has grown from a single practice to a comprehensive dental center 
              serving thousands of patients across the UAE.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              What started as a small clinic with 2 dentists has evolved into a state-of-the-art 
              facility with a team of internationally trained specialists, cutting-edge technology, 
              and a commitment to excellence that has never wavered.
            </p>
            <p className="text-lg text-gray-700">
              Today, we combine advanced dental technology with compassionate care to deliver 
              exceptional outcomes for our patients, making us one of Dubai's most trusted dental providers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700 font-semibold">Years of Excellence</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-700 font-semibold">Happy Patients</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700 font-semibold">Expert Dentists</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-700 font-semibold">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To provide exceptional dental care that combines advanced technology, 
              expert knowledge, and compassionate service to improve the oral health 
              and confidence of every patient we serve.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-5xl mb-4">🔭</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To be the leading dental care provider in the UAE, recognized for our 
              commitment to excellence, innovation, and patient satisfaction, while 
              setting new standards in dental healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StoryTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Journey
        </h2>
        <div className="space-y-8">
          <TimelineItem 
            year="2008" 
            title="Foundation" 
            description="Opened our first clinic in Dubai Healthcare City with 2 dentists and a vision to provide world-class dental care" 
          />
          <TimelineItem 
            year="2012" 
            title="Technology Upgrade" 
            description="Invested in advanced dental technology including digital X-rays, 3D imaging, and laser dentistry equipment" 
          />
          <TimelineItem 
            year="2016" 
            title="Team Expansion" 
            description="Grew our team to 15+ specialists covering all dental disciplines from orthodontics to oral surgery" 
          />
          <TimelineItem 
            year="2020" 
            title="Digital Innovation" 
            description="Introduced digital dentistry, smile design software, and teledentistry consultations" 
          />
          <TimelineItem 
            year="2024" 
            title="Excellence Achieved" 
            description="Serving 50,000+ patients with 95% success rate and recognized as one of Dubai's top dental clinics" 
          />
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="flex gap-6 items-start">
      <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl min-w-fit">
        {year}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  )
}

function Achievements() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🏆', title: 'Award Winning', desc: 'Best Dental Clinic Dubai 2023' },
            { icon: '⭐', title: '5-Star Rated', desc: '4.9/5 from 2000+ reviews' },
            { icon: '🎓', title: 'Certified Excellence', desc: 'ISO 9001:2015 Certified' },
            { icon: '👥', title: 'Patient Trust', desc: '50,000+ satisfied patients' },
            { icon: '🔬', title: 'Advanced Tech', desc: 'Latest dental technology' },
            { icon: '🌍', title: 'International Team', desc: 'Dentists from 10+ countries' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Be Part of Our Story</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of satisfied patients who trust us with their dental care
        </p>
        <Link href="/appointment" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
          Book Your Appointment
        </Link>
      </div>
    </section>
  )
}
