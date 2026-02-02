import Card from '../Card'
import { serviceCategories } from './appointmentData'

export default function ServiceCategorySelection({ selectedCategory, onSelectCategory }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Select Service Category</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceCategories.map(category => (
          <Card
            key={category.id}
            hover
            className={`cursor-pointer transition-all ${
              selectedCategory === category.id
                ? 'ring-2 ring-primary bg-primary/5'
                : 'hover:shadow-lg'
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {category.icon}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{category.name}</h4>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
