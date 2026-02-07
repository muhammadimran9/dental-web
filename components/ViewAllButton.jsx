import Link from 'next/link'
import Button from './ui/Button'

export default function ViewAllButton({ href, children = 'View All' }) {
  return (
    <div className="text-center mt-12">
      <Link href={href}>
        <Button variant="primary" className="px-8 py-3">
          {children}
        </Button>
      </Link>
    </div>
  )
}
