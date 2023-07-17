import './Button.style.scss'


const Button_type_classes = {
    google : 'google-sign-in',
    inverted : 'inverted',
}



const Button = ({children, buttontype, ...otherpops}) => {
   return(
    <button
     className={`button-container ${Button_type_classes[buttontype]}`} {...otherpops}
    >{children}
    </button>
   )
}

export default Button