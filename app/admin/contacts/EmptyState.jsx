import Card from '@/components/ui/Card'
import BlogIcon from '@/components/icons/BlogIcon'

export default function EmptyState() {
  return (
    <Card>
      <div className="text-center py-12">
        <div className="text-6xl mb-4 text-primary flex justify-center">
          <BlogIcon />
        </div>
        <p className="text-gray-600 text-lg">No contact messages yet.</p>
      </div>
    </Card>
  )
}
