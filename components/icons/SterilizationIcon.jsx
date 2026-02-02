export default function SterilizationIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" 
            stroke="#1E3A8A" strokeWidth="2"/>
      <path d="M8 12H16M12 8V16" 
            stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="8" 
              stroke="#1E3A8A" strokeWidth="2" strokeDasharray="2 2"/>
    </svg>
  )
}
