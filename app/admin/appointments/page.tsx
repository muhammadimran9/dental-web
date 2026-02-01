'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'
import AdminPageHeader from './AdminPageHeader'
import AppointmentList from './AppointmentList'
import EmptyState from './EmptyState'

interface Appointment {
  id: string
  name: string
  phone: string
  email: string
  preferredDate: string
  message?: string
  createdAt: any
  read: boolean
  status: string
}

export default function AdminAppointments() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    if (!auth) return
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        fetchAppointments()
      } else {
        router.push('/admin/login')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const fetchAppointments = async () => {
    if (!db) return
    
    try {
      const q = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      const appointmentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Appointment[]
      setAppointments(appointmentsData)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    }
  }

  const handleMarkAsRead = async (id: string) => {
    if (!db) return
    
    try {
      await updateDoc(doc(db, 'appointments', id), {
        read: true,
      })
      fetchAppointments()
    } catch (error) {
      console.error('Error updating appointment:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!db) return
    
    if (confirm('Are you sure you want to delete this appointment?')) {
      try {
        await deleteDoc(doc(db, 'appointments', id))
        fetchAppointments()
      } catch (error) {
        console.error('Error deleting appointment:', error)
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
      <AdminPageHeader title="Appointment Management" />
      <div className="container-custom section-padding">
        {appointments.length === 0 ? (
          <EmptyState />
        ) : (
          <AppointmentList 
            appointments={appointments} 
            onMarkAsRead={handleMarkAsRead} 
            onDelete={handleDelete} 
          />
        )}
      </div>
    </div>
  )
}
