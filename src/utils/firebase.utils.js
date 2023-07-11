import { initializeApp } from "firebase/app"

import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

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

export const db = new getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
   const userDocRef = doc(db , 'users' , userAuth.uid )

   console.log(userDocRef)

   const userSnapshot = await getDoc(userDocRef)
   console.log(userSnapshot)
   console.log(userSnapshot.exists())

   if(!userSnapshot.exists()){
    const { email , displayName } = userAuth;
    const createdAt = new Date();
    
    try{
      await setDoc( userDocRef, {
        email,
        displayName,
        createdAt,
      });
    }catch(error){
      console.log("error creating the user",error.message)
    }
  }
  return userDocRef;
};