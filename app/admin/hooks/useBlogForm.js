'use client'

import { useState } from 'react'
import { auth, db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export function useBlogForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    featuredImage: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!auth || !db) {
      alert('Please try again later.')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Save blog post to Firebase
      await addDoc(collection(db, 'blogPosts'), {
        ...formData,
        status: 'published',
        createdAt: serverTimestamp(),
        author: 'Admin',
        readTime: Math.ceil(formData.content.split(' ').length / 200) + ' min read'
      })

      alert('Blog post published successfully!')
      window.location.href = '/admin/blog'
    } catch (error) {
      console.error('Error publishing blog post:', error)
      alert('Error publishing post. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { formData, isSubmitting, handleChange, handleSubmit }
}
