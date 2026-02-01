# Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Firebase Setup

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Follow the setup wizard

#### Enable Authentication
1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Email/Password** provider
3. Create an admin user:
   - Go to **Authentication** > **Users**
   - Click "Add user"
   - Enter email and password (save these credentials!)

#### Create Firestore Database
1. Go to **Firestore Database**
2. Click "Create database"
3. Start in **test mode** (for development)
4. Choose a location

#### Get Firebase Config
1. Go to **Project Settings** (gear icon)
2. Scroll to "Your apps"
3. Click the web icon (`</>`)
4. Register your app
5. Copy the Firebase configuration object

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Access Admin Dashboard

1. Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Log in with the admin credentials you created in Firebase

## Firestore Security Rules (Production)

For production, update your Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Appointments - read/write for authenticated admins only
    match /appointments/{document=**} {
      allow read, write: if request.auth != null;
    }
    
    // Blog posts - read for all, write for authenticated admins
    match /blogPosts/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Customization

### Update Clinic Information
- Edit `components/Footer.tsx` for contact details
- Edit `app/contact/page.tsx` for contact page details
- Edit `app/page.tsx` for home page content

### Update Colors
- Edit `tailwind.config.js` to change primary/secondary colors

### Add Google Maps
- In `app/contact/page.tsx`, replace the placeholder with your Google Maps embed code

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Make sure to set environment variables in your hosting platform

## Support

For issues or questions, refer to the main README.md file.
