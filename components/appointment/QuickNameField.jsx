import UserIcon from '../icons/UserIcon'

export default function QuickNameField({ formData, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Full Name *
      </label>
      <div className="relative">
        <UserIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="John Doe"
        />
      </div>
    </div>
  )
}
