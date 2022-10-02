// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwpa_l7rXHZbRz_AQQNYrFeYf4EOgJe_g",
  authDomain: "property99-6fea6.firebaseapp.com",
  projectId: "property99-6fea6",
  storageBucket: "property99-6fea6.appspot.com",
  messagingSenderId: "774514188161",
  appId: "1:774514188161:web:28367506cb289281e95280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);