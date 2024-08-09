// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClvq3v-PBkJHNr2-SveX81pDvfpmvnqGY",
  authDomain: "buybusy-c2681.firebaseapp.com",
  projectId: "buybusy-c2681",
  storageBucket: "buybusy-c2681.appspot.com",
  messagingSenderId: "402672693946",
  appId: "1:402672693946:web:9d02fdb003bfb987788883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


