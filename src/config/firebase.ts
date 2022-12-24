// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjqsDOOf9oA1J6s8Ew6MSc8MfOKe1yTjE",
  authDomain: "fig-tree-hall.firebaseapp.com",
  projectId: "fig-tree-hall",
  storageBucket: "fig-tree-hall.appspot.com",
  messagingSenderId: "856234813572",
  appId: "1:856234813572:web:abffd570e630526b327ad1",
  measurementId: "G-D7ZWLVQDDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
