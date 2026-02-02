import Card from '../Card'
import StarIcon from '../icons/StarIcon'

export default function PatientStories() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Patient <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from our valued patients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StoryCard 
            name="Sarah Johnson"
            treatment="Smile Makeover"
            story="The team transformed my smile completely. I feel more confident than ever!"
            rating={5}
          />
          <StoryCard 
            name="Michael Chen"
            treatment="Dental Implants"
            story="Professional care and amazing results. My implants look and feel natural."
            rating={5}
          />
          <StoryCard 
            name="Emily Davis"
            treatment="Invisalign"
            story="Straightened my teeth without anyone noticing. Perfect experience!"
            rating={5}
          />
        </div>
      </div>
    </section>
  )
}

function StoryCard({ name, treatment, story, rating }) {
  return (
    <Card hover className="h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-600">{treatment}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 italic">"{story}"</p>
    </Card>
  )
}
