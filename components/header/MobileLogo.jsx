import Link from 'next/link'

export default function MobileLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">DC</span>
      </div>
      <span className="text-sm font-bold text-gray-800">DentalCare</span>
    </Link>
  )
}
