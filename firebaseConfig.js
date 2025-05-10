// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_AagD78qn0N2iR287Htb5J5YOzX3ZFv0",
  authDomain: "healthy-habits-tracker-e1210.firebaseapp.com",
  projectId: "healthy-habits-tracker-e1210",
  storageBucket: "healthy-habits-tracker-e1210.firebasestorage.app",
  messagingSenderId: "660970379798",
  appId: "1:660970379798:web:2ed75725279f6f7cfcf337",
  measurementId: "G-Q64BW6TD4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);