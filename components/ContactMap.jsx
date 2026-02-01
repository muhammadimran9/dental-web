import Card from './Card'

export default function ContactMap() {
  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h2>
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-gray-600">Google Map Embed</p>
            <p className="text-sm text-gray-500 mt-2">
              Add your Google Maps embed code here
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
