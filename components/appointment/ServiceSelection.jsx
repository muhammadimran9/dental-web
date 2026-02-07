import Card from '../ui/Card'
import { services } from './appointmentData'

export default function ServiceSelection({ selectedCategory, selectedService, onSelectService }) {
  const categoryServices = services[selectedCategory] || []

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Select Specific Service</h3>
      <div className="space-y-3">
        {categoryServices.map(service => (
          <Card
            key={service.id}
            hover
            className={`cursor-pointer transition-all ${
              selectedService === service.id
                ? 'ring-2 ring-primary bg-primary/5'
                : 'hover:shadow-lg'
            }`}
            onClick={() => onSelectService(service.id)}
          >
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">{service.price}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
