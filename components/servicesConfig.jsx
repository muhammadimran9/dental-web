import ServiceImage from './ServiceImage'
import CosmeticIcon from './icons/CosmeticIcon'
import ImplantsIcon from './icons/ImplantsIcon'
import WhiteningIcon from './icons/WhiteningIcon'
import RootCanalIcon from './icons/RootCanalIcon'
import PediatricIcon from './icons/PediatricIcon'
import OrthodonticsIcon from './icons/OrthodonticsIcon'

export const previewServices = [
  { title: 'General Dentistry', description: 'Comprehensive dental care for the whole family', icon: <ServiceImage />, href: '/services/general-dentistry' },
  { title: 'Cosmetic Dentistry', description: 'Transform your smile with our cosmetic treatments', icon: <CosmeticIcon />, href: '/services/cosmetic-dentistry' },
  { title: 'Dental Implants', description: 'Permanent solution for missing teeth', icon: <ImplantsIcon />, href: '/services/dental-implants' },
  { title: 'Teeth Whitening', description: 'Brighten your smile in just one visit', icon: <WhiteningIcon />, href: '/services/teeth-whitening' },
]

export const allServices = [
  ...previewServices,
  { title: 'Root Canal', description: 'Pain-free root canal treatments', icon: <RootCanalIcon />, href: '/services/root-canal' },
  { title: 'Pediatric Dentistry', description: 'Gentle care for your children', icon: <PediatricIcon />, href: '/services/pediatric-dentistry' },
  { title: 'Orthodontics', description: 'Traditional braces and clear aligners for straight teeth', icon: <OrthodonticsIcon />, href: '/services/orthodontics' },
  { title: 'Periodontics', description: 'Treatment for gum disease and gum health maintenance', icon: <ServiceImage />, href: '/services/periodontics' },
]
