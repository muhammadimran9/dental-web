import Button from '@/components/Button'
import MarkReadButton from './MarkReadButton'
import DeleteButton from './DeleteButton'

export default function AppointmentActions({ appointment, onMarkAsRead, onDelete }) {
  return (
    <div className="flex gap-2">
      <MarkReadButton 
        appointment={appointment} 
        onMarkAsRead={onMarkAsRead} 
      />
      <DeleteButton 
        appointment={appointment} 
        onDelete={onDelete} 
      />
    </div>
  )
}
