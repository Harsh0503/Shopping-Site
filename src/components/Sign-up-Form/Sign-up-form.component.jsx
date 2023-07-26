import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils"

import Button from '../Button/Button-component'
import FormInput from "../Form-Input/Form-Input.component"
import './Sign-up-form.style.scss'


const defaultFieldForm = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Signupform = () => {
    const [formFields, setFormfields] = useState(defaultFieldForm)
    const { displayName, email, password, confirmPassword } = formFields

  

    const resetFormfield = () => {
        setFormfields(defaultFieldForm)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password do not match.')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
           
            await createUserDocumentFromAuth(user, { displayName })
            resetFormfield()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user,email already in use ')
            } else {
                console.log('user creation encounted an error', error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormfields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have a account?</h2>
            <span>Sign-up with email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label = 'Display Name'
                    type='text'
                    required
                    name='displayName'
                    onChange={handleChange}
                    value={displayName} />

                
                <FormInput
                   label = 'Email-ID'
                    type='email'
                    required
                    name='email'
                    onChange={handleChange}
                    value={email} />

                
                <FormInput
                    label = 'Password'
                    type='password'
                    required name='password'
                    onChange={handleChange}
                    value={password} />

                
                <FormInput
                    label = 'Confirm password'
                    type='password'
                    required
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword} />

                <Button type="submit">Sign up</Button>

            </form>
        </div>
    )
}

export default Signupform

