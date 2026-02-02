export default function CardIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" 
            stroke="#1E3A8A" strokeWidth="2"/>
      <path d="M3 10H21" 
            stroke="#3B82F6" strokeWidth="2"/>
      <path d="M7 14H9" 
            stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M11 14H13" 
            stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
