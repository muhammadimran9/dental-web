import Link from 'next/link'
import Button from './Button'

export default function ViewAllButton() {
  return (
    <div className="text-center mt-12">
      <Link href="/services">
        <Button variant="outline">View All Services</Button>
      </Link>
    </div>
  )
}
