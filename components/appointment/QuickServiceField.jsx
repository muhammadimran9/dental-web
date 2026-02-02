export default function QuickServiceField({ formData, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Service Type
      </label>
      <select
        name="service"
        value={formData.service}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <option value="general">General Check-up</option>
        <option value="cleaning">Professional Cleaning</option>
        <option value="whitening">Teeth Whitening</option>
        <option value="emergency">Emergency Care</option>
        <option value="consultation">Consultation</option>
      </select>
    </div>
  )
}
