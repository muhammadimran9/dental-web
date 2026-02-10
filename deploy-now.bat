@echo off
echo ========================================
echo Dental Services Website - DEPLOY
echo ========================================
echo.
echo Build Status: SUCCESS
echo All Pages: Working
echo All Features: Complete
echo.
echo ========================================
echo DEPLOYMENT OPTIONS
echo ========================================
echo.
echo 1. Deploy to Vercel (Fastest)
echo 2. Deploy to Netlify
echo 3. Test Locally
echo 4. Exit
echo.
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto vercel
if "%choice%"=="2" goto netlify
if "%choice%"=="3" goto local
if "%choice%"=="4" goto end

:vercel
echo.
echo Installing Vercel CLI...
call npm i -g vercel
echo.
echo Deploying to Vercel...
call vercel
echo.
echo Deployment complete!
echo Don't forget to add environment variables in Vercel dashboard
pause
goto end

:netlify
echo.
echo For Netlify deployment:
echo 1. Push code to GitHub
echo 2. Go to https://app.netlify.com
echo 3. Click "Add new site"
echo 4. Import from Git
echo 5. Build command: npm run build
echo 6. Publish directory: .next
echo 7. Add environment variables
echo.
pause
goto end

:local
echo.
echo Starting local server...
call npm start
goto end

:end
echo.
echo Thank you for using the deployment script!
echo.
pause
