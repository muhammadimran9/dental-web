import Button from '../ui/Button'
import Input from '../ui/Input'

export default function CTAQuickBooking() {
  return (
    <form className="space-y-4">
      <Input placeholder="Your Name" required />
      <Input type="tel" placeholder="Phone Number" required />
      <Input type="email" placeholder="Email Address" />
      <Button className="w-full">Book Appointment</Button>
    </form>
  )
}
