'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { db } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'
import Button from '@/components/Button'

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'blogPosts', params.id as string)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          setPost({
            id: docSnap.id,
            ...docSnap.data(),
          })
        }
      } catch (error) {
        console.error('Error fetching blog post:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white section-padding">
        <div className="container-custom">
          <Link href="/blog" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          {post.createdAt && (
            <p className="text-gray-200">
              {new Date(post.createdAt.seconds * 1000).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {post.featuredImage && (
            <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center mb-8 text-9xl">
              {post.featuredImage}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <div className="text-gray-700 space-y-4">
                <p>{post.excerpt || 'Blog post content will appear here.'}</p>
                <p>
                  This is a sample blog post. In the admin panel, you can add rich text content
                  that will be displayed here. The content supports HTML formatting for a
                  professional blog experience.
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Ready to Improve Your Smile?
            </h3>
            <p className="text-gray-700 mb-6">
              Schedule an appointment with our expert dental team today.
            </p>
            <Link href="/appointment">
              <Button variant="primary">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
