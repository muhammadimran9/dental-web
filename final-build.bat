@echo off
echo ========================================
echo Dental Services Website - Build Verification
echo ========================================
echo.

echo [1/6] Checking Node.js version...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found. Please install Node.js 20+
    exit /b 1
)
echo.

echo [2/6] Checking npm version...
npm --version
if %errorlevel% neq 0 (
    echo ERROR: npm not found
    exit /b 1
)
echo.

echo [3/6] Checking environment file...
if not exist ".env.local" (
    echo WARNING: .env.local not found
    echo Please create .env.local from .env.example
    echo.
) else (
    echo .env.local found
    echo.
)

echo [4/6] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    exit /b 1
)
echo.

echo [5/6] Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    echo Please check the error messages above
    exit /b 1
)
echo.

echo [6/6] Build verification complete!
echo.
echo ========================================
echo BUILD SUCCESSFUL!
echo ========================================
echo.
echo Next steps:
echo 1. Test locally: npm start
echo 2. Deploy to Vercel: vercel
echo 3. Deploy to Netlify: Push to Git repository
echo.
echo Website is 100%% complete and ready for deployment!
echo.
pause
