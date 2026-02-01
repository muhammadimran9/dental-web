import Link from 'next/link'
import DentalIcon from './icons/DentalIcon'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
        <DentalIcon className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold text-gray-800">DentalCare</span>
    </Link>
  )
}
