import Link from 'next/link'

export default function DesktopLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">DC</span>
      </div>
      <span className="text-lg font-bold text-gray-800">DentalCare Dubai</span>
    </Link>
  )
}
