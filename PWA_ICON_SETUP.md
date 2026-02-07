# PWA Icon Setup Instructions

## Required Icons

You need to create the following icon files in the `/public` directory:

1. **icon-192.png** (192x192 pixels)
2. **icon-512.png** (512x512 pixels)

## How to Create Icons

### Option 1: Use the logo from components folder
- Take the logo file from `components/logo.webp`
- Convert and resize to PNG format:
  - 192x192 pixels for icon-192.png
  - 512x512 pixels for icon-512.png

### Option 2: Use Online Tools
- Visit: https://www.pwabuilder.com/imageGenerator
- Upload your logo
- Download the generated icons
- Place them in the `/public` directory

### Option 3: Use ImageMagick (Command Line)
```bash
# Convert logo to 192x192
convert components/logo.webp -resize 192x192 public/icon-192.png

# Convert logo to 512x512
convert components/logo.webp -resize 512x512 public/icon-512.png
```

## Icon Requirements
- Format: PNG
- Background: Solid color (preferably white or brand color)
- Content: Centered logo with padding
- Purpose: App icon for mobile devices

## Testing
After adding icons, test the PWA:
1. Open the website in Chrome
2. Check DevTools > Application > Manifest
3. Verify icons are loaded correctly
4. Test the "Install App" button
