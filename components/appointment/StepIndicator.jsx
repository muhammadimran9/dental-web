export default function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex items-center justify-between mb-8">
      {[...Array(totalSteps)].map((_, index) => {
        const stepNumber = index + 1
        const isCompleted = currentStep > stepNumber
        const isCurrent = currentStep === stepNumber
        
        return (
          <div key={stepNumber} className="flex items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
              isCompleted || isCurrent
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {isCompleted ? '✓' : stepNumber}
            </div>
            {stepNumber < totalSteps && (
              <div className={`w-full h-1 mx-2 ${
                currentStep > stepNumber ? 'bg-primary' : 'bg-gray-200'
              }`} />
            )}
          </div>
        )
      })}
    </div>
  )
}
