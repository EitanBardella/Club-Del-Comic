// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkcpCZxEmxqyQKSWdx_pbvbkAroDCLvwU",
    authDomain: "club-del-comic.firebaseapp.com",
    projectId: "club-del-comic",
    storageBucket: "club-del-comic.appspot.com",
    messagingSenderId: "203593607975",
    appId: "1:203593607975:web:2ccc0f65d47e70c16b9702"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCsKniULceOhq7qtW5P81YHv7FZEsoIPYw",
//   authDomain: "club-del-comic-c072d.firebaseapp.com",
//   projectId: "club-del-comic-c072d",
//   storageBucket: "club-del-comic-c072d.appspot.com",
//   messagingSenderId: "869513197427",
//   appId: "1:869513197427:web:b1d7b67f46dce89791f706"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);