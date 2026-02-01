// Firebase configuration
import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD-Wco8CoAKIiTdxn0L0hrmmBbNaOHvM2s",
  authDomain: "dental-clinic-website-c40e9.firebaseapp.com",
  projectId: "dental-clinic-website-c40e9",
  storageBucket: "dental-clinic-website-c40e9.firebasestorage.app",
  messagingSenderId: "420976139590",
  appId: "1:420976139590:web:6507409f2eed91aa7d1947"
}

// Initialize Firebase
let app: FirebaseApp | undefined
let auth: Auth | undefined
let db: Firestore | undefined

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig)
  } else {
    app = getApps()[0]
  }
  auth = getAuth(app)
  db = getFirestore(app)
}

export { auth, db }
export default app
