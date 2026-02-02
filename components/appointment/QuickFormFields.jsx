import QuickNameField from './QuickNameField'
import QuickPhoneField from './QuickPhoneField'
import QuickEmailField from './QuickEmailField'
import QuickServiceField from './QuickServiceField'
import QuickDateField from './QuickDateField'
import QuickTimeField from './QuickTimeField'
import QuickMessageField from './QuickMessageField'

export default function QuickFormFields({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <QuickNameField formData={formData} onChange={onChange} />
        <QuickPhoneField formData={formData} onChange={onChange} />
      </div>

      <QuickEmailField formData={formData} onChange={onChange} />

      <QuickServiceField formData={formData} onChange={onChange} />

      <div className="grid md:grid-cols-2 gap-4">
        <QuickDateField formData={formData} onChange={onChange} />
        <QuickTimeField formData={formData} onChange={onChange} />
      </div>

      <QuickMessageField formData={formData} onChange={onChange} />
    </div>
  )
}
