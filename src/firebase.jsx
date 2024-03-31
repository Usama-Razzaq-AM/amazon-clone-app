import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6sM895RBwBSUy6nrMFs6u0UcqLIWO0hs",
  authDomain: "clone-767bf.firebaseapp.com",
  projectId: "clone-767bf",
  storageBucket: "clone-767bf.appspot.com",
  messagingSenderId: "1078783440531",
  appId: "1:1078783440531:web:ffb1b81e4f03e8646b3f66",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
