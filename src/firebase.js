
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyAxZs4oBT59tr9T4lx2UVYC6N5sCXglAy4",
  authDomain: "chatapp-fa3b0.firebaseapp.com",
  projectId: "chatapp-fa3b0",
  storageBucket: "chatapp-fa3b0.appspot.com",
  messagingSenderId: "114621458195",
  appId: "1:114621458195:web:611a942cb0dfd7ea2e5ce6",
  measurementId: "G-ED085GXXYQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();