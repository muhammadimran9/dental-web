#!/bin/bash

# Dental Clinic Web App - Netlify Deployment Script
echo "🦷 Starting DentalCare Dubai Deployment..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next out dist

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🏗️ Building for production..."
npm run build

# Check if build successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Ready for Netlify deployment"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Commit changes to Git"
    echo "2. Push to repository"
    echo "3. Netlify will auto-deploy"
    echo ""
    echo "🔧 Manual deployment alternative:"
    echo "netlify deploy --prod --dir=out"
else
    echo "❌ Build failed!"
    echo "🔍 Check the error messages above"
    exit 1
fi
