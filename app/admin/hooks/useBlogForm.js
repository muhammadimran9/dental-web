'use client'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export function useBlogForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
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
      await addDoc(collection(db, 'blogPosts'), {
        ...formData,
        publishedAt: serverTimestamp(),
        author: 'Admin'
      })
      
      window.location.href = '/admin/blog'
    } catch (error) {
      console.error('Error creating blog post:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { formData, isSubmitting, handleChange, handleSubmit }
}
