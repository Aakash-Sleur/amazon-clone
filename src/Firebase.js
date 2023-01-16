// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDGSEraYI6bL3VslxaiTqYGD3PtTyfilI0",
    authDomain: "clone-e40a1.firebaseapp.com",
    projectId: "clone-e40a1",
    storageBucket: "clone-e40a1.appspot.com",
    messagingSenderId: "1036132058510",
    appId: "1:1036132058510:web:cb16d08a634746987110df",
    measurementId: "G-DG1STTD3J7"
  });

const db = firebaseApp.firestore();
const auth = getAuth()
const provider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export { auth, db,  provider, githubProvider}

