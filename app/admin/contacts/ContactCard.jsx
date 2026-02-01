import Card from '@/components/Card'
import ContactDetails from './ContactDetails'
import ContactActions from './ContactActions'

export default function ContactCard({ contact, onMarkAsRead, onDelete }) {
  return (
    <Card className={!contact.read ? 'border-l-4 border-primary' : ''}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <ContactDetails contact={contact} />
        <ContactActions 
          contact={contact}
          onMarkAsRead={onMarkAsRead}
          onDelete={onDelete}
        />
      </div>
    </Card>
  )
}
