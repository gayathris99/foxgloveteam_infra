// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABaf7Y1yQ8VSdp2vJzDFzf9IlTia5kGUU",
  authDomain: "foxgloveteam-infra.firebaseapp.com",
  projectId: "foxgloveteam-infra",
  storageBucket: "foxgloveteam-infra.appspot.com",
  messagingSenderId: "314584928652",
  appId: "1:314584928652:web:b5e533ca86a234956a86a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
