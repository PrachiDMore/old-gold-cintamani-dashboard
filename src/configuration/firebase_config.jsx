import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ2uJeYb7SF2LqgVOcm0LiqBBIHFGKBOk",
  authDomain: "old-gold-f9137.firebaseapp.com",
  projectId: "old-gold-f9137",
  storageBucket: "old-gold-f9137.appspot.com",
  messagingSenderId: "464341153596",
  appId: "1:464341153596:web:6d0e111ba1af63923fd039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);