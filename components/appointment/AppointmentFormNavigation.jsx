import Button from '../ui/Button'

export default function AppointmentFormNavigation({ 
  currentStep, 
  onPrevious, 
  onNext, 
  onSubmit, 
  isStepValid,
  isSubmitting 
}) {
  return (
    <div className="flex justify-between items-center gap-6 p-8 bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl shadow-2xl border border-gray-100">
      {/* Previous Button */}
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 1 || isSubmitting}
        className={`
          ${currentStep === 1 ? 'invisible opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'}
          transition-all duration-300 px-6 py-4 rounded-xl border-2 border-gray-200 group-hover:border-blue-300 group-hover:shadow-lg
        `}
      >
        <span className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7 7" />
          </svg>
          <span className="font-medium text-gray-700 group-hover:text-blue-600">Previous Step</span>
        </span>
      </Button>

      {/* Progress Indicator */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-medium text-gray-500 mb-3">
            Step {currentStep} of 5
          </div>
          <div className="w-full max-w-md bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 h-3 rounded-full transition-all duration-500 shadow-inner"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Next/Submit Button */}
      {currentStep === 5 ? (
        <Button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white flex items-center gap-3 px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-3">
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-3 border-white border-t-transparent border-r-transparent animate-spin rounded-full"></div>
                <span className="font-medium">Processing...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L16 21l-4-4H5a2 2 0 00-2 2v14a2 2 0 002.83 2.83L7 16.17l4.89-2.83 2.83V6a2 2 0 00-2 2z" />
                </svg>
                <span className="font-semibold">Confirm & Book Appointment</span>
              </>
            )}
          </span>
        </Button>
      ) : (
        <Button
          onClick={onNext}
          disabled={!isStepValid(currentStep) || isSubmitting}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center gap-3 px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-3">
            <span className="font-medium">Next Step</span>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7 7" />
            </svg>
          </span>
        </Button>
      )}
    </div>
  )
}
