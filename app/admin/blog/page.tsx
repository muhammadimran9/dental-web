'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
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
              <h3 className="text-4xl font-bold text-gray-300 mb-4">No Blog Posts</h3>
              <p className="text-gray-600 text-lg mb-4">No blog posts yet.</p>
              <Link href="/admin/blog/new">
                <Button variant="primary">Create Your First Post</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Blog Stats */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{posts.length}</div>
                    <div className="text-sm text-gray-600">Total Posts</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">
                      {posts.filter(p => p.status === 'published').length}
                    </div>
                    <div className="text-sm text-gray-600">Published</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">
                      {posts.filter(p => p.status === 'draft').length}
                    </div>
                    <div className="text-sm text-gray-600">Drafts</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <div className="flex flex-col h-full">
                    {/* Featured Image */}
                    {post.featuredImage && (
                      <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxuczIHBvc3M3IgdmVyc2t5PSI+PGJ1Zw8K'
                          }}
                        />
                      </div>
                    )}

                    <div className="flex-1 p-6">
                      {/* Category Badge */}
                      {post.category && (
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                      
                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      )}

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>By {post.author || 'Admin'}</span>
                        <span>{post.readTime || '5 min read'}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="p-4 border-t bg-gray-50 flex gap-2">
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" className="text-sm flex-1">
                          View
                        </Button>
                      </Link>
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
          </div>
        )}
      </div>
    </div>
  )
}
