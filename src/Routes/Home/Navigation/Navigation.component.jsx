import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"

import {ReactComponent as CrownLogo} from "../../../Assets/crown.svg"

import "./Navigation.style.scss"


const Navigation = () => {
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
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation