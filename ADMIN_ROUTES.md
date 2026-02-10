# Admin Dashboard Routes

## 🔐 Admin Access Routes

### Main Routes:

1. **Login Page**
   - Route: `/admin/login`
   - Purpose: Admin authentication
   - File: `app/admin/login/page.tsx`

2. **Dashboard (Main)**
   - Route: `/admin/dashboard`
   - Purpose: Overview with stats and quick actions
   - File: `app/admin/dashboard/page.tsx`
   - Features:
     - Dashboard statistics
     - Quick action buttons
     - Admin header

3. **Appointments Management**
   - Route: `/admin/appointments`
   - Purpose: View and manage appointment bookings
   - File: `app/admin/appointments/page.tsx`
   - Features:
     - View all appointments
     - Mark as read
     - Delete appointments
     - Appointment details

4. **Blog Management**
   - Route: `/admin/blog`
   - Purpose: Manage blog posts
   - File: `app/admin/blog/page.tsx`
   - Sub-routes:
     - `/admin/blog/new` - Create new blog post
     - `/admin/blog/edit/[id]` - Edit existing post

5. **Contacts Management**
   - Route: `/admin/contacts`
   - Purpose: View and manage contact form submissions
   - File: `app/admin/contacts/page.tsx`
   - Features:
     - View all contacts
     - Contact details
     - Delete contacts

## 🔑 Authentication

- Uses Firebase Authentication
- Protected routes with `useAdminAuth` hook
- Redirects to login if not authenticated

## 📊 Admin Dashboard Features

### Dashboard Stats:
- Total appointments
- Total blog posts
- Total contacts
- Recent activity

### Quick Actions:
- View appointments
- Create blog post
- View contacts
- Manage content

## 🚀 Access Instructions

1. Navigate to: `https://your-domain.com/admin/login`
2. Login with Firebase credentials
3. Access dashboard at: `/admin/dashboard`
4. Use navigation to access different sections

## 🔒 Security

- Firebase Authentication required
- Protected routes
- Admin-only access
- Secure data handling
