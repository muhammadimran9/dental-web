import Card from '../ui/Card'

export default function TeamMemberCard({ name, title, specialty, experience, image }) {
  return (
    <Card hover className="group text-center">
      <div className="p-8 space-y-6">
        <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-blue-50 group-hover:border-blue-100 transition-colors duration-300">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
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
