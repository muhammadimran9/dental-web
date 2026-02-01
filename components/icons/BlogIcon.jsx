export default function BlogIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
      <line x1="7" y1="8" x2="17" y2="8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="7" y1="12" x2="17" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="7" y1="16" x2="13" y2="16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
