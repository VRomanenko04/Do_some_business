/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  env: {
    FIREBASE_AUTH_DOMAIN: 'dosomebusiness-web.firebaseapp.com',
    FIREBASE_API_KEY: 'AIzaSyAJLHIMLaqDjDJOZTIO4OPL1ydwuvcmd7U',
    FIREBASE_PROJECT_ID: 'dosomebusiness-web',
    FIREBASE_STORAGE_BUCKET: 'dosomebusiness-web.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '1062413263581',
    FIREBASE_APP_I: '1:1062413263581:web:5d867da7aee5a970367134'
  },
}

module.exports = nextConfig
