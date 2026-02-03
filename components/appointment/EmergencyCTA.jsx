import Link from 'next/link'
import Button from '../Button'
import PhoneIcon from '../icons/PhoneIcon'
import AlertIcon from '../icons/AlertIcon'

export default function EmergencyCTA() {
  return (
    <section className="section-padding bg-red-50 border-t border-red-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center space-y-6">
              {/* Emergency Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertIcon className="w-8 h-8 text-red-600" />
                </div>
              </div>
              
              {/* Emergency Message */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Dental Emergency?
                </h2>
                <p className="text-xl text-gray-600">
                  Don't wait in pain. We're available 24/7 for urgent dental care.
                </p>
              </div>
              
              {/* Emergency Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+971501234567" className="inline-flex">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Call Emergency Line
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold">
                    Send Urgent Message
                  </Button>
                </Link>
              </div>
              
              {/* Reassurance */}
              <div className="text-sm text-gray-500 mt-4">
                Available 24/7 for dental emergencies • Immediate response guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
