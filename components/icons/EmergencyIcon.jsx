export default function EmergencyIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2"/>
      <rect x="10" y="6" width="4" height="12" fill="#FFFFFF"/>
      <rect x="6" y="10" width="12" height="4" fill="#FFFFFF"/>
    </svg>
  )
}
