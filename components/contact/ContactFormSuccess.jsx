import CheckCircleIcon from '../icons/CheckCircleIcon'

export default function ContactFormSuccess() {
  return (
    <div className="text-center py-8">
      <CheckCircleIcon className="text-green-500 text-5xl mb-4 mx-auto" />
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
      <p className="text-gray-600">We'll get back to you within 24 hours.</p>
    </div>
  )
}
