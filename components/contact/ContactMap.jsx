import Card from '../Card'
import PinIcon from '../icons/PinIcon'

export default function ContactMap() {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <PinIcon className="text-accent" />
        <h2 className="text-2xl font-bold text-gray-800">Find Us</h2>
      </div>
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjQiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
      <div className="mt-4 p-4 bg-accent/10 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Address:</strong> 123 Dental Street, Medical District, New York, NY 10001
        </p>
        <p className="text-sm text-gray-700 mt-1">
          <strong>Hours:</strong> Mon-Fri 8AM-8PM, Sat 9AM-5PM, Emergency 24/7
        </p>
      </div>
    </Card>
  )
}
