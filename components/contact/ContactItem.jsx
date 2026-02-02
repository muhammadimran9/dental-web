export default function ContactItem({ icon, title, content, isHTML }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl text-primary">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        {isHTML ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </div>
    </div>
  )
}
