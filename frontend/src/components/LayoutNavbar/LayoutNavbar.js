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
                    {/* <NavItem
                        icon={<FontAwesomeIcon icon={faUser} color="#d7d5d5" />}
                        text={'Profile'}
                        name={'icon-button-profile'}
                        to={'/profile-instructor'}
                    /> */}
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
                    to={'/sign-in'}
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
