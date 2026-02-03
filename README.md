# Premium Dental Clinic Website

A modern, conversion-focused dental clinic website with a secure admin dashboard. Built with Next.js, React, Tailwind CSS, and Firebase.

## Features

### Public Website
- **Home Page**: Hero section, trust highlights, services preview, doctor highlights, testimonials
- **About Page**: Clinic story, mission, values
- **Services Page**: Comprehensive service listings with detailed service pages
- **Doctors/Team Page**: Team member profiles
- **Contact Page**: Contact information, map, opening hours
- **Appointment Page**: Appointment booking form with Firebase integration
- **Blog**: Blog listing and individual blog post pages

### Admin Dashboard
- **Secure Authentication**: Firebase authentication for admin access
- **Appointment Management**: View, mark as read, and delete appointments
- **Blog Management**: Create, edit, and delete blog posts
- **Dashboard Overview**: Statistics and quick access to management features

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Firebase project set up

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Copy your Firebase configuration

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Admin Access

1. Navigate to `/admin/login`
2. Create an admin user in Firebase Authentication (Email/Password)
3. Log in with your credentials
4. Access the dashboard at `/admin/dashboard`

## 🎨 Design System

- **Primary Color**: Mustard Yellow (#F2B705)
- **Secondary Color**: Deep Medical Blue (#0B3C5D)
- **Typography**: Inter font family
- **Style**: Modern, minimal, premium medical aesthetic

## 📁 Project Structure

```
├── app/
│   ├── admin/          # Admin dashboard pages
│   ├── about/          # About page
│   ├── appointment/    # Appointment booking
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   ├── doctors/        # Team page
│   ├── services/       # Services pages
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/                # Utilities and Firebase config
└── public/             # Static assets
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Forms**: React Hook Form
- **Language**: TypeScript

## Notes

- The appointment form stores data in Firestore collection `appointments`
- Blog posts are stored in Firestore collection `blogPosts`
- All admin routes are protected and require authentication
- The website is fully responsive and mobile-friendly

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Vercel, Netlify, or your preferred hosting platform
3. Make sure to set environment variables in your hosting platform

## License

This project is created for dental clinic use.
