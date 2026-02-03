import Card from '../Card'
import CheckCircleIcon from '../icons/CheckCircleIcon'

export default function PatientInformationCard({ formData }) {
  return (
    <Card className="mb-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircleIcon className="w-5 h-5" />
          <span className="font-medium">Patient Information</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Name</p>
            <p className="font-medium text-gray-800">{formData.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium text-gray-800">{formData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium text-gray-800">{formData.phone}</p>
          </div>
          {formData.notes && (
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600">Notes</p>
              <p className="font-medium text-gray-800">{formData.notes}</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
