// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf-fYhARSr-U1YLkOj4NucjcJhP4RS8Ok",
  authDomain: "email-password-authentic-832f2.firebaseapp.com",
  projectId: "email-password-authentic-832f2",
  storageBucket: "email-password-authentic-832f2.appspot.com",
  messagingSenderId: "491974847323",
  appId: "1:491974847323:web:04a97012b214d54a7f087e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
