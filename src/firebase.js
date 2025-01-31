import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5XrtlG7HsNRB2xBQAdJX2LNUKsbLw0lQ",
    authDomain: "donation-app-afd3f.firebaseapp.com",
    projectId: "donation-app-afd3f",
    storageBucket: "donation-app-afd3f.firebasestorage.app",
    messagingSenderId: "447488853924",
    appId: "1:447488853924:web:e8c6f1a95aecf8c8be2331",
    measurementId: "G-3B52JM12LD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };