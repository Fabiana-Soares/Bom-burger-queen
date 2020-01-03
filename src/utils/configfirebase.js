import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWAZdq8S8CFDN-Mc_oJPaKfUfu_Gt6yFw",
    authDomain: "burger-queen-bce84.firebaseapp.com",
    databaseURL: "https://burger-queen-bce84.firebaseio.com",
    projectId: "burger-queen-bce84",
    storageBucket: "burger-queen-bce84.appspot.com",
    messagingSenderId: "1009640799164",
    appId: "1:1009640799164:web:2b70b9fee532ff2a0289b9",
    measurementId: "G-25E1Z1DZYL"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  


  
  export default firebase;