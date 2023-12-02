

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeq06m0_jgJg1gjuUPiOaL4Em-g_abPQI",
  authDomain: "supply-chain-97434.firebaseapp.com",
  projectId: "supply-chain-97434",
  storageBucket: "supply-chain-97434.appspot.com",
  messagingSenderId: "34367424082",
  appId: "1:34367424082:web:f2f7bc2d1940ea1459418b",
  measurementId: "G-YF27ZZKWEY"
};


// const firebaseConfig = {
//     apiKey: "AIzaSyC7eZ5l8XDW9KBnEfvj7zj2gA_TkifQQMQ",
//     authDomain: "matimare.firebaseapp.com",
//     projectId: "matimare",
//     storageBucket: "matimare.appspot.com",
//     messagingSenderId: "590389624765",
//     appId: "1:590389624765:web:5f1f057d3f7cfb5529dcd4",
//     measurementId: "G-FQCTBL5CZP"
//   };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)



export default app
