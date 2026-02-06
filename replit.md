# Dental Clinic Website

## Overview
A dental clinic website for "DentalCare Dubai" built with Next.js 16, React 18, TypeScript, and Tailwind CSS. Features include appointment booking, services pages, blog, contact forms, patient feedback, and an admin dashboard.

## Project Architecture
- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **UI**: React 18
- **Forms**: react-hook-form
- **Backend Services**: Firebase (for admin/blog/contacts)
- **Date Utils**: date-fns

## Project Structure
- `/app` - Next.js App Router pages and components
  - `/admin` - Admin dashboard (login, appointments, blog, contacts)
  - `/about` - About pages
  - `/appointment` - Appointment booking
  - `/blog` - Blog pages
  - `/contact-us` - Contact page
  - `/doctors` - Doctors page
  - `/invisalign` - Invisalign service page
  - `/patient-feedback` - Patient feedback
  - `/pricing` - Pricing pages
  - `/referral` - Referral program
  - `/services` - Dental services
- `/components` - Shared UI components
- `/public` - Static assets and images
- `/lib` - Utility libraries

## Development
- Dev server: `npm run dev` (runs on 0.0.0.0:5000)
- Build: `npm run build`
- Production: `npm run start`

## Configuration
- `next.config.js` - Next.js configuration with `allowedDevOrigins: ['*']` for Replit proxy
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Recent Changes
- 2026-02-06: Initial Replit setup - configured port 5000, allowed all dev origins, set up deployment
