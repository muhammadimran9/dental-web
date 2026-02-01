# Firebase CDN Setup (Alternative)

If you prefer to use Firebase CDN scripts instead of the npm package, follow these steps:

## 1. Add Firebase CDN to Layout

In `app/layout.tsx`, add the Firebase CDN scripts before the closing `</body>` tag:

```tsx
// Add these scripts in app/layout.tsx
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>
```

## 2. Update Firebase Config

Update `lib/firebase.ts` to use the CDN version:

```typescript
// lib/firebase.ts - CDN Version
declare global {
  interface Window {
    firebase: any;
  }
}

let app: any;
let auth: any;
let db: any;

if (typeof window !== 'undefined' && window.firebase) {
  app = window.firebase.initializeApp({
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
  });
  
  auth = window.firebase.auth();
  db = window.firebase.firestore();
}

export { auth, db };
export default app;
```

## 3. Initialize in Layout

In `app/layout.tsx`, add initialization script:

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      // Your Firebase config object
      const firebaseConfig = {
        apiKey: "${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}",
        authDomain: "${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}",
        projectId: "${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}",
        storageBucket: "${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}",
        messagingSenderId: "${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}",
        appId: "${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}"
      };
      firebase.initializeApp(firebaseConfig);
    `,
  }}
/>
```

## Note

The current setup uses the Firebase npm package, which is recommended for Next.js projects. 
The CDN approach works but may have some limitations with Next.js server-side rendering.

If you provide the CDN scripts, I can help update the configuration accordingly.
