import Button from '@/components/Button'
import Link from 'next/link'

export default function AdminPageHeader({ title, backLink = "/admin/dashboard" }) {
  return (
    <header className="bg-white shadow-soft">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={backLink}>
              <Button variant="outline">← Back to Dashboard</Button>
            </Link>
            <h1 className="text-2xl font-bold text-secondary">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  )
}
