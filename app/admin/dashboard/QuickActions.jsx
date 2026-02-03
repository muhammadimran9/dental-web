import Link from 'next/link'
import Card from '@/components/Card'

export default function QuickActions() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Link href="/admin/appointments">
        <Card hover>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Manage Appointments
              </h3>
              <p className="text-gray-600">
                View and manage all appointment requests
              </p>
            </div>
            <div className="text-4xl text-gray-400">›</div>
          </div>
        </Card>
      </Link>

      <Link href="/admin/contacts">
        <Card hover>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Contact Messages
              </h3>
              <p className="text-gray-600">
                View and manage contact form submissions
              </p>
            </div>
            <div className="text-4xl text-gray-400">›</div>
          </div>
        </Card>
      </Link>

      <Link href="/admin/blog">
        <Card hover>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Manage Blog
              </h3>
              <p className="text-gray-600">
                Create, edit, and delete blog posts
              </p>
            </div>
            <div className="text-4xl text-gray-400">›</div>
          </div>
        </Card>
      </Link>
    </div>
  )
}
