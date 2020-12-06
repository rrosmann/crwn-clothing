import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBSKJh2R2J8TT_AXJa8ILm-_67cSl7qZ8c',
  authDomain: 'crwn-db-e25ec.firebaseapp.com',
  projectId: 'crwn-db-e25ec',
  storageBucket: 'crwn-db-e25ec.appspot.com',
  messagingSenderId: '93089089615',
  appId: '1:93089089615:web:f4928a6452b2195cd6023a',
  measurementId: 'G-QSVBB33S4Z',
};

firebase.initializeApp(config);

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
