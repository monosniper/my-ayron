import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {enableIndexedDbPersistence} from "@firebase/firestore";
import { collection, onSnapshot, query } from "firebase/firestore";

const firebaseConfig = {

    // measurementId: "G-JHPC7TP12K",

    apiKey: "AIzaSyCYGmjZjLFJqO9Qe_Z3tAlN_KlLt9XeX8g",
  authDomain: "my-ayron.firebaseapp.com",
  projectId: "my-ayron",
  storageBucket: "my-ayron.appspot.com",
  messagingSenderId: "56588608119",
  appId: "1:56588608119:web:23538ecb3777251b5f1c72"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);



// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

// enableIndexedDbPersistence(db)



// const q = query(collection(db, "days"));
// onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//         if (change.type === "added") {
//             console.log("New city: ", change.doc.data());
//         }
//
//         const source = snapshot.metadata.fromCache ? "local cache" : "server";
//         console.log("Data came from " + source);
//     });
// });

export { auth, db };