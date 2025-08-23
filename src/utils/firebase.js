// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyVkUl_FKOc2W3S_QvpJdbk3pqug-8UlU",
  authDomain: "netflixgpt-50b5d.firebaseapp.com",
  projectId: "netflixgpt-50b5d",
  storageBucket: "netflixgpt-50b5d.firebasestorage.app",
  messagingSenderId: "207680247142",
  appId: "1:207680247142:web:89baa135a9b46330da24a7",
  measurementId: "G-MCQVH5N395",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
