// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4UrP3edqUYgG9w4WM_4egmQa1K7sJB0g",
  authDomain: "virtualtats-development.firebaseapp.com",
  projectId: "virtualtats-development",
  storageBucket: "virtualtats-development.appspot.com",
  messagingSenderId: "206100940395",
  appId: "1:206100940395:web:1280c77ff21e962f82132e"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;