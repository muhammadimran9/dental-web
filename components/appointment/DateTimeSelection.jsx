import Card from '../ui/Card'
import CalendarIcon from '../icons/CalendarIcon'
import ClockIcon from '../icons/ClockIcon'

export default function DateTimeSelection({ selectedDate, selectedTime, onSelectDate, onSelectTime }) {
  const availableDates = [
    '2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18', '2024-01-19'
  ]
  
  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Select Date & Time</h3>
      
      <div className="mb-8">
        <h4 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          Available Dates
        </h4>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {availableDates.map(date => (
            <Card
              key={date}
              hover
              className={`cursor-pointer text-center p-3 ${
                selectedDate === date
                  ? 'ring-2 ring-primary bg-primary/5'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => onSelectDate(date)}
            >
              <p className="font-medium text-gray-800">
                {new Date(date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
          <ClockIcon className="w-5 h-5" />
          Available Times
        </h4>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {availableTimes.map(time => (
            <Card
              key={time}
              hover
              className={`cursor-pointer text-center p-3 ${
                selectedTime === time
                  ? 'ring-2 ring-primary bg-primary/5'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => onSelectTime(time)}
            >
              <p className="font-medium text-gray-800">{time}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
