import Image from 'next/image'
import Link from 'next/link'
import Card from '../Card'
import CalendarIcon from '../icons/CalendarIcon'
import ClockIcon from '../icons/ClockIcon'
import UserIcon from '../icons/UserIcon'

export default function BlogCard({ post, featured = false }) {
  return (
    <Card hover className={`overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`relative ${featured ? 'h-64' : 'h-48'}`}>
        <Image 
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>
        
        <h3 className={`font-bold text-gray-800 mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <UserIcon className="w-4 h-4" />
            {post.author}
          </div>
          <Link href={`/blog/${post.id}`}>
            <span className="text-accent font-medium hover:underline">
              Read More →
            </span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
