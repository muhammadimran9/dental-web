import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export const submitAppointment = async (data, setIsSubmitting, setSubmitSuccess, setSubmitError, reset) => {
  setIsSubmitting(true)
  setSubmitError('')

  try {
    await addDoc(collection(db, 'appointments'), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      preferredDate: data.preferredDate,
      message: data.message,
      status: 'pending',
      read: false,
      createdAt: serverTimestamp(),
    })

    setSubmitSuccess(true)
    reset()
  } catch (error) {
    console.error('Error submitting appointment:', error)
    setSubmitError('Failed to submit appointment. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
