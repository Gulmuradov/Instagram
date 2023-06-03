// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaMCi-BtOaF91mYNqv3CGinlIFjoNr8P4",
  authDomain: "instagram-clone-c5ab1.firebaseapp.com",
  projectId: "instagram-clone-c5ab1",
  storageBucket: "instagram-clone-c5ab1.appspot.com",
  messagingSenderId: "863691082979",
  appId: "1:863691082979:web:f62428d529077adfa0c9d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();