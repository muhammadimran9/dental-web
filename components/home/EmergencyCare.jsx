import Card from '../Card'
import { AlertTriangleIcon, PhoneIcon, ClockIcon, UserIcon, ShieldIcon, HeartIcon } from '../ui/IconsNew'

export default function EmergencyCare() {
  return (
    <section className="section-padding bg-red-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <AlertTriangleIcon className="w-8 h-8 mr-3 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                Dental <span className="text-red-600">Emergency?</span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              We're here for you when you need us most. Same-day appointments available for dental emergencies.
            </p>
            
            <div className="space-y-4 mb-8">
              <EmergencyItem 
                icon={<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"><HeartIcon className="w-4 h-4 text-red-600" /></div>}
                title="Severe Toothache"
                description="Persistent pain that doesn't go away"
              />
              <EmergencyItem 
                icon={<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"><ShieldIcon className="w-4 h-4 text-red-600" /></div>}
                title="Broken Tooth"
                description="Cracked or knocked-out teeth"
              />
              <EmergencyItem 
                icon={<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"><UserIcon className="w-4 h-4 text-red-600" /></div>}
                title="Bleeding Gums"
                description="Uncontrolled bleeding from gums"
              />
              <EmergencyItem 
                icon={<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"><AlertTriangleIcon className="w-4 h-4 text-red-600" /></div>}
                title="Infection/Swelling"
                description="Painful swelling in face or gums"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+97141234567" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                Call Now: +971 4 123 4567
              </a>
              <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
                Book Emergency Appointment
              </button>
            </div>
          </div>
          
          <Card className="bg-white">
            <div className="text-center">
              <ClockIcon className="w-16 h-16 mb-4 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Available 24/7</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Emergency Hotline</span>
                  <span className="font-semibold text-red-600">24/7 Available</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function EmergencyItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
