import Card from '../Card'
import ContactItem from './ContactItem'
import AddressIcon from '../icons/AddressIcon'
import PhoneIcon from '../icons/PhoneIcon'
import EmailIcon from '../icons/EmailIcon'

export default function ContactCard() {
  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
      <div className="space-y-4">
        <ContactItem 
          icon={<AddressIcon />} 
          title="Address" 
          content="123 Main Street<br />City, State 12345<br />United States" 
        />
        <ContactItem 
          icon={<PhoneIcon />} 
          title="Phone" 
          content='<a href="tel:+1234567890" className="text-primary hover:underline">(123) 456-7890</a>' 
          isHTML 
        />
        <ContactItem 
          icon={<EmailIcon />} 
          title="Email" 
          content='<a href="mailto:info@dentalcare.com" className="text-primary hover:underline">info@dentalcare.com</a>' 
          isHTML 
        />
      </div>
    </Card>
  )
}
