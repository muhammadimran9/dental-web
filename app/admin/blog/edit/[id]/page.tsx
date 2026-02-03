'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'

export default function EditBlogPost() {
  const router = useRouter()
  const params = useParams()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
  })

  useEffect(() => {
    if (!auth) return
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        fetchPost()
      } else {
        router.push('/admin/login')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router, params.id])

  const fetchPost = async () => {
    if (!db) return
    
    try {
      const docRef = doc(db, 'blogPosts', params.id as string)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        setFormData({
          title: data.title || '',
          excerpt: data.excerpt || '',
          content: data.content || '',
          featuredImage: data.featuredImage || '',
        })
      }
    } catch (error) {
      console.error('Error fetching blog post:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!db) return
    
    setIsSubmitting(true)

    try {
      await updateDoc(doc(db, 'blogPosts', params.id as string), {
        ...formData,
        updatedAt: new Date(),
      })
      router.push('/admin/blog')
    } catch (error) {
      console.error('Error updating blog post:', error)
      alert('Failed to update blog post. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-soft">
        <div className="container-custom py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/blog">
              <Button variant="outline">← Back to Blog</Button>
            </Link>
            <h1 className="text-2xl font-bold text-secondary">Edit Blog Post</h1>
          </div>
        </div>
      </header>

      <div className="container-custom section-padding">
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-semibold text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows={15}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
              />
              <p className="mt-2 text-sm text-gray-500">
                You can use HTML tags for formatting (e.g., &lt;p&gt;, &lt;h2&gt;, &lt;strong&gt;, &lt;ul&gt;, etc.)
              </p>
            </div>

            <div>
              <label htmlFor="featuredImage" className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image (URL only)
              </label>
              <input
                type="text"
                id="featuredImage"
                value={formData.featuredImage}
                onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Updating...' : 'Update Post'}
              </Button>
              <Link href="/admin/blog">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
