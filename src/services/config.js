import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tpfinalreact-20068.firebaseapp.com",
  projectId: "tpfinalreact-20068",
  storageBucket: "tpfinalreact-20068.appspot.com",
  messagingSenderId: "113076911299",
  appId: "1:113076911299:web:75eddbad7ab6981be67676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);