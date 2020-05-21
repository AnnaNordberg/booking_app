import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "approject-73d30.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "approject-73d30",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  //firebase.firestore().settings({timestampsInSnapshots:true});

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();
  export default firebase; 