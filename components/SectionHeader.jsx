export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    </div>
  )
}
