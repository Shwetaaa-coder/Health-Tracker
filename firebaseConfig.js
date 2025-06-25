// Import Firebase SDK modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Firebase config (make sure this is from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyA_AagD78qn0N2iR287Htb5J5YOzX3ZFv0",
  authDomain: "healthy-habits-tracker-e1210.firebaseapp.com",
  projectId: "healthy-habits-tracker-e1210",
  storageBucket: "healthy-habits-tracker-e1210.appspot.com",
  messagingSenderId: "660970379798",
  appId: "1:660970379798:web:2ed75725279f6f7cfcf337",
  measurementId: "G-Q64BW6TD4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Export auth for use elsewhere
export { auth };
