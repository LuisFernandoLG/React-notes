import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
   apiKey: "AIzaSyDowJpdxfg1ZENkaf3UJoPCvSYLQ1zit5M",
   authDomain: "prueba-651b3.firebaseapp.com",
   databaseURL: "https://prueba-651b3.firebaseio.com",
   projectId: "prueba-651b3",
   storageBucket: "prueba-651b3.appspot.com",
   messagingSenderId: "395194106579",
   appId: "1:395194106579:web:5f41da0e50b49a4db9ca26",
   measurementId: "G-SP7ZTLH002",
};

const fb = firebase.initializeApp(firebaseConfig)
export const db = fb.firestore()