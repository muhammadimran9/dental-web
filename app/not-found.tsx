import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">DC</span>
        </div>
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The dental page you're looking for doesn't exist. Let's get you back to your smile journey!
        </p>
        <div className="space-y-4">
          <Link href="/" className="block">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Return to Homepage
            </Button>
          </Link>
          <Link href="/appointment" className="block">
            <Button variant="outline" className="w-full">
              Book Appointment
            </Button>
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? <Link href="/contact-us" className="text-blue-600 hover:underline">Contact Us</Link></p>
        </div>
      </div>
    </div>
  )
}
