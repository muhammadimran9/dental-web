export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 mb-8">Last Updated: {lastUpdated}</p>
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
