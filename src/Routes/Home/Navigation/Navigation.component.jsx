import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../../components/Cart-item/Cart-item.component"
import { UserContext } from "../../../Context/User.context"
import { ReactComponent as CrownLogo } from "../../../Assets/crown.svg"
import { signOutuser } from "../../../utils/firebase.utils"
import "./Navigation.style.scss"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
  
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>

                    {
                        currentUser ? (
                        <span className="nav-link" onClick={signOutuser}>
                            { '' }
                            Sign Out { '' }
                            </span>
                    ) : (
                        <Link className="nav-link" to='/sign-in'>
                            Sign-In
                        </Link>
                    )

                    }

                 <CartIcon/>

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation