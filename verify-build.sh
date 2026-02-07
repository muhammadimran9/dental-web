#!/bin/bash

echo "========================================"
echo "  Dental Website Build Verification"
echo "========================================"
echo ""

echo "[1/5] Checking Node.js version..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js 18 or higher from https://nodejs.org"
    exit 1
fi
node --version
echo "✓ Node.js is installed"
echo ""

echo "[2/5] Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "ERROR: Failed to install dependencies!"
        exit 1
    fi
else
    echo "✓ Dependencies already installed"
fi
echo ""

echo "[3/5] Checking environment variables..."
if [ ! -f ".env.local" ]; then
    echo "WARNING: .env.local file not found!"
    echo "Please create .env.local with your Firebase credentials"
    echo "See .env.example for reference"
    read -p "Press enter to continue..."
else
    echo "✓ .env.local file exists"
fi
echo ""

echo "[4/5] Running type check..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "WARNING: TypeScript errors found (build will continue due to ignoreBuildErrors)"
fi
echo ""

echo "[5/5] Building for production..."
npm run build
if [ $? -ne 0 ]; then
    echo "ERROR: Build failed!"
    echo "Please check the error messages above"
    exit 1
fi
echo ""

echo "========================================"
echo "  ✓ BUILD SUCCESSFUL!"
echo "========================================"
echo ""
echo "Your website is ready to deploy!"
echo ""
echo "Next steps:"
echo "1. Setup Firebase (see DEPLOYMENT_CHECKLIST.md)"
echo "2. Deploy to Vercel or Netlify (see DEPLOYMENT_INSTRUCTIONS.md)"
echo "3. Add environment variables to your hosting platform"
echo "4. Test your live website"
echo ""
echo "To start local server: npm start"
echo "To deploy: Follow DEPLOYMENT_INSTRUCTIONS.md"
echo ""
