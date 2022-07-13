import './index.scss'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { GiHamburgerMenu } from 'react-icons/gi'

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

import { reset } from '../../redux/authentication/reducer'
import { logoutAsync } from '../../redux/authentication/thunks'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const [showMediaIcons, setShowMediaIcons] = useState(false)

    const onLogout = () => {
        dispatch(logoutAsync())
        dispatch(reset())
        navigate('/explore')
    }

    const onLogin = () => {
        navigate('/sign-in')
    }

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
                        <li className="navbar-list-itm">
                            <NavLink
                                to="/showProfileRating/62c627693211f7421b269ff5"
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

                        {user ? (
                            <li className="navbar-list-itm">
                                <button
                                    className="d-flex btn"
                                    onClick={onLogout}
                                >
                                    <FaSignOutAlt
                                        color="#f4ca59"
                                        fontSize="28px"
                                    />
                                    <div className="navbar-list-itm-text">
                                        Logout
                                    </div>
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="profile-icon-link">
                                    <NavLink to="/sign-in">
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            color="#f4ca59"
                                            fontSize="38px"
                                        />
                                    </NavLink>
                                </li>
                                <li className="navbar-list-itm">
                                    <button
                                        className="d-flex btn"
                                        onClick={onLogin}
                                    >
                                        <FaSignInAlt
                                            color="#f4ca59"
                                            fontSize="28px"
                                        />
                                        <div className="navbar-list-itm-text">
                                            Login
                                        </div>
                                    </button>
                                </li>
                                <li className="navbar-list-itm-signin">
                                    <NavLink
                                        to="/sign-in"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        Sign In
                                    </NavLink>
                                </li>
                            </>
                        )}
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
