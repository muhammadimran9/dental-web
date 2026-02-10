import Link from 'next/link'
import Image from 'next/image'

export default function MobileLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/dental-images/kdlogo.png" alt="Dental Clinic Logo" width={140} height={50} className="object-contain" priority />
    </Link>
  )
}
