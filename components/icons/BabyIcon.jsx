export default function BabyIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" 
              stroke="#1E3A8A" strokeWidth="2"/>
      <path d="M12 12C8.13401 12 5 15.134 5 19V21H19V19C19 15.134 15.866 12 12 12Z" 
            stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="7" r="1" fill="#1E3A8A"/>
      <circle cx="14" cy="7" r="1" fill="#1E3A8A"/>
    </svg>
  )
}
