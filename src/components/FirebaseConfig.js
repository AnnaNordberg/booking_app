import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1lLEDbqD12uRuCns7eSN7fOhqCPpBDUE",
    authDomain: "approject-73d30.firebaseapp.com",
    databaseURL: "https://approject-73d30.firebaseio.com",
    projectId: "approject-73d30",
    storageBucket: "approject-73d30.appspot.com",
    messagingSenderId: "796130155145",
    appId: "1:796130155145:web:c3a2283ab3c7dc73ab8458",
    measurementId: "G-MPJW4SVFJ5"
  };

  firebase.initializeApp(firebaseConfig);

  //firebase.firestore().settings({timestampsInSnapshots:true});

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();
  export default firebase; 