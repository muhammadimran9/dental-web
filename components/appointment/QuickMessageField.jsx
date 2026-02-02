export default function QuickMessageField({ formData, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Additional Notes
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={onChange}
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
        placeholder="Any specific concerns or requirements..."
      />
    </div>
  )
}
