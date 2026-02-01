import DentalIcon from './icons/DentalIcon'

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
        <div className="aspect-square bg-white/20 rounded-xl flex items-center justify-center">
          <DentalIcon className="w-32 h-32" />
        </div>
      </div>
    </div>
  )
}
