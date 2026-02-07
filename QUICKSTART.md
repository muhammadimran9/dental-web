# 🚀 Quick Start Guide

## Prerequisites
- Node.js 18 or higher
- npm or yarn
- Firebase account

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Copy your Firebase configuration

### 3. Setup Environment Variables

The `.env.local` file is already created with placeholder values. Update it with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-actual-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-actual-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-actual-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-actual-app-id
```

### 4. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 5. Create Admin User

1. Go to Firebase Console → Authentication → Users
2. Click "Add user"
3. Create an admin account with email and password

### 6. Access Admin Dashboard

1. Navigate to http://localhost:3000/admin/login
2. Login with your admin credentials
3. Access dashboard at http://localhost:3000/admin/dashboard

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard pages
│   ├── about/             # About page
│   ├── appointment/       # Appointment booking
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── doctors/           # Team page
│   ├── services/          # Services pages
│   └── page.tsx           # Home page
├── components/            # React components
├── lib/                   # Utilities and Firebase config
└── public/                # Static assets
```

## Key Features

### Public Website
- Home page with hero, services, team preview
- About page with clinic story and values
- Services page with detailed service information
- Doctors/Team page with profiles
- Blog with listing and individual posts
- Contact page with form and map
- Appointment booking system

### Admin Dashboard
- Secure authentication
- Appointment management
- Blog post management
- Contact form submissions
- Dashboard statistics

## Customization

### Update Contact Info
Edit `.env.local`:
```env
NEXT_PUBLIC_PHONE=+971-4-XXX-XXXX
NEXT_PUBLIC_EMAIL=info@dentalcaredubai.com
NEXT_PUBLIC_ADDRESS=Dubai Healthcare City, Dubai, UAE
```

### Update Doctors
Edit `components/doctorsConfig.jsx`

### Update Services
Edit `components/servicesConfig.jsx`

### Change Theme Colors
Edit `tailwind.config.js`

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Firebase Connection Issues
- Verify environment variables are correct
- Check Firebase project is active
- Ensure Firestore database is created
- Verify Authentication is enabled

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## Next Steps

1. ✅ Test all pages and features locally
2. ✅ Customize content (doctors, services, contact info)
3. ✅ Add your own images and branding
4. ✅ Test appointment and contact forms
5. ✅ Create blog posts via admin dashboard
6. ✅ Deploy to production (see DEPLOYMENT_INSTRUCTIONS.md)

## Need Help?

- Check DEPLOYMENT_INSTRUCTIONS.md for deployment guide
- Review Next.js docs: https://nextjs.org/docs
- Review Firebase docs: https://firebase.google.com/docs

---

**Your dental clinic website is ready! Start the dev server and begin customizing.** 🎉
