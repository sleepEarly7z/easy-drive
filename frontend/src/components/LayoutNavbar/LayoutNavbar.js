import './index.scss'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { ReactComponent as HomeIcon } from '../../assets/images/svg/home.svg'
import { ReactComponent as MenuIcon } from '../../assets/images/svg/menu.svg'

import { FaBars, FaSignInAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { HiX } from 'react-icons/hi'

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { reset } from '../../redux/authentication/reducer'
import { logoutAsync } from '../../redux/authentication/thunks'

function LayoutNavbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const [toggleIcon, setToggleIcon] = useState(false)

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    const handleViewProfile = () => {
        navigate(`/profile-${user.data.role}/${user.data._id}`)
        window.location.reload(false)
    }

    const handleSignOut = () => {
        dispatch(logoutAsync())
        dispatch(reset())
        navigate('/explore')
    }

    const list = (anchor) => (
        <Box
            sx={{
                width: 'auto',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <div className="d-flex flex-row mt-4 mb-3">
                        <img
                            className="photo"
                            src={user.data.photo}
                            alt=""
                            style={{
                                width: '60px',
                                height: '60px',
                                marginLeft: '20px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                        <div style={{ marginLeft: '15px' }}>
                            <div className="d-flex">
                                <div
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '800',
                                    }}
                                >
                                    {user.data.first_name} {user.data.last_name}
                                </div>
                                {user.data.role === 'instructor' && (
                                    <div
                                        style={{
                                            fontSize: '13px',
                                            marginTop: '8px',
                                            marginLeft: '10px',
                                            color: '#ffb341',
                                            fontWeight: '500',
                                        }}
                                    >
                                        {user.data.role}
                                    </div>
                                )}
                            </div>
                            <div
                                className="d-flex"
                                style={{
                                    fontSize: '14px',
                                    color: '#484a4d',
                                }}
                            >
                                <LocationOnIcon
                                    style={{ fontSize: 18, marginTop: 2 }}
                                />
                                {user.data.city}
                            </div>
                        </div>
                    </div>
                </ListItem>
                <ListItem key={'View Profile'} disablePadding>
                    <ListItemButton onClick={handleViewProfile}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'View Profile'} />
                    </ListItemButton>
                </ListItem>
                {/* <ListItem key={'Message'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Message'} />
                    </ListItemButton>
                </ListItem> */}
            </List>
            {/* <Divider />
            <List>
                <ListItem key={'Help'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Help'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Settings'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} />
                    </ListItemButton>
                </ListItem>
            </List> */}
            <Divider />
            <List>
                <ListItem key={'Sign Out'} disablePadding>
                    <ListItemButton onClick={handleSignOut}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Sign Out'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return (
        <div className="layout-navbar">
            <nav className="navbar">
                <ul className="navbar-nav-left">
                    <NavItem text={'Easy'} name={'icon-button-logo'} />
                </ul>
                <ul className="navbar-nav-right">
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
                    {user ? (
                        <>
                            <div>
                                <div className="">
                                    <div className="icon-button-profile">
                                        <Button
                                            onClick={toggleDrawer(
                                                'right',
                                                true,
                                            )}
                                        >
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                color="#d7d5d5"
                                            />
                                        </Button>
                                    </div>
                                    <div
                                        className="icon-text-me"
                                        style={{ color: '#d7d5d5' }}
                                    >
                                        Me
                                    </div>
                                </div>
                                <SwipeableDrawer
                                    anchor={'right'}
                                    open={state['right']}
                                    onClose={toggleDrawer('right', false)}
                                    onOpen={toggleDrawer('right', true)}
                                    PaperProps={{
                                        style: {
                                            marginTop: '5rem',
                                            width: '400px',
                                        },
                                    }}
                                >
                                    {list('right')}
                                </SwipeableDrawer>
                            </div>
                        </>
                    ) : (
                        <NavItem
                            icon={<FaSignInAlt />}
                            text={'Log In/Register'}
                            name={'icon-button-signin'}
                            to={'/sign-in'}
                        />
                    )}
                </ul>
                <ul
                    className={`navbar__container__menu ${toggleIcon ? 'active' : ''
                        }`}
                >
                    <li className="navbar__container__menu_item">
                        <Link
                            className="navbar__container__menu_item_links"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="navbar__container__menu_item">
                        <Link
                            className="navbar__container__menu_item_links"
                            to="/explore"
                        >
                            Explore
                        </Link>
                    </li>
                    {user ? (
                        <>
                            <li className="navbar__container__menu_item">
                                <Link
                                    className="navbar__container__menu_item_links"
                                    to={`/profile-${user.data.role}/${user.data._id}`}
                                >
                                    View Profile
                                </Link>
                            </li>
                            <li className="navbar__container__menu_item">
                                <Link
                                    className="navbar__container__menu_item_links"
                                    to={`/`}
                                    onClick={() => {
                                        dispatch(logoutAsync())
                                        dispatch(reset())
                                        navigate('/explore')
                                    }}
                                >
                                    Sign Out
                                </Link>
                            </li>
                        </>
                    ) : (
                        <li className="navbar__container__menu_item">
                            <Link
                                className="navbar__container__menu_item_links"
                                to="/sign-in"
                            >
                                Login/Register
                            </Link>
                        </li>
                    )}
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                    <li className="nav-item-bar">
                        {/* navbar__container__menu_item */}
                        <div>
                            <div className="icon-button-bar">
                                {toggleIcon ? (
                                    <HiX size={30} />
                                ) : (
                                    <FaBars size={30} />
                                )}
                            </div>
                        </div>
                    </li>
                </div>
            </nav>
        </div>
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
            window.location.reload(false)
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
                    <Link
                        to={{
                            pathname: `${props.to}`,
                        }}
                        className={props.name}
                        onClick={handleClick}
                        style={{ textDecoration: 'none' }}
                    >
                        {props.icon}
                    </Link>
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

export default LayoutNavbar
