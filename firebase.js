// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnlqCics1NX1mRZpQYLiPMFqMx7U7eq38",
  authDomain: "next-project-ea6e5.firebaseapp.com",
  projectId: "next-project-ea6e5",
  storageBucket: "next-project-ea6e5.appspot.com",
  messagingSenderId: "288817089836",
  appId: "1:288817089836:web:7a1f0ff99fdc636b397089",
  measurementId: "G-8JKB5VDZED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {auth, provider, db}