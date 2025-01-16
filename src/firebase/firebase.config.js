// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_1B2d2TnRT6UNuRw8dqzdu4xYWWkbOzs",
  authDomain: "mern-book-inventory-7acb7.firebaseapp.com",
  projectId: "mern-book-inventory-7acb7",
  storageBucket: "mern-book-inventory-7acb7.firebasestorage.app",
  messagingSenderId: "49022216353",
  appId: "1:49022216353:web:dd965b01b553adb4b328e0",
  measurementId: "G-QH0TEQDEW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;