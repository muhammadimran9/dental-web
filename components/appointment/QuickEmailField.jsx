export default function QuickEmailField({ formData, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email *
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
        placeholder="john@example.com"
      />
    </div>
  )
}
