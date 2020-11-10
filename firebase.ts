import firebase from 'firebase';
import 'firebase/auth';
// import 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBeAlIGYEfRRAk5J5v0cfu7dGgfBLBNC48',
  authDomain: 'the-best-printers-in-prod.firebaseapp.com',
  databaseURL: 'https://the-best-printers-in-prod.firebaseio.com',
  projectId: 'the-best-printers-in-prod',
  storageBucket: 'the-best-printers-in-prod.appspot.com',
  messagingSenderId: '129400031893',
  appId: '1:129400031893:web:76e8f80306a4aa2098e99c',
  measurementId: 'G-46SMF8V235',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const projectAuth = firebase.auth();
export const projectAuthProvider = new firebase.auth.GoogleAuthProvider();
// export const projectAnalytics = firebase.analytics();
