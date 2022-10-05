// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkuWWDu7IuHWEf1EJn9y0i3Sq9QUyqoHs",
    authDomain: "fir-sf-1df38.firebaseapp.com",
    projectId: "fir-sf-1df38",
    storageBucket: "fir-sf-1df38.appspot.com",
    messagingSenderId: "566862148286",
    appId: "1:566862148286:web:db465a3d62c141706de4ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
