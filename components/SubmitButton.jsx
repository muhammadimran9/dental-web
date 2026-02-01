import Button from './Button'

export default function SubmitButton({ isSubmitting, text = 'Submit' }) {
  return (
    <Button
      type="submit"
      variant="primary"
      className="w-full"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Submitting...' : text}
    </Button>
  )
}
