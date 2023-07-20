import { useState } from "react"
import { createUserDocumentFromAuth, signInWithGooglePopup, SigninAuthUserWithEmailAndPassword } from "../../utils/firebase.utils"

import Button from '../Button/Button-component'
import FormInput from "../Form-Input/Form-Input.component"
import './Sign-in-email.style.scss'

const defaultFieldForm = {
    email: '',
    password: '',
}

const SignInform = () => {
    const [formFields, setFormfields] = useState(defaultFieldForm)
    const { email, password } = formFields

    // console.log(formFields)

    const resetFormfield = () => {
        setFormfields(defaultFieldForm)
    }

    const SigninwithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await SigninAuthUserWithEmailAndPassword(email, password)

            // console.log(response)

            resetFormfield()
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('no user assiocated with this email');
                    break;

                case 'auth/wrong-password':
                    alert('Incorrect password for email ');
                    break;
                   default:
                    // console.log(error)
             }  
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormfields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have a account?</h2>
            <span>Sign-in with your email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput
                    label='Email-ID'
                    type='email'
                    required
                    name='email'
                    onChange={handleChange}
                    value={email} />


                <FormInput
                    label='Password'
                    type='password'
                    required name='password'
                    onChange={handleChange}
                    value={password} />



                {/* <div className="button-container">

                    <Button type="submit" >Sign In</Button>
                    <Button type= 'button' buttontype='google' onClick={SigninwithGoogle}>Google Sign In</Button>

                </div>            */}
                <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttontype='google' onClick={SigninwithGoogle}>
            Google sign in
          </Button>
        </div> 
            </form>
        </div>
    )
}

export default SignInform

