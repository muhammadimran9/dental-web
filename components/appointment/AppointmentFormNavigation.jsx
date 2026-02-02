import Button from '../Button'

export default function AppointmentFormNavigation({ 
  currentStep, 
  onPrevious, 
  onNext, 
  onSubmit, 
  isStepValid 
}) {
  return (
    <div className="flex justify-between">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 1}
        className={currentStep === 1 ? 'invisible' : ''}
      >
        Previous
      </Button>

      {currentStep === 5 ? (
        <Button
          onClick={onSubmit}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Confirm Appointment
        </Button>
      ) : (
        <Button
          onClick={onNext}
          disabled={!isStepValid(currentStep)}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Next
        </Button>
      )}
    </div>
  )
}
