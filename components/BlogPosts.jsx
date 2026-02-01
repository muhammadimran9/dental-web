'use client'

import { useEffect, useState } from 'react'
import BlogPostCard from './BlogPostCard'
import EmptyBlogState from './EmptyBlogState'
import { fetchBlogPosts, getSamplePosts } from './blogUtils'

export default function BlogPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchBlogPosts(setPosts)
  }, [])

  const displayPosts = posts.length > 0 ? posts : getSamplePosts()

  return (
    <>
      <BlogGrid posts={displayPosts} />
      {displayPosts.length === 0 && <EmptyBlogState />}
    </>
  )
}

function BlogGrid({ posts }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.id} {...post} />
      ))}
    </div>
  )
}
