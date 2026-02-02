import CalendarIcon from '../icons/CalendarIcon'

export default function QuickDateField({ formData, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Preferred Date *
      </label>
      <div className="relative">
        <CalendarIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={onChange}
          required
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  )
}
