import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeaderNew'
import { useState, useEffect } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Load posts from localStorage
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
    
    // Default posts if no stored posts exist
    if (storedPosts.length === 0) {
      const defaultPosts = [
        {
          id: '1',
          title: "The Importance of Regular Dental Checkups",
          excerpt: "Discover why bi-annual dental visits are crucial for maintaining optimal oral health and preventing serious issues.",
          category: "Preventive Care",
          date: "March 15, 2024",
          readTime: "5 min read",
          content: "Regular dental checkups are essential for maintaining good oral health..."
        },
        {
          id: '2',
          title: "Latest Advances in Teeth Whitening",
          excerpt: "Explore cutting-edge teeth whitening technologies that deliver brighter smiles safely and effectively.",
          category: "Cosmetic Dentistry",
          date: "March 12, 2024",
          readTime: "7 min read",
          content: "Teeth whitening has evolved significantly over the years..."
        },
        {
          id: '3',
          title: "Dental Implants: A Complete Guide",
          excerpt: "Everything you need to know about dental implants, from consultation to final restoration.",
          category: "Restorative Dentistry",
          date: "March 10, 2024",
          readTime: "10 min read",
          content: "Dental implants are the gold standard for tooth replacement..."
        }
      ]
      setPosts(defaultPosts)
    } else {
      setPosts(storedPosts)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />
      <Header />
      <main className="container-custom py-16">
        <BlogHero />
        <BlogGrid posts={posts} />
      </main>
      <Footer />
    </div>
  )
}

function BlogHero() {
  return (
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Dental Blog
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Expert insights, tips, and latest advances in dental care
      </p>
    </section>
  )
}

function BlogGrid({ posts }) {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </section>
  )
}

function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-blue-600 h-48 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-2">🦷</div>
          <div className="text-sm uppercase tracking-wide">{post.category}</div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  )
}
