// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALsoMRscerc8kaIGK-BEBks5UGXwLof_E",
  authDomain: "to-do-list-sample-72874.firebaseapp.com",
  projectId: "to-do-list-sample-72874",
  storageBucket: "to-do-list-sample-72874.appspot.com",
  messagingSenderId: "857117211088",
  appId: "1:857117211088:web:d9ccea7b86fce95b1ba1d5",
  measurementId: "G-N85WF7079N",
  databaseURL:
    "https://to-do-list-sample-a0985-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
