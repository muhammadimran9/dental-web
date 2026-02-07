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
    <div className="flex justify-between">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 1 || isSubmitting}
        className={currentStep === 1 ? 'invisible' : ''}
      >
        Previous
      </Button>

      {currentStep === 5 ? (
        <Button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent border-r-transparent animate-spin rounded-full"></div>
              Submitting...
            </>
          ) : (
            'Confirm Appointment'
          )}
        </Button>
      ) : (
        <Button
          onClick={onNext}
          disabled={!isStepValid(currentStep) || isSubmitting}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Next
        </Button>
      )}
    </div>
  )
}
