import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHole5Lm--O-QAQ2JH-36Y5sMVPjS9zTU",
    authDomain: "money-manager-6be52.firebaseapp.com",
    databaseURL: "https://money-manager-6be52.firebaseio.com",
    projectId: "money-manager-6be52",
    storageBucket: "money-manager-6be52.appspot.com",
    messagingSenderId: "1072749345637",
    appId: "1:1072749345637:web:21495d9391b2e99a35bf8c",
    measurementId: "G-KCVQSQPLVQ"
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firebase.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email }= userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;