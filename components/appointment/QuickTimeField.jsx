import ClockIcon from '../icons/ClockIcon'
import { timeSlots } from './timeSlots'

export default function QuickTimeField({ formData, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Preferred Time *
      </label>
      <div className="relative">
        <ClockIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <select
          name="time"
          value={formData.time}
          onChange={onChange}
          required
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none"
        >
          <option value="">Select time</option>
          {timeSlots.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
