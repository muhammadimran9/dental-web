export default function FeedbackHero() {
  return (
    <section className="text-center mb-16">
      <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 md:p-12 mb-8" style={{backgroundColor: '#2563EB'}}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Patient
          <span className="block text-white">Testimonials</span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto px-4">
          Hear what our patients have to say about their experience at DentalCare Dubai
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
            Share Your Experience
          </button>
          <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  )
}
