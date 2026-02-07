import ChevronLeftIcon from '../icons/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon'

export default function TestimonialNavigation({ onPrev, onNext }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onPrev}
        className="p-2 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  )
}
