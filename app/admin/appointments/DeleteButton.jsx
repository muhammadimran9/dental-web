import Button from '@/components/Button'

export default function DeleteButton({ appointment, onDelete }) {
  return (
    <Button
      variant="outline"
      onClick={() => onDelete(appointment.id)}
      className="text-sm text-red-600 border-red-600 hover:bg-red-50"
    >
      Delete
    </Button>
  )
}
