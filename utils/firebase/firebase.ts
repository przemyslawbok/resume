import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// TODO: setup Firebase for Resume project
const firebaseConfig = {
  apiKey: 'AIzaSyAG2SZ1sofMdlD4jPjIZjqGN_hrL0SdEVI',
  authDomain: 'zeus-todo.firebaseapp.com',
  projectId: 'zeus-todo',
  storageBucket: 'zeus-todo.appspot.com',
  messagingSenderId: '639366391654',
  appId: '1:639366391654:web:e2065f498789f38dd34aa7',
  measurementId: 'G-JH817E2S6H',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
