// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6U-_r6yKI4dwcVG-smEUNBZUkwGH2POo",
    authDomain: "netflixgpt-6bfc2.firebaseapp.com",
    projectId: "netflixgpt-6bfc2",
    storageBucket: "netflixgpt-6bfc2.appspot.com",
    messagingSenderId: "1029335006631",
    appId: "1:1029335006631:web:d2ab22b179e3e3c65a4a82",
    measurementId: "G-W9GXWVQ248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
