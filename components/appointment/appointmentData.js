import CategoryIcon from '../icons/CategoryIcon'
import SparkleIcon from '../icons/SparkleIcon'
import ToolIcon from '../icons/ToolIcon'
import RulerIcon from '../icons/RulerIcon'
import AlertIcon from '../icons/AlertIcon'
import BabyIcon from '../icons/BabyIcon'

export const serviceCategories = [
  {
    id: 'general',
    name: 'General Dentistry',
    description: 'Routine check-ups, cleanings, and preventive care',
    icon: <CategoryIcon />
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers',
    icon: <SparkleIcon />
  },
  {
    id: 'restorative',
    name: 'Restorative Dentistry',
    description: 'Fillings, crowns, bridges, and implants',
    icon: <ToolIcon />
  },
  {
    id: 'orthodontic',
    name: 'Orthodontics',
    description: 'Braces, aligners, and bite correction',
    icon: <RulerIcon />
  },
  {
    id: 'emergency',
    name: 'Emergency Care',
    description: 'Urgent dental issues and pain relief',
    icon: <AlertIcon />
  },
  {
    id: 'pediatric',
    name: 'Pediatric Dentistry',
    description: 'Dental care for children and teens',
    icon: <BabyIcon />
  }
]

export const services = {
  general: [
    { id: 'checkup', name: 'Routine Check-up', duration: '30 min', price: '$80' },
    { id: 'cleaning', name: 'Professional Cleaning', duration: '45 min', price: '$120' },
    { id: 'xray', name: 'Dental X-Ray', duration: '20 min', price: '$150' }
  ],
  cosmetic: [
    { id: 'whitening', name: 'Teeth Whitening', duration: '60 min', price: '$300' },
    { id: 'veneers', name: 'Porcelain Veneers', duration: '120 min', price: '$800' },
    { id: 'bonding', name: 'Dental Bonding', duration: '45 min', price: '$200' }
  ],
  restorative: [
    { id: 'filling', name: 'Cavity Filling', duration: '45 min', price: '$150' },
    { id: 'crown', name: 'Dental Crown', duration: '90 min', price: '$600' },
    { id: 'implant', name: 'Dental Implant', duration: '120 min', price: '$2000' }
  ],
  orthodontic: [
    { id: 'braces', name: 'Traditional Braces', duration: '60 min', price: '$4000' },
    { id: 'invisalign', name: 'Invisalign Consultation', duration: '45 min', price: '$5000' },
    { id: 'retainer', name: 'Retainer Fitting', duration: '30 min', price: '$200' }
  ],
  emergency: [
    { id: 'pain', name: 'Emergency Pain Relief', duration: '30 min', price: '$200' },
    { id: 'trauma', name: 'Dental Trauma', duration: '60 min', price: '$400' },
    { id: 'infection', name: 'Dental Infection', duration: '45 min', price: '$300' }
  ],
  pediatric: [
    { id: 'child-checkup', name: 'Child Check-up', duration: '30 min', price: '$60' },
    { id: 'fluoride', name: 'Fluoride Treatment', duration: '20 min', price: '$40' },
    { id: 'sealant', name: 'Dental Sealants', duration: '30 min', price: '$80' }
  ]
}
