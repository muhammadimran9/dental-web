'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import AdminHeader from './AdminHeader.jsx'
import DashboardStats from './DashboardStats.jsx'
import QuickActions from './QuickActions.jsx'

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    appointments: 0,
    contacts: 0,
    blogPosts: 0,
  })

  useEffect(() => {
    if (!auth) return
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        fetchStats()
      } else {
        router.push('/admin/login')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const fetchStats = async () => {
    if (!db) return
    
    try {
      const appointmentsQuery = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'))
      const contactsQuery = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'))
      const blogPostsQuery = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'))
      
      const [appointmentsSnapshot, contactsSnapshot, blogPostsSnapshot] = await Promise.all([
        getDocs(appointmentsQuery),
        getDocs(contactsQuery),
        getDocs(blogPostsQuery),
      ])

      setStats({
        appointments: appointmentsSnapshot.size,
        contacts: contactsSnapshot.size,
        blogPosts: blogPostsSnapshot.size,
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const handleLogout = async () => {
    if (!auth) return
    
    try {
      await signOut(auth)
      router.push('/admin/login')
    } catch (error) {
      console.error('Error signing out:', error)
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
      <AdminHeader user={user} handleLogout={handleLogout} />
      <div className="container-custom section-padding">
        <DashboardStats stats={stats} />
        <QuickActions />
      </div>
    </div>
  )
}
