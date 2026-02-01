import Link from 'next/link'
import Button from './Button'

export default function DoctorButton() {
  return (
    <Link href="/doctors">
      <Button variant="primary">Meet Our Team</Button>
    </Link>
  )
}
