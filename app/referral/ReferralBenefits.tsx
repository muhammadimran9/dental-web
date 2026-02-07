import { GiftIcon, ToothIcon, HeartIcon, PhoneIcon2, LightningIcon, TrophyIcon } from '../../components/ui/Icons'

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ReferralBenefits() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Why Choose Invisalign?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard 
          icon={<GiftIcon className="w-8 h-8 text-blue-600" />}
          title="Earn Rewards"
          description="Get AED 200 credit for every successful referral. No limit on how many friends you can refer!"
        />
        <BenefitCard 
          icon={<ToothIcon className="w-8 h-8 text-blue-600" />}
          title="Friend Gets Discount"
          description="Your referred friend receives 15% off their first treatment at our clinic."
        />
        <BenefitCard 
          icon={<HeartIcon className="w-8 h-8 text-blue-600" />}
          title="Share Quality Care"
          description="Help friends and family experience the same exceptional dental care you received."
        />
        <BenefitCard 
          icon={<PhoneIcon2 className="w-8 h-8 text-blue-600" />}
          title="Easy Process"
          description="Simple online referral form. Track your referrals and rewards through our portal."
        />
        <BenefitCard 
          icon={<LightningIcon className="w-8 h-8 text-blue-600" />}
          title="Instant Credit"
          description="Rewards credited to your account immediately after your friend's first appointment."
        />
        <BenefitCard 
          icon={<TrophyIcon className="w-8 h-8 text-blue-600" />}
          title="VIP Status"
          description="Refer 5+ friends and unlock VIP status with exclusive benefits and priority booking."
        />
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
