import PhoneIcon from '../icons/PhoneIcon'

export default function QuickPhoneField({ formData, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone *
      </label>
      <div className="relative">
        <PhoneIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          required
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="(123) 456-7890"
        />
      </div>
    </div>
  )
}
