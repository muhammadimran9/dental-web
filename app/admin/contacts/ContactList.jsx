import Card from '@/components/ui/Card'
import ContactCard from './ContactCard'

export default function ContactList({ contacts, onMarkAsRead, onDelete }) {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <ContactCard 
          key={contact.id} 
          contact={contact} 
          onMarkAsRead={onMarkAsRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
