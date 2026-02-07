import Button from '@/components/ui/Button'

export default function ContactActions({ contact, onMarkAsRead, onDelete }) {
  return (
    <div className="flex gap-2">
      {!contact.read && (
        <Button
          variant="outline"
          onClick={() => onMarkAsRead(contact.id)}
          className="text-sm"
        >
          Mark Read
        </Button>
      )}
      <Button
        variant="outline"
        onClick={() => onDelete(contact.id)}
        className="text-sm text-red-600 border-red-600 hover:bg-red-50"
      >
        Delete
      </Button>
    </div>
  )
}
