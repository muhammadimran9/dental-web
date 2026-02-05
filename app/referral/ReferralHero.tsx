export default function ReferralHero() {
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
