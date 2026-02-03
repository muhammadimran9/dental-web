'use client'

import { useAdminAuth } from '../../hooks/useAdminAuth'
import { useBlogForm } from '../../hooks/useBlogForm'
import NewBlogForm from '../NewBlogForm'

export default function NewBlogPost() {
  const { user, loading } = useAdminAuth()
  const { formData, isSubmitting, handleChange, handleSubmit } = useBlogForm()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <NewBlogForm
          formData={formData}
          isSubmitting={isSubmitting}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
