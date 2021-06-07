import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-LNkANVu6KBYJD76O4su_k1vsI3g_Ioo",
  authDomain: "facebookbyesther.firebaseapp.com",
  projectId: "facebookbyesther",
  storageBucket: "facebookbyesther.appspot.com",
  messagingSenderId: "862153856804",
  appId: "1:862153856804:web:42e9ff9f84ff59020785b1",
  measurementId: "G-7SC5ECX23V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
