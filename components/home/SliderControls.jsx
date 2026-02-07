import ChevronLeftIcon from '../icons/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon'

export default function SliderControls({ onPrev, onNext }) {
  return (
    <div className="flex justify-center mt-6 gap-4">
      <button 
        onClick={onPrev}
        className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
      </button>
      <button 
        onClick={onNext}
        className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  )
}
