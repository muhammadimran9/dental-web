import { db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import DentalIcon from './icons/DentalIcon'
import ImplantsIcon from './icons/ImplantsIcon'
import ExperienceIcon from './icons/ExperienceIcon'

export const fetchBlogPosts = async (setPosts) => {
  try {
    const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setPosts(postsData)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
  }
}

export const getSamplePosts = () => [
  {
    id: '1',
    title: '5 Tips for Maintaining Healthy Teeth',
    excerpt: 'Learn simple daily habits that can keep your teeth healthy and your smile bright.',
    featuredImage: <DentalIcon />,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Understanding Dental Implants: A Complete Guide',
    excerpt: 'Everything you need to know about dental implants, from procedure to recovery.',
    featuredImage: <ImplantsIcon />,
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'The Importance of Regular Dental Check-ups',
    excerpt: 'Why regular dental visits are crucial for maintaining oral health and preventing problems.',
    featuredImage: <ExperienceIcon />,
    createdAt: new Date(),
  },
]
