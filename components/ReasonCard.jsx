import Card from './ui/Card'

export default function ReasonCard({ icon, title, description }) {
  return (
    <Card className="text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
      <div className="p-8 space-y-6 flex-1 flex flex-col relative z-10">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 border-primary/20 group-hover:border-primary/30">
            <div className="text-primary text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-base">{description}</p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  )
}
