import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNqx-PBrII5xqqzU49T3U0qzZN72105yE",
  authDomain: "ecommerce-e50e7.firebaseapp.com",
  projectId: "ecommerce-e50e7",
  storageBucket: "ecommerce-e50e7.appspot.com",
  messagingSenderId: "303461933509",
  appId: "1:303461933509:web:e6b16d09ecf9c1d076ebac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)