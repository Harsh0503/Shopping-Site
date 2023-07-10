import {signInWithGooglePopup} from '../../../utils/firebase.utils'

const SignIn =() => {
    const logGoggleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return(
        <div>
            <h1>This is Sign-In Page </h1>
            <button onClick={logGoggleUser} >Sign In with the google popup </button>
        </div>
    )
}

export default SignIn