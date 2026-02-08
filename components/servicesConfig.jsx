import ServiceImage from './ServiceImage'
import CosmeticDentalImage from './images/CosmeticDentalImage'
import ImplantsDentalImage from './images/ImplantsDentalImage'
import WhiteningDentalImage from './images/WhiteningDentalImage'
import RootCanalDentalImage from './images/RootCanalDentalImage'
import PediatricDentalImage from './images/PediatricDentalImage'
import OrthodonticsDentalImage from './images/OrthodonticsDentalImage'

export const previewServices = [
  { title: 'General Dentistry', description: 'Comprehensive dental care for the whole family', icon: <ServiceImage />, href: '/services/general-dentistry' },
  { title: 'Cosmetic Dentistry', description: 'Transform your smile with our cosmetic treatments', icon: <CosmeticDentalImage />, href: '/services/cosmetic-dentistry' },
  { title: 'Dental Implants', description: 'Permanent solution for missing teeth', icon: <ImplantsDentalImage />, href: '/services/dental-implants' },
  { title: 'Teeth Whitening', description: 'Brighten your smile in just one visit', icon: <WhiteningDentalImage />, href: '/services/teeth-whitening' },
]

export const allServices = [
  ...previewServices,
  { title: 'Root Canal', description: 'Pain-free root canal treatments', icon: <RootCanalDentalImage />, href: '/services/root-canal' },
  { title: 'Pediatric Dentistry', description: 'Gentle care for your children', icon: <PediatricDentalImage />, href: '/services/pediatric-dentistry' },
  { title: 'Orthodontics', description: 'Traditional braces and clear aligners for straight teeth', icon: <OrthodonticsDentalImage />, href: '/services/orthodontics' },
  { title: 'Periodontics', description: 'Treatment for gum disease and gum health maintenance', icon: <ServiceImage />, href: '/services/periodontics' },
]
