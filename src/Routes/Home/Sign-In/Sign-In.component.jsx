import {createUserDocumentFromAuth,signInWithGooglePopup} from '../../../utils/firebase.utils'

const SignIn =() => {
    const logGoggleUser = async () =>{
       
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>This is Sign-In Page </h1>
            <button onClick={logGoggleUser} >Sign In with the google </button>
        </div>
    )
}

export default SignIn