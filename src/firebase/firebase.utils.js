import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDZGVNqdW69VDmecE9xX4CraI5ZPItvqs4",
  authDomain: "gaerkaanooni-db-ea10d.firebaseapp.com",
  databaseURL: "https://gaerkaanooni-db-ea10d.firebaseio.com",
  projectId: "gaerkaanooni-db-ea10d",
  storageBucket: "gaerkaanooni-db-ea10d.appspot.com",
  messagingSenderId: "394808171248",
  appId: "1:394808171248:web:df46591aefc24440c84035",
  measurementId: "G-Y8PMPS150X",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
