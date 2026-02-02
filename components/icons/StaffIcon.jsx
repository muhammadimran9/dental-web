export default function StaffIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="3" fill="#3B82F6"/>
      <path d="M9 12c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z" fill="#1E3A8A"/>
      <circle cx="15" cy="6" r="2" fill="#3B82F6"/>
      <path d="M15 8c-1.66 0-3 1.34-3 3v1h6v-1c0-1.66-1.34-3-3-3z" fill="#1E3A8A"/>
      <path d="M12 12l-1.5 1.5L13 16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
