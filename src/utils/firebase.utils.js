import { initializeApp } from "firebase/app"

import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpCPGXzILjIG_cGsJtb0JkK6gjW8x9qvU",
    authDomain: "crwn-clothing-db-ae01e.firebaseapp.com",
    projectId: "crwn-clothing-db-ae01e",
    storageBucket: "crwn-clothing-db-ae01e.appspot.com",
    messagingSenderId: "561608407286",
    appId: "1:561608407286:web:f864caca738f2323e1d4d7"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth()

export const signInWithGooglePopup =() => signInWithPopup(auth,provider) ;