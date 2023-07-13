import { useState } from "react"
import {createAuthUserWithEmailAndPassword ,  createUserDocumentFromAuth} from "../../utils/firebase.utils"

const defaultFieldForm ={
    displayName :'',
    emailId:'',
    password:'',
    confirmPassword:''
}

const Signupform = () => {
    const [ formFields , setFormfields ] = useState(defaultFieldForm)
    const {displayName,emailId,password,confirmPassword} = formFields

    console.log(formFields)

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(password !== confirmPassword){
        alert( 'Password do not match.')
        return 
        }
        try {
         const { user } = await createAuthUserWithEmailAndPassword(emailId , password)

         await createUserDocumentFromAuth (user , {displayName})
        }
        

        catch(error){
          console.log('user creation encounted an error',error)
        }
    }

    const handleChange =(event) =>{
     const {name , value} = event.target

     setFormfields({...formFields ,  [name]:value})
    }

    return(
     <div>
        <h1>Sign-up with email and password</h1>
        <form onSubmit={handleSubmit}>

         <label>Display Name</label>
         <input type ='text' required name='displayName' onChange={handleChange} value={displayName}/>

         <label>Email ID</label>
         <input type ='email' required name='emailId' onChange={handleChange} value={emailId}/>

         <label>Password</label>
         <input type ='password' required name='password' onChange={handleChange} value={password}/>

         <label>Confirm Password </label>
         <input type ='password' required  name="confirmPassword" onChange={handleChange} value={confirmPassword}/>

         <button type="submit">Sign up</button>     

        </form>
     </div>
    )
}

export default Signupform

