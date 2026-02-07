@echo off
echo ========================================
echo   Dental Website Build Verification
echo ========================================
echo.

echo [1/5] Checking Node.js version...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js 18 or higher from https://nodejs.org
    pause
    exit /b 1
)
echo ✓ Node.js is installed
echo.

echo [2/5] Checking dependencies...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
) else (
    echo ✓ Dependencies already installed
)
echo.

echo [3/5] Checking environment variables...
if not exist ".env.local" (
    echo WARNING: .env.local file not found!
    echo Please create .env.local with your Firebase credentials
    echo See .env.example for reference
    pause
) else (
    echo ✓ .env.local file exists
)
echo.

echo [4/5] Running type check...
call npm run type-check
if %errorlevel% neq 0 (
    echo WARNING: TypeScript errors found (build will continue due to ignoreBuildErrors)
)
echo.

echo [5/5] Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    echo Please check the error messages above
    pause
    exit /b 1
)
echo.

echo ========================================
echo   ✓ BUILD SUCCESSFUL!
echo ========================================
echo.
echo Your website is ready to deploy!
echo.
echo Next steps:
echo 1. Setup Firebase (see DEPLOYMENT_CHECKLIST.md)
echo 2. Deploy to Vercel or Netlify (see DEPLOYMENT_INSTRUCTIONS.md)
echo 3. Add environment variables to your hosting platform
echo 4. Test your live website
echo.
echo To start local server: npm start
echo To deploy: Follow DEPLOYMENT_INSTRUCTIONS.md
echo.
pause
