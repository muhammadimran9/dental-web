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
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To provide exceptional dental care that combines advanced technology, 
              expert knowledge, and compassionate service to improve the oral health 
              and confidence of every patient we serve.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </div>
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
  const achievements = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ),
      title: 'Award Winning',
      desc: 'Best Dental Clinic Dubai 2023'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ),
      title: '5-Star Rated',
      desc: '4.9/5 from 2000+ reviews'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
      title: 'Certified Excellence',
      desc: 'ISO 9001:2015 Certified'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
        </svg>
      ),
      title: 'Patient Trust',
      desc: '50,000+ satisfied patients'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Advanced Tech',
      desc: 'Latest dental technology'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'International Team',
      desc: 'Dentists from 10+ countries'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
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
