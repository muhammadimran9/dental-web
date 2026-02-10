@echo off
echo ========================================
echo   IMAGE MIGRATION SCRIPT
echo   Moving images to public folders
echo ========================================
echo.

echo [Step 1] Creating directories if they don't exist...
if not exist "public\images" mkdir "public\images"
if not exist "public\dental-images" mkdir "public\dental-images"
echo ✓ Directories ready
echo.

echo [Step 2] Copying dental service images...
if exist "components\images\dental-veneers.jpg" (
    copy /Y "components\images\dental-veneers.jpg" "public\dental-images\" >nul
    echo ✓ Copied dental-veneers.jpg
)
if exist "components\images\dental-blog3.jpg" (
    copy /Y "components\images\dental-blog3.jpg" "public\dental-images\" >nul
    echo ✓ Copied dental-blog3.jpg
)
if exist "components\images\bg-img.jpg" (
    copy /Y "components\images\bg-img.jpg" "public\dental-images\" >nul
    echo ✓ Copied bg-img.jpg
)
if exist "components\images\dental-white.jpg" (
    copy /Y "components\images\dental-white.jpg" "public\dental-images\" >nul
    echo ✓ Copied dental-white.jpg
)
echo.

echo [Step 3] Copying logo files...
if exist "components\images\go-dental-235x61-2 (7).png" (
    copy /Y "components\images\go-dental-235x61-2 (7).png" "public\dental-images\go-dental-235x61-2.png" >nul
    echo ✓ Copied logo file
)
echo.

echo [Step 4] Copying profile images...
for %%f in (components\images\profile-*.jpg) do (
    if not exist "public\images\%%~nxf" (
        copy /Y "%%f" "public\images\" >nul
        echo ✓ Copied %%~nxf
    )
)
echo.

echo [Step 5] Copying stock images...
for %%f in (components\images\istockphoto-*.webp) do (
    if not exist "public\images\%%~nxf" (
        copy /Y "%%f" "public\images\" >nul
        echo ✓ Copied %%~nxf
    )
)
echo.

echo [Step 6] Copying teethandsmile.png...
if exist "components\icons\teethandsmile.png" (
    if not exist "public\images\teethandsmile.png" (
        copy /Y "components\icons\teethandsmile.png" "public\images\" >nul
        echo ✓ Copied teethandsmile.png
    )
)
echo.

echo ========================================
echo   IMAGE MIGRATION COMPLETE
echo ========================================
echo.
echo All images have been copied to public folders.
echo Your website is now ready to build!
echo.
pause
