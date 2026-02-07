import Card from '../ui/Card'
import CameraIcon from '../icons/CameraIcon'
import DentalIcon from '../icons/DentalIcon'
import ComputerIcon from '../icons/ComputerIcon'
import LightningIcon from '../icons/LightningIcon'

export default function TechnologyShowcase() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Cutting-Edge <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Advanced dental technology for precise, comfortable, and efficient care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCard 
            icon={<CameraIcon />}
            title="Digital X-Rays"
            description="90% less radiation than traditional x-rays with instant results"
            highlight="Instant Results"
          />
          <TechCard 
            icon={<DentalIcon />}
            title="Intraoral Scanner"
            description="No more messy impressions - digital scanning for perfect accuracy"
            highlight="Mess-Free"
          />
          <TechCard 
            icon={<ComputerIcon />}
            title="3D Imaging"
            description="Advanced 3D cone beam imaging for precise treatment planning"
            highlight="Precision Planning"
          />
          <TechCard 
            icon={<LightningIcon />}
            title="Laser Dentistry"
            description="Minimally invasive procedures with faster healing times"
            highlight="Pain-Free"
          />
        </div>
      </div>
    </section>
  )
}

function TechCard({ icon, title, description, highlight }) {
  return (
    <Card hover className="text-center group">
      <div className="text-5xl mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
        {highlight}
      </span>
    </Card>
  )
}
