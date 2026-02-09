import Card from '../ui/Card'

export default function AboutClinicImage() {
  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="aspect-[4/3] relative">
          <img 
            src="/components/images/dental-white.jpg"
            alt="DentalCare Dubai Clinic Interior" 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-1/3"></div>
        </div>
      </Card>
    </div>
  )
}
