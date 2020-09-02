import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfGUPkyhk09-2wFMgEJ9Waz-HW1y8EACU",
  authDomain: "clone-9ae65.firebaseapp.com",
  databaseURL: "https://clone-9ae65.firebaseio.com",
  projectId: "clone-9ae65",
  storageBucket: "clone-9ae65.appspot.com",
  messagingSenderId: "663681729023",
  appId: "1:663681729023:web:190845f0fb3447557367ca",
  measurementId: "G-FY7P3X16G5",
});

const auth = firebase.auth();

export { auth };
