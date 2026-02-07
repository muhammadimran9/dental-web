import { HeartIcon, ShieldIcon, ClockIcon, ZapIcon, CheckCircleIcon } from '@/components/ui/Icons'

export default function InvisalignBenefits() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Why Choose Invisalign?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard 
          icon={<HeartIcon className="w-8 h-8 text-blue-600" />}
          title="Virtually Invisible"
          description="Clear aligners that are barely noticeable, perfect for professionals and adults."
        />
        <BenefitCard 
          icon={<ShieldIcon className="w-8 h-8 text-blue-600" />}
          title="Removable"
          description="Eat, drink, and clean normally. No food restrictions like traditional braces."
        />
        <BenefitCard 
          icon={<ClockIcon className="w-8 h-8 text-blue-600" />}
          title="Faster Results"
          description="Average treatment time of 12-18 months, faster than traditional braces."
        />
        <BenefitCard 
          icon={<ZapIcon className="w-8 h-8 text-blue-600" />}
          title="Comfortable"
          description="Smooth plastic aligners without metal brackets or wires."
        />
        <BenefitCard 
          icon={<CheckCircleIcon className="w-8 h-8 text-blue-600" />}
          title="SmartTrack Technology"
          description="Advanced material for more predictable and comfortable tooth movement."
        />
        <BenefitCard 
          icon={<ClockIcon className="w-8 h-8 text-blue-600" />}
          title="Precise Results"
          description="3D digital planning ensures accurate and predictable outcomes."
        />
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-start gap-4">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
