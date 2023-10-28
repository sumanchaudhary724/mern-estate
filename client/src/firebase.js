// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e7ec1.firebaseapp.com",
  projectId: "mern-estate-e7ec1",
  storageBucket: "mern-estate-e7ec1.appspot.com",
  messagingSenderId: "61635659618",
  appId: "1:61635659618:web:cec4f2235cdbbd56818e3b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
