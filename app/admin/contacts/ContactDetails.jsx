export default function ContactDetails({ contact }) {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-secondary">{contact.name}</h3>
        {!contact.read && (
          <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
            New
          </span>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
        <p><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${contact.phone}`} className="text-primary hover:underline">{contact.phone}</a></p>
        <p><strong>Subject:</strong> {contact.subject}</p>
        <p><strong>Status:</strong> <span className="capitalize">{contact.status}</span></p>
      </div>
      {contact.message && (
        <div className="p-3 bg-gray-50 rounded-lg mb-3">
          <p className="text-sm text-gray-700"><strong>Message:</strong> {contact.message}</p>
        </div>
      )}
      {contact.createdAt && (
        <p className="text-xs text-gray-500">
          Submitted: {new Date(contact.createdAt.seconds * 1000).toLocaleString()}
        </p>
      )}
    </div>
  )
}
