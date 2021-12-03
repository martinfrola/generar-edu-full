import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyAlgpl1EmHS5efB6iXH3aL97A5LY3ohsE4",
  authDomain: "generaredu.firebaseapp.com",
  projectId: "generaredu",
  storageBucket: "generaredu.appspot.com",
  messagingSenderId: "1080331879362",
  appId: "1:1080331879362:web:58551bd3aae910389a0c5b",
  measurementId: "G-F7EK0RVW5G",
});
