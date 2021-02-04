import firebase from 'firebase';
require('firebase/auth') // ¯\_(ツ)_/¯ wtf? https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3ScMTlC99Gh3BNrVmDysmIrOfw32YOfc",
    authDomain: "mytestproject-cb3be.firebaseapp.com",
    databaseURL: "https://mytestproject-cb3be-default-rtdb.firebaseio.com",
    projectId: "mytestproject-cb3be",
    storageBucket: "mytestproject-cb3be.appspot.com",
    messagingSenderId: "960708761584",
    appId: "1:960708761584:web:7d34f8bd64724409c62f35",
    measurementId: "G-ERZ2YPDBNL"
})

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};