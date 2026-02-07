import { MenuIcon } from '../ui/Icons'

export default function MobileMenuButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <MenuIcon className="h-8 w-8 text-blue-600" />
    </button>
  )
}
