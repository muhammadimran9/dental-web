'use client'

import { useState } from 'react'

export function useBlogForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create new post object
      const newPost = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        readTime: Math.ceil(formData.content.split(' ').length / 200) + ' min read',
        publishedAt: new Date().toISOString(),
        author: 'Admin'
      }

      // Get existing posts from localStorage or use empty array
      const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
      
      // Add new post to the beginning
      const updatedPosts = [newPost, ...existingPosts]
      
      // Save to localStorage
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
      
      alert('Blog post published successfully!')
      window.location.href = '/admin/blog'
    } catch (error) {
      console.error('Error creating blog post:', error)
      alert('Error publishing post. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { formData, isSubmitting, handleChange, handleSubmit }
}
