import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"
import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyBR6Z4GDKNgQoh05Gc9GdXhXWsNGFj1thM",
  authDomain: "ingenious-ecd53.firebaseapp.com",
  projectId: "ingenious-ecd53",
  storageBucket: "ingenious-ecd53.appspot.com",
  messagingSenderId: "688117323981",
  appId: "1:688117323981:web:d9e3db753ce2dd1faeb184",
}

firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var RDB = firebase.database();
export var DB = firebase.firestore();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
export var storage = firebase.storage().ref("images");

export default firebase;