import React, { useState } from 'react'
import './index.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false)
    return (
        <>
            <nav className="navbar-main-nav">
                {/* 1st logo part  */}
                <div className="navbar-logo">
                    <h2>
                        <span>E</span>asy
                        <span>D</span>rive
                    </h2>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons
                            ? 'menu-link mobile-menu-link'
                            : 'menu-link'
                    }
                >
                    <ul>
                        <li className="navbar-list-itm">
                            <NavLink
                                to="/explore"
                                style={{ textDecoration: 'none' }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar-list-itm">
                            <NavLink
                                to="/explore"
                                style={{ textDecoration: 'none' }}
                            >
                                Explore
                            </NavLink>
                        </li>
                        {/* <li className="navbar-list-itm">
                            <NavLink
                                to="/showProfileRating/62a56dccfc13ae05bf00046a"
                                style={{ textDecoration: 'none' }}
                            >
                                Review
                            </NavLink>
                        </li> */}

                        <li className="navbar-list-itm">
                            <NavLink
                                to="/showProfileRating"
                                style={{ textDecoration: 'none' }}
                            >
                                Review
                            </NavLink>
                        </li>
                        <li className="navbar-list-itm">
                            <NavLink
                                to="/profile-instructor"
                                style={{ textDecoration: 'none' }}
                            >
                                ProfileIns
                            </NavLink>
                        </li>
                        <li className="navbar-list-itm">
                            <NavLink
                                to="/profile-student"
                                style={{ textDecoration: 'none' }}
                            >
                                ProfileStu
                            </NavLink>
                        </li>
                        <li className="navbar-list-itm">
                            <NavLink
                                to="/about"
                                style={{ textDecoration: 'none' }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="profile-icon-link">
                            <NavLink to="/sign-in">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    color="#f4ca59"
                                    fontSize="38px"
                                />
                            </NavLink>
                        </li>
                        <li className="navbar-list-itm-signin">
                            <NavLink
                                to="/sign-in"
                                style={{ textDecoration: 'none' }}
                            >
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a
                            className="hamburger-menu-icon"
                            href="/#"
                            onClick={() => setShowMediaIcons(!showMediaIcons)}
                        >
                            <GiHamburgerMenu
                                style={{ fill: '#f4ca59', marginRight: '3rem' }}
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
