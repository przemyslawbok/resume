import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDKDNjVpy1N7UJG2FuYl3lP4ehoJbRBgNE',
  authDomain: 'resume-4f517.firebaseapp.com',
  projectId: 'resume-4f517',
  storageBucket: 'resume-4f517.appspot.com',
  messagingSenderId: '345690797519',
  appId: '1:345690797519:web:7a13f1a4ec38d073dd4eba',
  measurementId: 'G-Z2MFBGFFYM',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
