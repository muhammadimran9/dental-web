import { useState } from 'react'
import GeneralIcon from './icons/GeneralIcon'
import CosmeticIcon from './icons/CosmeticIcon'
import ImplantsIcon from './icons/ImplantsIcon'
import WhiteningIcon from './icons/WhiteningIcon'

const categories = [
  { id: 'all', name: 'All Services', icon: <GeneralIcon /> },
  { id: 'general', name: 'General', icon: <GeneralIcon /> },
  { id: 'cosmetic', name: 'Cosmetic', icon: <CosmeticIcon /> },
  { id: 'implants', name: 'Implants', icon: <ImplantsIcon /> },
  { id: 'whitening', name: 'Whitening', icon: <WhiteningIcon /> },
]

export default function ServiceTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
            activeCategory === category.id
              ? 'bg-accent text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="text-lg">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  )
}
