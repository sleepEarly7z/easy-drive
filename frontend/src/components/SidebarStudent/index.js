import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded'
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered'
import axios from 'axios'
import FollowingList from '../FollowingList/FollowingList'

const useStyles = makeStyles(({ palette }) => ({
    card: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        margin: 'auto',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginTop: 8,
        marginBottom: 0,
    },
    subheader: {
        fontSize: 20,
        color: palette.grey[500],
        marginBottom: '0.875em',
    },
    statLabel: {
        fontSize: 12,
        color: palette.grey[500],
        fontWeight: 500,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        margin: 0,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
}))

const SidebarStudent = ({ section1, section2 }) => {
    const [show, setShow] = useState(false)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [followingList, setFollowingList] = useState({})

    const handleFollowingList = (event) => {
        setShow(!show)
        console.log(show)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    useEffect(() => {
        const sendGet = async () => {
            const res = await axios
                .get(
                    'https://easy-drive-405found.herokuapp.com/students/62d761535c08a0f631db58a0',
                )
                .then((res) => {
                    setPhone(res.data.data.phone)
                    setEmail(res.data.data.email)
                    setFirstName(res.data.data.first_name)
                    setLastName(res.data.data.last_name)
                    setFollowingList(res.data.data.followedInstructors)
                })
                .catch((err) => {
                    alert(err)
                })
        }
        sendGet()
    }, [])

    const styles = useStyles()
    const shadowStyles = useFadedShadowStyles()
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '50%',
    })
    return (
        <>
            <Card className={cx(styles.card, shadowStyles.root)}>
                <CardContent>
                    <Avatar
                        className={styles.avatar}
                        src={'https://i.pravatar.cc/300'}
                    />
                    <h3 className={styles.heading}>
                        {first_name + ' ' + last_name}
                    </h3>
                    <span className={styles.subheader}>{phone}</span>
                    <br />
                    <span className={styles.subheader}>{email}</span>
                </CardContent>
                <Divider light />
                <Box display={'flex'}>
                    <Box
                        p={2}
                        flex={'auto'}
                        className={borderedGridStyles.item}
                        onClick={handleFollowingList}
                    >
                        <p className={styles.statLabel}>Following</p>
                        <p className={styles.statValue}>12</p>
                    </Box>
                    <Box
                        p={2}
                        flex={'auto'}
                        className={borderedGridStyles.item}
                    >
                        <p className={styles.statLabel}>Reviews</p>
                        <p className={styles.statValue}>3</p>
                    </Box>
                </Box>
            </Card>
            <FollowingList showBoolean={show} onClose={() => setShow(false)} />
        </>
    )
}

export default SidebarStudent
