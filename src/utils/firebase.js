// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1WOiAjWhyWaAb99AREAm3pfOvKF3aJWU",
  authDomain: "react-richard-correa.firebaseapp.com",
  projectId: "react-richard-correa",
  storageBucket: "react-richard-correa.appspot.com",
  messagingSenderId: "193210842035",
  appId: "1:193210842035:web:6755b4916974966dc729c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
export const db = getFirestore(app)