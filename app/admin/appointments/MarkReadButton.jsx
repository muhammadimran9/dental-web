import Button from '@/components/ui/Button'

export default function MarkReadButton({ appointment, onMarkAsRead }) {
  if (appointment.read) return null
  
  return (
    <Button
      variant="outline"
      onClick={() => onMarkAsRead(appointment.id)}
      className="text-sm"
    >
      Mark Read
    </Button>
  )
}
