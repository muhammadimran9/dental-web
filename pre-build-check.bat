@echo off
echo ========================================
echo   DENTAL WEBSITE PRE-BUILD CHECKLIST
echo ========================================
echo.

echo [1/8] Checking Node.js version...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found!
    exit /b 1
)
echo ✓ Node.js installed
echo.

echo [2/8] Checking npm version...
npm --version
if %errorlevel% neq 0 (
    echo ERROR: npm not found!
    exit /b 1
)
echo ✓ npm installed
echo.

echo [3/8] Checking environment file...
if exist ".env.local" (
    echo ✓ .env.local exists
) else (
    echo WARNING: .env.local not found! Copy .env.example to .env.local
    echo Creating .env.local from .env.example...
    copy .env.example .env.local
)
echo.

echo [4/8] Checking critical image files...
set MISSING_IMAGES=0

if exist "public\dental-images\kdlogo.png" (
    echo ✓ Logo file exists
) else (
    echo WARNING: Logo file missing at public\dental-images\kdlogo.png
    set MISSING_IMAGES=1
)

if exist "public\dental-images\dental-veneers.jpg" (
    echo ✓ dental-veneers.jpg exists
) else (
    echo WARNING: dental-veneers.jpg missing
    set MISSING_IMAGES=1
)

if exist "public\dental-images\dental-blog3.jpg" (
    echo ✓ dental-blog3.jpg exists
) else (
    echo WARNING: dental-blog3.jpg missing
    set MISSING_IMAGES=1
)

if exist "public\dental-images\bg-img.jpg" (
    echo ✓ bg-img.jpg exists
) else (
    echo WARNING: bg-img.jpg missing
    set MISSING_IMAGES=1
)

if exist "public\dental-images\dental-white.jpg" (
    echo ✓ dental-white.jpg exists
) else (
    echo WARNING: dental-white.jpg missing
    set MISSING_IMAGES=1
)

if exist "public\images\teethandsmile.png" (
    echo ✓ teethandsmile.png exists
) else (
    echo WARNING: teethandsmile.png missing
    set MISSING_IMAGES=1
)

if %MISSING_IMAGES%==1 (
    echo.
    echo WARNING: Some images are missing. Build may fail or show broken images.
)
echo.

echo [5/8] Checking PWA files...
if exist "public\manifest.json" (
    echo ✓ manifest.json exists
) else (
    echo ERROR: manifest.json missing!
)

if exist "public\sw.js" (
    echo ✓ Service worker exists
) else (
    echo ERROR: sw.js missing!
)
echo.

echo [6/8] Checking icon files...
if exist "public\icons\icon-192x192.png" (
    echo ✓ PWA icons exist
) else (
    echo WARNING: PWA icons may be missing
)
echo.

echo [7/8] Checking dependencies...
if exist "node_modules" (
    echo ✓ node_modules exists
) else (
    echo WARNING: node_modules not found. Run 'npm install'
)
echo.

echo [8/8] Checking Next.js configuration...
if exist "next.config.js" (
    echo ✓ next.config.js exists
) else (
    echo ERROR: next.config.js missing!
)
echo.

echo ========================================
echo   PRE-BUILD CHECK COMPLETE
echo ========================================
echo.
echo Next steps:
echo 1. If .env.local was created, edit it with your Firebase credentials
echo 2. Run 'npm install' if node_modules is missing
echo 3. Run 'npm run build' to build the project
echo 4. Run 'npm start' to start production server
echo.
pause
