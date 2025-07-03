// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAr3UU-BVYUzlSu9rCDj8DbwXfS3-K_qhw",
  authDomain: "assignment-84d1a.firebaseapp.com",
  projectId: "assignment-84d1a",
  storageBucket: "assignment-84d1a.firebasestorage.app",
  messagingSenderId: "761746518304",
  appId: "1:761746518304:web:c4b2a53b3575f8d1762745",
  measurementId: "G-DPCXX9FD3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Export all the necessary Firebase services
export { 
  auth,
  provider,
  signInWithPopup,
  signOut,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
};