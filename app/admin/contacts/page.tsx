'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import AdminPageHeader from '../appointments/AdminPageHeader'
import ContactList from './ContactList'
import EmptyState from './EmptyState'

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: any
  read: boolean
  status: string
}

export default function AdminContacts() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    if (!auth) return
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        fetchContacts()
      } else {
        router.push('/admin/login')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const fetchContacts = async () => {
    if (!db) return
    
    try {
      const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      const contactsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Contact[]
      setContacts(contactsData)
    } catch (error) {
      console.error('Error fetching contacts:', error)
    }
  }

  const handleMarkAsRead = async (id: string) => {
    if (!db) return
    
    try {
      await updateDoc(doc(db, 'contacts', id), {
        read: true,
      })
      fetchContacts()
    } catch (error) {
      console.error('Error updating contact:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!db) return
    
    if (confirm('Are you sure you want to delete this contact message?')) {
      try {
        await deleteDoc(doc(db, 'contacts', id))
        fetchContacts()
      } catch (error) {
        console.error('Error deleting contact:', error)
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
      <AdminPageHeader title="Contact Messages" backLink="/admin/dashboard" />
      <div className="container-custom section-padding">
        {contacts.length === 0 ? (
          <EmptyState />
        ) : (
          <ContactList 
            contacts={contacts} 
            onMarkAsRead={handleMarkAsRead}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  )
}
