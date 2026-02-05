import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDdvHA6MGCwVUAL86jLrksG2NkNLBNGDXc",
  authDomain: "nms-club.firebaseapp.com",
  projectId: "nms-club",
  storageBucket: "nms-club.firebasestorage.app",
  messagingSenderId: "771690895467",
  appId: "1:771690895467:web:4cf514319b196e2449392e",
  measurementId: "G-7RWR3HQ71D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
