import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "source-tours.firebaseapp.com",
  projectId: "source-tours",
  storageBucket: "source-tours.appspot.com",
  messagingSenderId: "546770002531",
  appId: "1:546770002531:web:74433139186f5edf818e56",
};

export const app = initializeApp(firebaseConfig);
