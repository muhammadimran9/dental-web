export default function TeamPreviewHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-blue-700 font-medium text-sm">Meet Our Experts</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        World-Class Dental
        <span className="block text-blue-600">Specialists</span>
      </h2>
      
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Our internationally trained dentists bring decades of experience and expertise 
        to provide you with the highest quality dental care in Dubai.
      </p>
    </div>
  )
}
