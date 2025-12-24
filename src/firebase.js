// Firebase configuration and auth utility
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPH2E2p439Cptac6IJO39t1QSpBe4pEjM",
  authDomain: "healthai-5028b.firebaseapp.com",
  projectId: "healthai-5028b",
  storageBucket: "healthai-5028b.firebasestorage.app",
  messagingSenderId: "1093041359792",
  appId: "1:1093041359792:web:8497e1685d9e6e8a3ee475",
  measurementId: "G-1Y78BYPHVB"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
