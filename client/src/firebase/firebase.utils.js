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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const createUserProfileDocument = async (
  userAuth,
  additionalUserAttributes
) => {
  if (!userAuth) return;

  const userReference = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userReference.get();

  if (userSnapshot.exists) {
    return userReference;
  }

  try {
    const { displayName, email } = userAuth;
    await userReference.set({
      displayName,
      email,
      createdAt: new Date(),
      ...additionalUserAttributes,
    });
  } catch (error) {
    console.log('Error occurred during user creation: ', error.message);
  }

  return userReference;
};

export const createNewFirestoreCollectionAndDocuments = async (
  newFirestoreCollectionName,
  dataObjectForFirestoreStorage
) => {
  const newCollectionRef = firestore.collection(newFirestoreCollectionName);
  const batch = firestore.batch();

  dataObjectForFirestoreStorage.forEach((element) => {
    const newDocRef = newCollectionRef.doc();
    batch.set(newDocRef, element);
  });

  return await batch.commit();
};

export const mapFashionCollectionFromFirestoreForReduxState = (
  querySnapshot
) => {
  const mappedReturnObject = {};

  querySnapshot.docs.forEach((fashionCollectionDocSnapshot) => {
    const data = fashionCollectionDocSnapshot.data();
    const newDataObject = {
      routeName: encodeURI(data.title.toLowerCase()),
      id: fashionCollectionDocSnapshot.id,
      ...data,
    };
    mappedReturnObject[data.title.toLowerCase()] = newDataObject;
  });

  return mappedReturnObject;
};
