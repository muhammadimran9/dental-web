export default function PricingIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="16" height="12" rx="2" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2"/>
      <line x1="4" y1="10" x2="20" y2="10" stroke="#1E3A8A" strokeWidth="2"/>
      <circle cx="8" cy="8" r="1" fill="#1E3A8A"/>
      <circle cx="12" cy="8" r="1" fill="#1E3A8A"/>
      <circle cx="16" cy="8" r="1" fill="#1E3A8A"/>
      <path d="M8 14h8M10 16h4" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
