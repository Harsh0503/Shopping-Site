// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import  Signupform from "../../../components/Sign-up-Form/Sign-up-form.component"

import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect, } from '../../../utils/firebase.utils'

const SignIn = () => {
    // useEffect (async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);

    //     // if (response) {
    //     //     const userDocRef = await createUserDocumentFromAuth(response.user);
    //     // }

    // }, []);

    const logGoggleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };

    return (
        <div>
            <h1>This is Sign-In Page </h1>
            <button onClick={logGoggleUser} >Sign In with the google </button>
            <Signupform/>
            {/* <button onClick={signInWithGoogleRedirect} >Sign In with the google redirect </button> */}
        </div>
    )
}

export default SignIn