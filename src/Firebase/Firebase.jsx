// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA6NE83B1hTIpnmIKEHm3TIIgQML7XZ50",
  authDomain: "fir-pracitce-9079c.firebaseapp.com",
  projectId: "fir-pracitce-9079c",
  storageBucket: "fir-pracitce-9079c.appspot.com",
  messagingSenderId: "771985931701",
  appId: "1:771985931701:web:1329b1c7dbf222f8c3adfc",
  measurementId: "G-RFL8GN3RW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleprovider=new GoogleAuthProvider();
export const database=getFirestore(app)