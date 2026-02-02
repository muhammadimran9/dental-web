"use client";
import { useState } from 'react'
import ContactHeader from '@/components/ContactHeader'
import BlogCard from '@/components/BlogCard'
import BlogSidebar from '@/components/BlogSidebar'
import { featuredPost, blogPosts, categories } from '@/components/blogConfig'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div>
      <ContactHeader />
      {/* Featured Post Hero */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dental Health Blog
            </h1>
            <p className="text-xl text-gray-100">
              Expert insights and tips for optimal oral health
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <BlogCard post={featuredPost} featured={true} />
          </div>
        </div>
      </section>

      {/* Posts Grid with Sidebar */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
