import Card from '../ui/Card'

export default function TeamMemberCard({ name, title, specialty, experience, image }) {
  return (
    <Card hover className="group text-center relative overflow-hidden h-full">
      <div className="p-8 space-y-6 flex flex-col h-full relative z-10">
        <div className="relative mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-blue-50 group-hover:border-blue-100 transition-all duration-300 shadow-lg group-hover:shadow-xl">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="flex-1 text-center">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <div className="text-blue-600 font-medium text-base">{title}</div>
          <div className="text-gray-600 text-sm">{specialty}</div>
          <div className="text-sm text-gray-500 bg-blue-50 inline-block px-3 py-1 rounded-full">{experience} Experience</div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  )
}
