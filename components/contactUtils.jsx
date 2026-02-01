import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export const submitContactForm = async (data, setIsSubmitting, setSubmitSuccess, setSubmitError, reset) => {
  setIsSubmitting(true)
  setSubmitError('')

  try {
    await addDoc(collection(db, 'contacts'), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      status: 'pending',
      read: false,
      createdAt: serverTimestamp(),
    })

    setSubmitSuccess(true)
    reset()
  } catch (error) {
    console.error('Error submitting contact form:', error)
    setSubmitError('Failed to send message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
