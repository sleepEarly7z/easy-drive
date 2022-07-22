// Version 1
// import './index.scss'
// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { GiHamburgerMenu } from 'react-icons/gi'

// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

// import { reset } from '../../redux/authentication/reducer'
// import { logoutAsync } from '../../redux/authentication/thunks'

// const Navbar = () => {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const { user } = useSelector((state) => state.auth)

//     const [showMediaIcons, setShowMediaIcons] = useState(false)

//     const onLogout = () => {
//         dispatch(logoutAsync())
//         dispatch(reset())
//         navigate('/explore')
//     }

//     const onLogin = () => {
//         navigate('/sign-in')
//     }

//     return (
//         <>
//             <nav className="navbar-main-nav">
//                 {/* 1st logo part  */}
//                 <div className="navbar-logo">
//                     <h2>
//                         <span>E</span>asy
//                         <span>D</span>rive
//                     </h2>
//                 </div>

//                 {/* 2nd menu part  */}
//                 <div
//                     className={
//                         showMediaIcons
//                             ? 'menu-link mobile-menu-link'
//                             : 'menu-link'
//                     }
//                 >
//                     <ul>
//                         <li className="navbar-list-itm">
//                             <NavLink
//                                 to="/explore"
//                                 style={{ textDecoration: 'none' }}
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li className="navbar-list-itm">
//                             <NavLink
//                                 to="/explore"
//                                 style={{ textDecoration: 'none' }}
//                             >
//                                 Explore
//                             </NavLink>
//                         </li>
//                         <li className="navbar-list-itm">
//                             <NavLink
//                                 to="/showProfileRating/62c627693211f7421b269ff5"
//                                 style={{ textDecoration: 'none' }}
//                             >
//                                 Review
//                             </NavLink>
//                         </li>
//                         <li className="navbar-list-itm">
//                             <NavLink
//                                 to="/profile-instructor"
//                                 style={{ textDecoration: 'none' }}
//                             >
//                                 ProfileIns
//                             </NavLink>
//                         </li>
//                         <li className="navbar-list-itm">
//                             <NavLink
//                                 to="/profile-student"
//                                 style={{ textDecoration: 'none' }}
//                             >
//                                 ProfileStu
//                             </NavLink>
//                         </li>
//                         <li className="navbar-list-itm">
//                             <NavLink
//                                 to="/about"
//                                 style={{ textDecoration: 'none' }}
//                             >
//                                 About
//                             </NavLink>
//                         </li>

//                         {user ? (
//                             <li className="navbar-list-itm">
//                                 <button
//                                     className="d-flex btn"
//                                     onClick={onLogout}
//                                 >
//                                     <FaSignOutAlt
//                                         color="#f4ca59"
//                                         fontSize="28px"
//                                     />
//                                     <div className="navbar-list-itm-text">
//                                         Logout
//                                     </div>
//                                 </button>
//                             </li>
//                         ) : (
//                             <>
//                                 <li className="profile-icon-link">
//                                     <NavLink to="/sign-in">
//                                         <FontAwesomeIcon
//                                             icon={faUser}
//                                             color="#f4ca59"
//                                             fontSize="38px"
//                                         />
//                                     </NavLink>
//                                 </li>
//                                 <li className="navbar-list-itm">
//                                     <button
//                                         className="d-flex btn"
//                                         onClick={onLogin}
//                                     >
//                                         <FaSignInAlt
//                                             color="#f4ca59"
//                                             fontSize="28px"
//                                         />
//                                         <div className="navbar-list-itm-text">
//                                             Login
//                                         </div>
//                                     </button>
//                                 </li>
//                                 <li className="navbar-list-itm-signin">
//                                     <NavLink
//                                         to="/sign-in"
//                                         style={{ textDecoration: 'none' }}
//                                     >
//                                         Sign In
//                                     </NavLink>
//                                 </li>
//                             </>
//                         )}
//                     </ul>
//                 </div>

//                 {/* 3rd social media links */}
//                 <div className="social-media">
//                     {/* hamburget menu start  */}
//                     <div className="hamburger-menu">
//                         <a
//                             className="hamburger-menu-icon"
//                             href="/#"
//                             onClick={() => setShowMediaIcons(!showMediaIcons)}
//                         >
//                             <GiHamburgerMenu
//                                 style={{ fill: '#f4ca59', marginRight: '3rem' }}
//                             />
//                         </a>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar

// Version 2

import './index.css'
import { ReactComponent as HomeIcon } from '../../assets/images/svg/home.svg'
import { ReactComponent as MenuIcon } from '../../assets/images/svg/menu.svg'
import { ReactComponent as BellIcon } from '../../assets/images/svg/bell.svg'
import { ReactComponent as MessengerIcon } from '../../assets/images/svg/messenger.svg'
import { ReactComponent as CaretIcon } from '../../assets/images/svg/caret.svg'
import { ReactComponent as ProfileIcon } from '../../assets/images/svg/profile.svg'
// import { ReactComponent as PlusIcon } from '../../assets/images/svg/plus.svg'
import { ReactComponent as CogIcon } from '../../assets/images/svg/cog.svg'
import { ReactComponent as ChevronIcon } from '../../assets/images/svg/chevron.svg'
import { ReactComponent as ArrowIcon } from '../../assets/images/svg/arrow.svg'
import { ReactComponent as BoltIcon } from '../../assets/images/svg/bolt.svg'

import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'

import { reset } from '../../redux/authentication/reducer'
import { logoutAsync } from '../../redux/authentication/thunks'

function LayoutNavbar() {
    const { user } = useSelector((state) => state.auth)
    return (
        <Navbar>
            <NavItem text={'Easy'} name={'icon-button-logo'} />
            <NavItem
                icon={<HomeIcon />}
                text={'Home'}
                name={'icon-button-home'}
                to={'/'}
            />
            <NavItem
                icon={<MenuIcon />}
                text={'Explore'}
                name={'icon-button-explore'}
                to={'/explore'}
            />
            <NavItem
                icon={<BellIcon />}
                text={'Notification'}
                name={'icon-button-notification'}
            />
            <NavItem
                icon={<MessengerIcon />}
                text={'Message'}
                name={'icon-button-message'}
            />

            {user ? (
                <>
                    {user.data.role === 'instructor' ? (
                        <NavItem
                            icon={
                                <FontAwesomeIcon
                                    icon={faUser}
                                    color="#d7d5d5"
                                />
                            }
                            text={'Profile'}
                            name={'icon-button-profile'}
                            to={`/profile-instructor/${user.data._id}`}
                        />
                    ) : (
                        <NavItem
                            icon={
                                <FontAwesomeIcon
                                    icon={faUser}
                                    color="#d7d5d5"
                                />
                            }
                            text={'Profile'}
                            name={'icon-button-profile'}
                            to={`/profile-student/${user.data._id}`}
                        />
                    )}
                    <NavItem
                        icon={<FaSignOutAlt />}
                        text={'Sign Out'}
                        name={'icon-button-signout'}
                    ></NavItem>
                </>
            ) : (
                <NavItem
                    icon={<FaSignInAlt />}
                    text={'Log In/Register'}
                    name={'icon-button-signin'}
                    to={'/sign-in-instructor'}
                />
            )}
        </Navbar>
    )
}

function Navbar(props) {
    const leftItems = props.children[0]
    const rightItems = Array.from(props.children).slice(1)
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav-left">{leftItems}</ul>
                <ul className="navbar-nav-right">{rightItems}</ul>
            </nav>
        </>
    )
}

function NavItem(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
        if (props.to) {
            navigate(props.to)
        }
        if (props.name === 'icon-button-signout') {
            dispatch(logoutAsync())
            dispatch(reset())
            navigate('/explore')
        }
    }

    return (
        <li className="nav-item">
            {props.icon ? (
                <div>
                    <a
                        href="# "
                        className={props.name}
                        onClick={handleClick}
                        style={{ textDecoration: 'none' }}
                    >
                        {props.icon}
                    </a>
                    <div className="icon-text">{props.text}</div>
                </div>
            ) : (
                <div>
                    <div className="icon-text-logo">{props.text}</div>
                </div>
            )}

            {open && props.children}
        </li>
    )
}

// function DropdownMenu() {
//     const [activeMenu, setActiveMenu] = useState('main')
//     const [menuHeight, setMenuHeight] = useState(null)
//     const dropdownRef = useRef(null)

//     useEffect(() => {
//         setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
//     }, [])

//     function calcHeight(el) {
//         const height = el.offsetHeight
//         setMenuHeight(height)
//     }

//     function DropdownItem(props) {
//         return (
//             <a
//                 href=" "
//                 className="menu-item"
//                 onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
//             >
//                 <span className="icon-button">{props.leftIcon}</span>
//                 {props.children}
//                 <span className="icon-right">{props.rightIcon}</span>
//             </a>
//         )
//     }

//     return (
//         <div
//             className="dropdown"
//             style={{ height: menuHeight * 1.2 }}
//             ref={dropdownRef}
//         >
//             <CSSTransition
//                 in={activeMenu === 'main'}
//                 timeout={500}
//                 classNames="menu-primary"
//                 unmountOnExit
//                 onEnter={calcHeight}
//             >
//                 <div className="menu">
//                     <DropdownItem>My Profile</DropdownItem>
//                     <DropdownItem
//                         leftIcon={<CogIcon />}
//                         rightIcon={<ChevronIcon />}
//                         goToMenu="settings"
//                     >
//                         Settings
//                     </DropdownItem>
//                     <DropdownItem
//                         leftIcon="🦧"
//                         rightIcon={<ChevronIcon />}
//                         goToMenu="manage"
//                     >
//                         Manage
//                     </DropdownItem>
//                     <DropdownItem>Sign Out</DropdownItem>
//                 </div>
//             </CSSTransition>

//             <CSSTransition
//                 in={activeMenu === 'settings'}
//                 timeout={500}
//                 classNames="menu-secondary"
//                 unmountOnExit
//                 onEnter={calcHeight}
//             >
//                 <div className="menu">
//                     <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//                         <h2>Go back</h2>
//                     </DropdownItem>
//                     <DropdownItem leftIcon={<BoltIcon />}>
//                         Preference
//                     </DropdownItem>
//                     <DropdownItem leftIcon={<BoltIcon />}>
//                         Language
//                     </DropdownItem>
//                     <DropdownItem leftIcon={<BoltIcon />}>Privacy</DropdownItem>
//                     <DropdownItem leftIcon={<BoltIcon />}>Help</DropdownItem>
//                 </div>
//             </CSSTransition>

//             <CSSTransition
//                 in={activeMenu === 'manage'}
//                 timeout={500}
//                 classNames="menu-secondary"
//                 unmountOnExit
//                 onEnter={calcHeight}
//             >
//                 <div className="menu">
//                     <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//                         <h2>Go back</h2>
//                     </DropdownItem>
//                     <DropdownItem leftIcon="🔖">Post & Activity</DropdownItem>
//                     <DropdownItem leftIcon="📤">
//                         Job Posting Account
//                     </DropdownItem>
//                     <DropdownItem leftIcon="📋">My Favorite</DropdownItem>
//                 </div>
//             </CSSTransition>
//         </div>
//     )
// }

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight
        setMenuHeight(height)
    }

    function DropdownItem(props) {
        return (
            <a
                href="# "
                className="menu-item"
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
            >
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div
            className="dropdown"
            style={{ height: menuHeight * 1.15 }}
            ref={dropdownRef}
        >
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                    >
                        Animals
                    </DropdownItem>
                    <DropdownItem>Sign Out</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>
                        JavaScript
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>
                        Awesome!
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
export default LayoutNavbar
