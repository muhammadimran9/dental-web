import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="aspect-[4/5] lg:aspect-[3/4]">
          <Image 
            src="/images/istockphoto-1133756788-612x612.webp"
            alt="Professional Dental Care in Dubai" 
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Floating Badge */}
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-900">Accepting New Patients</span>
          </div>
        </div>
      </div>

      {/* Trust Cards */}
      <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Certified Specialists</div>
            <div className="text-sm text-gray-600">American & European Trained</div>
          </div>
        </div>
      </div>

      {/* Floating Card */}
      <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Same-Day Appointments</div>
            <div className="text-sm text-gray-600">Available for Emergencies</div>
          </div>
        </div>
      </div>
    </div>
  )
}
