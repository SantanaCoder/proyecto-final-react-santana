


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBExvqmQ_thcV50fjjkvQYDnMw3dR1SSaI",
  authDomain: "santana-store.firebaseapp.com",
  projectId: "santana-store",
  storageBucket: "santana-store.appspot.com", 
  messagingSenderId: "765917417599",
  appId: "1:765917417599:web:5c844043a0ec9d1726af4a"
};


const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)

