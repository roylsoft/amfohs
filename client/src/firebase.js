// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "source-tours.firebaseapp.com",
  projectId: "source-tours",
  storageBucket: "source-tours.appspot.com",
  messagingSenderId: "546770002531",
  appId: "1:546770002531:web:74433139186f5edf818e56",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
