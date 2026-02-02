export default function InfectionIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C11.0111 2 10.1333 2.38813 9.5 3.02148C8.86667 3.65483 8.47854 4.53263 8.47854 5.52148C8.47854 6.51034 8.86667 7.38813 9.5 8.02148C10.1333 8.65483 11.0111 9.04297 12 9.04297C12.9889 9.04297 13.8667 8.65483 14.5 8.02148C15.1333 7.38813 15.5215 6.51034 15.5215 5.52148C15.5215 4.53263 15.1333 3.65483 14.5 3.02148C13.8667 2.38813 12.9889 2 12 2Z" 
            fill="#3B82F6" stroke="#1E3A8A" strokeWidth="1"/>
      <circle cx="10" cy="12" r="2" fill="#DC2626"/>
      <circle cx="14" cy="12" r="2" fill="#DC2626"/>
      <path d="M8 16C8 16 10 18 12 18C14 18 16 16 16 16" 
            stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
