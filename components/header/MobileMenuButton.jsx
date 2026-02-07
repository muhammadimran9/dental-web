import { MenuIcon } from '../ui/Icons'

export default function MobileMenuButton() {
  return (
    <button className="p-2 rounded-lg hover:bg-gray-100">
      <MenuIcon className="h-8 w-8 text-blue-600" />
    </button>
  )
}
