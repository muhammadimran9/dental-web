import React from 'react'

export default function SmileGalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smile Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of transformed smiles and see the exceptional results our patients have achieved through our advanced dental treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Before & After {item}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Patient {item} Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete smile makeover using our advanced cosmetic dentistry procedures.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Treatment: Cosmetic Dentistry</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Your Smile Transformation?
          </h2>
          <p className="text-gray-600 mb-8">
            Schedule a consultation with our expert dental team to discuss your smile goals.
          </p>
          <a
            href="/appointment"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  )
}
