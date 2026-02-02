export default function Clock24Icon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" 
              stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="12 6 12 12 16 14" 
                stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="12" y="20" textAnchor="middle" fontSize="8" fill="#1E3A8A" fontWeight="bold">24/7</text>
    </svg>
  )
}
