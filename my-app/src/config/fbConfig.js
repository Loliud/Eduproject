import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
 var config = {
    apiKey: "AIzaSyBoGEpPb5IoBRKjNaif5E2ml2rUis-p02w",
    authDomain: "conihongo.firebaseapp.com",
    databaseURL: "https://conihongo.firebaseio.com",
    projectId: "conihongo",
    storageBucket: "",
    messagingSenderId: "710971001339",
    appId: "1:710971001339:web:68a0ba8e963bc9b98ca35e"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({});




  export default firebase;