import React from 'react'
import {Link} from 'react-router-dom'

function header() {
    return (
        <div>
            <header>
                <div className="header__container">
                    <div className="navigation__wrapper">
                    <div className="brand__logo">
                        <Link>Logo</Link>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <Link to="/home" >
                                    Home 
                                </Link>
                            </li>

                            <li>
                                <Link to="/myportfolio">
                                    My Portfolio 
                                </Link>
                            </li>

                            <li>
                                <Link to="/clients">
                                    Clients 
                                </Link>
                            </li>

                            <li>
                                <Link to="/getInTouch" className="btn">
                                    Get in touch 
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default header
