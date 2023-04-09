// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBvBvAJtNmlJZlqJwsAGeeEKzwQPUnCVz4",

  authDomain: "react-ts-project.firebaseapp.com",

  projectId: "react-ts-project",

  storageBucket: "react-ts-project.appspot.com",

  messagingSenderId: "457952377424",

  appId: "1:457952377424:web:e03f8fc98b72d99f532f55"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)