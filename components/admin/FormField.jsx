export default function FormField({ label, name, type = "text", value, onChange, required = false, placeholder, rows, options }) {
  const baseClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
  
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={baseClass}
          placeholder={placeholder}
          required={required}
        />
      ) : type === 'select' ? (
        <select name={name} value={value} onChange={onChange} className={baseClass} required={required}>
          {options?.map((opt, i) => <option key={i} value={opt.value}>{opt.label}</option>)}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={baseClass}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}
