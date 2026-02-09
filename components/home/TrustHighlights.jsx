import LicensedDentalImage from '../images/LicensedDentalImage'
import ExperienceDentalImage from '../images/ExperienceDentalImage'
import PatientsDentalImage from '../images/PatientsDentalImage'
import EmergencyDentalImage from '../images/EmergencyDentalImage'
import ReviewCarousel from '../ReviewCarousel'

const highlights = [
  { icon: <LicensedDentalImage />, title: 'DHA Licensed', description: 'Fully certified dental professionals' },
  { icon: <ExperienceDentalImage />, title: '15+ Years', description: 'Trusted dental expertise' },
  { icon: <PatientsDentalImage />, title: '50,000+ Patients', description: 'Happy smiles created' },
  { icon: <EmergencyDentalImage />, title: '24/7 Emergency', description: 'Always here for you' },
]

export default function TrustHighlights() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-700 font-medium text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Dubai Community
            <span className="block text-blue-600">Since 2008</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence and patient care has made us one of Dubai's most trusted dental clinics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <TrustHighlight key={index} {...item} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Patient Experiences</h3>
            <p className="text-gray-600">Real stories from our valued patients</p>
          </div>
          <ReviewCarousel />
        </div>
      </div>
    </section>
  )
}

function TrustHighlight({ icon, title, description }) {
  return (
    <div className="text-center group h-full flex flex-col">
      <div className="flex-1 flex flex-col">
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 border-blue-100 group-hover:border-blue-200">
            <div className="text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}
