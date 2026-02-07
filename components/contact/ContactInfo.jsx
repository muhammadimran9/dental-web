import Card from '../ui/Card'
import ContactCard from './ContactCard'
import HoursCard from './HoursCard'

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <ContactCard />
      <HoursCard />
    </div>
  )
}
