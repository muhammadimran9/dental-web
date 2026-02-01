export default function TechnologyIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" fill="#1E3A8A"/>
      <rect x="6" y="17" width="4" height="3" fill="#D4A017"/>
      <rect x="14" y="17" width="4" height="3" fill="#D4A017"/>
      <rect x="8" y="20" width="8" height="1" fill="#D4A017"/>
      <circle cx="12" cy="10" r="3" fill="#D4A017"/>
    </svg>
  )
}
