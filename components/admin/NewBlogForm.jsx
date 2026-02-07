import Button from '../ui/Button'
import FormField from './FormField'

const categories = [
  { value: '', label: 'Select Category' },
  { value: 'Preventive Care', label: 'Preventive Care' },
  { value: 'Cosmetic Dentistry', label: 'Cosmetic Dentistry' },
  { value: 'Restorative Dentistry', label: 'Restorative Dentistry' },
  { value: 'Pediatric Dentistry', label: 'Pediatric Dentistry' },
  { value: 'General Health', label: 'General Health' },
  { value: 'Emergency Care', label: 'Emergency Care' }
]

export default function NewBlogForm({ formData, isSubmitting, handleChange, handleSubmit }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Blog Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Post Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title"
            required
          />

          <FormField
            label="Category"
            name="category"
            type="select"
            value={formData.category}
            onChange={handleChange}
            options={categories}
            required
          />

          <FormField
            label="Post Content"
            name="content"
            type="textarea"
            value={formData.content}
            onChange={handleChange}
            rows={12}
            placeholder="Write your blog post content here..."
            required
          />

          <FormField
            label="Excerpt"
            name="excerpt"
            type="textarea"
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            placeholder="Brief description of the post (shown in blog listing)"
            required
          />

          <div className="flex gap-4">
            <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </Button>
            <Button type="button" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3" onClick={() => window.history.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
