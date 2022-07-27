// Version 2

import './index.css'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import { ReactComponent as HomeIcon } from '../../assets/images/svg/home.svg'
import { ReactComponent as MenuIcon } from '../../assets/images/svg/menu.svg'
import { ReactComponent as BellIcon } from '../../assets/images/svg/bell.svg'
import { ReactComponent as MessengerIcon } from '../../assets/images/svg/messenger.svg'
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

function LayoutNavbarTest() {
    const { user } = useSelector((state) => state.auth)
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

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

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ),
                )}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
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
                    <div>
                        <div className="">
                            <div className="icon-button-profile">
                                <Button onClick={toggleDrawer('right', true)}>
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
                                style: { marginTop: '5rem', width: '25%' },
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

export default LayoutNavbarTest
