export default function BriefcaseIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="8" width="18" height="12" rx="2" 
            stroke="#1E3A8A" strokeWidth="2"/>
      <path d="M8 8V6C8 5.46957 8.21071 4.96086 8.58579 4.58579C8.96086 4.21071 9.46957 4 10 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8" 
            stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12H21" 
            stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
