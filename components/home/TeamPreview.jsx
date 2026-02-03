import Link from 'next/link'
import Button from '../Button'
import Card from '../Card'

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    title: "Chief Dental Surgeon",
    specialty: "Cosmetic & Restorative Dentistry",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1559839734-f49b936c04dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Michael Chen", 
    title: "Orthodontic Specialist",
    specialty: "Braces & Invisalign",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1612374381493-a36c2cdb25f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Pediatric Dentist", 
    specialty: "Children's Dental Care",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1594824475065-0c4c66d3090e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
]

export default function TeamPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-700 font-medium text-sm">Meet Our Experts</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            World-Class Dental
            <span className="block text-blue-600">Specialists</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our internationally trained dentists bring decades of experience and expertise 
            to provide you with the highest quality dental care in Dubai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/doctors">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              View All Team Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function TeamMemberCard({ name, title, specialty, experience, image }) {
  return (
    <Card hover className="group text-center">
      <div className="p-8 space-y-6">
        {/* Photo */}
        <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-blue-50 group-hover:border-blue-100 transition-colors duration-300">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <div className="text-blue-600 font-medium">{title}</div>
          <div className="text-gray-600">{specialty}</div>
          <div className="text-sm text-gray-500">{experience} Experience</div>
        </div>
      </div>
    </Card>
  )
}
