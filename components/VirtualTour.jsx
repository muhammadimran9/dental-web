import Card from './Card'
import BuildingIcon from './icons/BuildingIcon'
import ToothIcon from './icons/ToothIcon'
import DentalIcon from './icons/DentalIcon'
import CameraIcon from './icons/CameraIcon'
import PhoneIcon from './icons/PhoneIcon'
import CoffeeIcon from './icons/CoffeeIcon'

export default function VirtualTour() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Take a <span className="text-gradient">Virtual Tour</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our state-of-the-art facility from the comfort of your home
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TourCard 
            title="Modern Reception"
            description="Welcome to our comfortable and welcoming reception area"
            image={<BuildingIcon />}
          />
          <TourCard 
            title="Advanced Treatment Rooms"
            description="State-of-the-art equipment for the best dental care"
            image={<ToothIcon />}
          />
          <TourCard 
            title="Sterilization Center"
            description="Highest standards of cleanliness and safety"
            image={<DentalIcon />}
          />
          <TourCard 
            title="Digital X-Ray Room"
            description="Latest digital imaging technology"
            image={<CameraIcon />}
          />
          <TourCard 
            title="Consultation Area"
            description="Private spaces for treatment planning"
            image={<PhoneIcon />}
          />
          <TourCard 
            title="Relaxation Zone"
            description="Comfortable waiting area with amenities"
            image={<CoffeeIcon />}
          />
        </div>
      </div>
    </section>
  )
}

function TourCard({ title, description, image }) {
  return (
    <Card hover className="group">
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-4 text-6xl text-accent group-hover:scale-105 transition-transform duration-300">
        {image}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}
