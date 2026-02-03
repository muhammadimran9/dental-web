export default function ImportantInformation() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h4 className="font-medium text-blue-800 mb-2">Important Information</h4>
      <ul className="text-sm text-blue-700 space-y-1">
        <li>• Please arrive 10 minutes before your appointment</li>
        <li>• Bring your ID and insurance card if applicable</li>
        <li>• Cancel 24 hours in advance to avoid cancellation fee</li>
        <li>• We'll send a confirmation email and SMS reminder</li>
      </ul>
    </div>
  )
}
