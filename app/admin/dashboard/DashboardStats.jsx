import Card from '@/components/Card'
import DentalIcon from '@/components/icons/DentalIcon'
import BlogIcon from '@/components/icons/BlogIcon'
import EmailIcon from '@/components/icons/EmailIcon'

export default function DashboardStats({ stats }) {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      <Card>
        <div className="text-4xl mb-2 text-primary">
          <DentalIcon />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{stats.appointments}</h3>
        <p className="text-gray-600">Total Appointments</p>
      </Card>
      <Card>
        <div className="text-4xl mb-2 text-primary">
          <EmailIcon />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{stats.contacts}</h3>
        <p className="text-gray-600">Contact Messages</p>
      </Card>
      <Card>
        <div className="text-4xl mb-2 text-primary">
          <BlogIcon />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{stats.blogPosts}</h3>
        <p className="text-gray-600">Blog Posts</p>
      </Card>
      <Card>
        <div className="text-4xl mb-2 text-primary">⚡</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">Active</h3>
        <p className="text-gray-600">System Status</p>
      </Card>
    </div>
  )
}
