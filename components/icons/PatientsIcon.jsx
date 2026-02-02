export default function PatientsIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" fill="#3B82F6"/>
      <path d="M8 12c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z" fill="#1E3A8A"/>
      <circle cx="16" cy="8" r="2.5" fill="#3B82F6"/>
      <path d="M16 10.5c-1.66 0-3 1.34-3 3v1.5h6v-1.5c0-1.66-1.34-3-3-3z" fill="#1E3A8A"/>
    </svg>
  )
}
