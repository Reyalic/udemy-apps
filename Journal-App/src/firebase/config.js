// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD0iCiEWOYBN7X_YjX_BgG2QLs1zq7Sw0",
  authDomain: "react-journal-67558.firebaseapp.com",
  projectId: "react-journal-67558",
  storageBucket: "react-journal-67558.appspot.com",
  messagingSenderId: "129942939815",
  appId: "1:129942939815:web:134cdcb739934aa7e5d382"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)