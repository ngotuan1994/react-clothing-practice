import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDBmeed7-TFvR4iN3iPXHFvUMUFgIi_AMk",
  authDomain: "react-clothing-dc1fd.firebaseapp.com",
  projectId: "react-clothing-dc1fd",
  storageBucket: "react-clothing-dc1fd.appspot.com",
  messagingSenderId: "833929780076",
  appId: "1:833929780076:web:2073a3b80a41f7b8393149",
  measurementId: "G-MC9102S7PT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
