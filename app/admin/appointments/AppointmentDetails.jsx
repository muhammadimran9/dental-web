import AppointmentHeader from './AppointmentHeader'
import AppointmentInfo from './AppointmentInfo'
import AppointmentMessage from './AppointmentMessage'
import AppointmentTimestamp from './AppointmentTimestamp'

export default function AppointmentDetails({ appointment }) {
  return (
    <div className="flex-1 space-y-4">
      <AppointmentHeader appointment={appointment} />
      
      {/* Patient Information Section */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 01-8 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Patient Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {appointment.patientInfo?.name && (
            <div>
              <span className="font-medium text-gray-600">Name:</span>
              <span className="text-gray-900 ml-2">{appointment.patientInfo.name}</span>
            </div>
          )}
          {appointment.patientInfo?.email && (
            <div>
              <span className="font-medium text-gray-600">Email:</span>
              <span className="text-gray-900 ml-2">{appointment.patientInfo.email}</span>
            </div>
          )}
          {appointment.patientInfo?.phone && (
            <div>
              <span className="font-medium text-gray-600">Phone:</span>
              <span className="text-gray-900 ml-2">{appointment.patientInfo.phone}</span>
            </div>
          )}
        </div>
      </div>

      {/* Appointment Details Section */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 0v4m-4-4h4m4 0v4m-4-4h4M8 7v8m0 4h8m-4-4v4m0-4h8" />
          </svg>
          Appointment Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {appointment.appointmentDetails?.category && (
            <div>
              <span className="font-medium text-gray-600">Category:</span>
              <span className="text-gray-900 ml-2">{appointment.appointmentDetails.category}</span>
            </div>
          )}
          {appointment.appointmentDetails?.service && (
            <div>
              <span className="font-medium text-gray-600">Service:</span>
              <span className="text-gray-900 ml-2">{appointment.appointmentDetails.service}</span>
            </div>
          )}
          {appointment.appointmentDetails?.date && (
            <div>
              <span className="font-medium text-gray-600">Date:</span>
              <span className="text-gray-900 ml-2">{appointment.appointmentDetails.date}</span>
            </div>
          )}
          {appointment.appointmentDetails?.time && (
            <div>
              <span className="font-medium text-gray-600">Time:</span>
              <span className="text-gray-900 ml-2">{appointment.appointmentDetails.time}</span>
            </div>
          )}
        </div>
      </div>

      {/* Notes Section */}
      {appointment.appointmentDetails?.notes && (
        <div className="bg-yellow-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2H5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-4a1 1 0 011-1H7a1 1 0 01-1-1v-2zM13 7l-1 2v8l1 2m0 0l-1-2m-3 3h12M9 17v1a1 1 0 011-1H4a1 1 0 01-1-1v-2h4v2z" />
            </svg>
            Notes
          </h4>
          <p className="text-gray-700 text-sm">{appointment.appointmentDetails.notes}</p>
        </div>
      )}

      {appointment.message && <AppointmentMessage message={appointment.message} />}
      {appointment.createdAt && <AppointmentTimestamp createdAt={appointment.createdAt} />}
    </div>
  )
}
