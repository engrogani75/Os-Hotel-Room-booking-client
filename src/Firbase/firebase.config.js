// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDho53l5IPEqFrkxgBb2bo2m01mmgxL66E",
  authDomain: "hotel-booking-client-a32a5.firebaseapp.com",
  projectId: "hotel-booking-client-a32a5",
  storageBucket: "hotel-booking-client-a32a5.appspot.com",
  messagingSenderId: "694707171880",
  appId: "1:694707171880:web:997e02dcf5c32a3422bb1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app