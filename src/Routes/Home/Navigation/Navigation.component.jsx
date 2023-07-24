import { Outlet, Link } from "react-router-dom"
import { Fragment ,useContext} from "react"

import {ReactComponent as CrownLogo} from "../../../Assets/crown.svg"

import "./Navigation.style.scss"
import { UserContext } from "../../../Context/User.context"


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    console.log(currentUser)
    return (
       <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    
                    <Link className="nav-link" to='/sign-in'>
                        Sign-In
                    </Link>
                    

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation