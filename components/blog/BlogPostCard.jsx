import Link from 'next/link'
import Card from '../ui/Card'
import BlogIcon from '../icons/BlogIcon'

export default function BlogPostCard({ id, title, excerpt, featuredImage }) {
  return (
    <Link href={`/blog/${id}`}>
      <Card hover>
        <BlogImage featuredImage={featuredImage} />
        <BlogContent title={title} excerpt={excerpt} />
      </Card>
    </Link>
  )
}

function BlogImage({ featuredImage }) {
  return (
    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4 text-6xl text-primary">
      {featuredImage || <BlogIcon />}
    </div>
  )
}

function BlogContent({ title, excerpt }) {
  return (
    <>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {excerpt || 'Read more about this dental health topic...'}
      </p>
      <span className="text-primary font-semibold">Read More ›</span>
    </>
  )
}
