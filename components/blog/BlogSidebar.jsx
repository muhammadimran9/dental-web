import Link from 'next/link'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { categories, relatedPosts } from '../blogConfig'

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Dental Health Tips
        </h3>
        <p className="text-gray-600 mb-4">
          Get expert advice and oral health tips delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <Button className="w-full bg-accent hover:bg-accent/90 text-white">
            Subscribe
          </Button>
        </form>
      </Card>

      {/* Categories */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
              className="block py-2 text-gray-600 hover:text-accent transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </Card>

      {/* Related Posts */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Related Posts
        </h3>
        <div className="space-y-4">
          {relatedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block group"
            >
              <h4 className="font-medium text-gray-800 group-hover:text-accent transition-colors">
                {post.title}
              </h4>
            </Link>
          ))}
        </div>
      </Card>

      {/* CTA Banner */}
      <Card className="p-6 bg-gradient-to-br from-accent to-accent/90 text-white">
        <h3 className="text-xl font-bold mb-3">
          Need Dental Care?
        </h3>
        <p className="text-white/90 mb-4">
          Book an appointment with our expert team today.
        </p>
        <Link href="/appointment">
          <Button variant="secondary" className="w-full bg-white text-accent hover:bg-gray-100">
            Book Now
          </Button>
        </Link>
      </Card>
    </div>
  )
}
