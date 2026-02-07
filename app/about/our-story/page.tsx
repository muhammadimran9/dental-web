export default function OurStory() {
  return (
    <div>
      <StoryHero />
      <StoryContent />
      <StoryTimeline />
    </div>
  )
}

function StoryHero() {
  return (
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Our Story
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From a single clinic to Dubai's trusted dental care provider
      </p>
    </section>
  )
}

function StoryContent() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Excellence Since 2008
          </h2>
          <p className="text-gray-600 mb-6">
            Founded with a vision to provide world-class dental care in Dubai, 
            our clinic has grown from a single practice to a comprehensive dental center 
            serving thousands of patients across the UAE.
          </p>
          <p className="text-gray-600">
            Today, we combine cutting-edge technology with internationally trained specialists 
            to deliver exceptional dental outcomes for our patients.
          </p>
        </div>
        <div className="bg-blue-50 p-8 rounded-xl">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StoryTimeline() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Our Journey
      </h2>
      <div className="space-y-8">
        <TimelineItem year="2008" title="Foundation" description="Opened our first clinic in Dubai with 2 dentists" />
        <TimelineItem year="2012" title="Expansion" description="Added advanced dental technology and specialist services" />
        <TimelineItem year="2016" title="Growth" description="Expanded to multiple locations across Dubai" />
        <TimelineItem year="2020" title="Innovation" description="Introduced digital dentistry and smile design" />
        <TimelineItem year="2024" title="Excellence" description="Leading dental care provider with 50,000+ patients" />
      </div>
    </section>
  )
}

function TimelineItem({ year, title, description }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold min-w-fit">
        {year}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
