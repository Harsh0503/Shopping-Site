
import  Signupform from "../../../components/Sign-up-Form/Sign-up-form.component"
import SignInform from "../../../components/Sign-in-email/Sign-in-email.component"

import './Sign-In.style.scss'

const SignIn = () => {
    return (
            <div className="Sign-In">
           
            <SignInform/>        
            <Signupform/>
          
        </div>
    )
      
}

export default SignIn