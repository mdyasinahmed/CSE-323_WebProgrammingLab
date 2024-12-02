// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQv5aIMQ4ftsCd0j5l0ZlOVzxnWNDv5vg",
  authDomain: "blooddonationwebsite-d5d5e.firebaseapp.com",
  projectId: "blooddonationwebsite-d5d5e",
  storageBucket: "blooddonationwebsite-d5d5e.firebasestorage.app",
  messagingSenderId: "263107291467",
  appId: "1:263107291467:web:48e333f3440bd54d4720ce",
  measurementId: "G-8167Z3WQ1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);