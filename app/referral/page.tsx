import { GiftIcon, ToothIcon, HeartIcon, PhoneIcon2, LightningIcon, TrophyIcon, UserIcon } from '@/components/ui/Icons'

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

interface RewardCardProps {
  level: string
  referrals: string
  reward: string
  color: string
}

interface StoryCardProps {
  name: string
  referrals: string
  earned: string
  story: string
}

export default function Referral() {
  return (
    <main className="container-custom py-16">
      <ReferralHero />
      <ReferralBenefits />
      <ReferralForm />
      <RewardsSection />
      <SuccessStories />
    </main>
  )
}

function ReferralHero() {
  return (
    <section className="text-center mb-16">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Refer a
          <span className="block text-blue-600">Friend</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Share the gift of a perfect smile and earn rewards! Our referral program benefits both you and your friends.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Referring
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View Rewards
          </button>
        </div>
      </div>
    </section>
  )
}

function ReferralBenefits() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Why Refer to DentalCare Dubai?
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
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ReferralForm() {
  return (
    <section className="mb-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Refer a Friend
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Your Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+971 50 123 4567"
                  required
                />
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Friend's Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Friend's Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Friend's Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Friend's Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+971 50 987 6543"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Treatment Interest
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option value="">Select Treatment (Optional)</option>
                <option value="general">General Checkup</option>
                <option value="cleaning">Teeth Cleaning</option>
                <option value="whitening">Teeth Whitening</option>
                <option value="implants">Dental Implants</option>
                <option value="invisalign">Invisalign</option>
                <option value="veneers">Veneers</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Add a personal message for your friend..."
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Rewards Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="email-updates"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    defaultChecked
                  />
                  <label htmlFor="email-updates" className="text-sm text-gray-700">
                    Send me updates about my referral status and rewards
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the referral program terms and conditions *
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Referral
              </button>
              <button
                type="button"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function RewardsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Referral Rewards
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <RewardCard 
          level="Bronze"
          referrals="1-2"
          reward="AED 200"
          color="bg-orange-100 text-orange-800"
        />
        <RewardCard 
          level="Silver"
          referrals="3-5"
          reward="AED 250"
          color="bg-gray-100 text-gray-800"
        />
        <RewardCard 
          level="Gold"
          referrals="6-10"
          reward="AED 300"
          color="bg-yellow-100 text-yellow-800"
        />
        <RewardCard 
          level="Platinum"
          referrals="11+"
          reward="AED 400"
          color="bg-purple-100 text-purple-800"
        />
      </div>
    </section>
  )
}

function RewardCard({ level, referrals, reward, color }: RewardCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 text-center ${color} border-2 border-opacity-20`}>
      <div className="text-2xl font-bold mb-2">{level}</div>
      <div className="text-sm mb-2">{referrals} referrals</div>
      <div className="text-3xl font-bold mb-2">{reward}</div>
      <div className="text-sm">per referral</div>
    </div>
  )
}

function SuccessStories() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Referral Success Stories
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StoryCard 
          name="Ahmed Khalid"
          referrals="8"
          earned="AED 2,000"
          story="Referred my entire family! Everyone loves the clinic and I earned enough for my own treatment."
        />
        <StoryCard 
          name="Sarah Johnson"
          referrals="5"
          earned="AED 1,250"
          story="My coworkers all came after seeing my smile transformation. Best decision ever!"
        />
        <StoryCard 
          name="Mohammed Ali"
          referrals="12"
          earned="AED 4,800"
          story="VIP status unlocked! The extra rewards and priority booking are amazing."
        />
      </div>
    </section>
  )
}

function StoryCard({ name, referrals, earned, story }: StoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <UserIcon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-blue-600">{referrals} referrals</p>
        </div>
      </div>
      <div className="bg-green-100 text-green-800 font-bold rounded-lg px-3 py-2 inline-block mb-3">
        Earned: {earned}
      </div>
      <p className="text-gray-600 italic">"{story}"</p>
    </div>
  )
}
