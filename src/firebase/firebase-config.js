import { initializeApp } from "firebase/app";
import { getFirestore, /*collection, getDocs*/ } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyBEAQJuzMvrfySn7yKiHC1TF_3MRkGqRVI",
    authDomain: "react-app-curso-53b5a.firebaseapp.com",
    projectId: "react-app-curso-53b5a",
    storageBucket: "react-app-curso-53b5a.appspot.com",
    messagingSenderId: "724098372828",
    appId: "1:724098372828:web:bf1be66e15fe03e077d019"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
var provider = new GoogleAuthProvider();


export {
    app,
    db,
    provider
}