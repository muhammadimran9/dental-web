@echo off
echo ========================================
echo   DENTAL WEBSITE - QUICK BUILD
echo ========================================
echo.

echo Checking environment...
if not exist ".env.local" (
    echo WARNING: .env.local not found!
    echo Creating from .env.example...
    copy .env.example .env.local
    echo.
    echo IMPORTANT: Edit .env.local with your Firebase credentials before deploying!
    echo.
    pause
)

echo.
echo Starting build process...
echo.

echo [1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)

echo.
echo [2/3] Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    echo.
    echo Common issues:
    echo - Check .env.local has valid Firebase credentials
    echo - Ensure all dependencies are installed
    echo - Check for syntax errors in code
    pause
    exit /b 1
)

echo.
echo [3/3] Build complete!
echo.
echo ========================================
echo   BUILD SUCCESSFUL!
echo ========================================
echo.
echo Your website is ready for deployment.
echo.
echo To test locally:
echo   npm start
echo.
echo To deploy:
echo   - Netlify: Push to Git or drag .next folder
echo   - Vercel: Run 'vercel' command
echo.
pause
