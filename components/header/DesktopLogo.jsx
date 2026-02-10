import Link from 'next/link'
import Image from 'next/image'

export default function DesktopLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/dental-images/kdlogo.png" alt="Dental Clinic Logo" width={180} height={60} className="object-contain" priority />
    </Link>
  )
}
