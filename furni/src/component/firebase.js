// src/component/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrszqSqSjzwDh1goxiZUHPpt74dvKPisE",
  authDomain: "registerform-4cc73.firebaseapp.com",
  projectId: "registerform-4cc73",
  storageBucket: "registerform-4cc73.appspot.com",  // ✅ You had a typo here, corrected.
  messagingSenderId: "674399565755",
  appId: "1:674399565755:web:a013e01f3c82ac240db69e",
  measurementId: "G-9HW7L83BCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
