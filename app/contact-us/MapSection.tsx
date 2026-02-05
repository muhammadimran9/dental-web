export default function MapSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Find Our Clinic
      </h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 h-96 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-xl font-semibold">Interactive Map</p>
            <p className="text-sm opacity-90">Building 12, Dubai Healthcare City</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">Clinic Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Thursday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Friday</span>
                  <span className="font-medium">2:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">Getting Here</h4>
              <div className="space-y-2">
                <p className="text-gray-600">🚗 Free parking available</p>
                <p className="text-gray-600">🚇 Dubai Metro: Healthcare City Station</p>
                <p className="text-gray-600">🚌 Bus routes: 10, 21, 28, 33</p>
                <p className="text-gray-600">♿ Wheelchair accessible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
