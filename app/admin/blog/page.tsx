'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt?: string
  content?: string
  featuredImage?: string
  createdAt: any
}

export default function AdminBlog() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    if (!auth) return
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        fetchPosts()
      } else {
        router.push('/admin/login')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const fetchPosts = async () => {
    if (!db) return
    
    try {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BlogPost[]
      setPosts(postsData)
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!db) return
    
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteDoc(doc(db, 'blogPosts', id))
        fetchPosts()
      } catch (error) {
        console.error('Error deleting blog post:', error)
      }
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="outline">← Back to Dashboard</Button>
              </Link>
              <h1 className="text-2xl font-bold text-secondary">Blog Management</h1>
            </div>
            <Link href="/admin/blog/new">
              <Button variant="primary">+ Add New Post</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container-custom section-padding">
        {posts.length === 0 ? (
          <Card>
            <div className="text-center py-12">
              <h3 className="text-4xl font-bold text-gray-300 mb-4">No Posts</h3>
              <p className="text-gray-600 text-lg mb-4">No blog posts yet.</p>
              <Link href="/admin/blog/new">
                <Button variant="primary">Create Your First Post</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary mb-2">{post.title}</h3>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-2">{post.excerpt}</p>
                    )}
                    {post.createdAt && (
                      <p className="text-xs text-gray-500">
                        Created: {new Date(post.createdAt.seconds * 1000).toLocaleString()}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/blog/edit/${post.id}`}>
                      <Button variant="outline" className="text-sm">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => handleDelete(post.id)}
                      className="text-sm text-red-600 border-red-600 hover:bg-red-50"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
