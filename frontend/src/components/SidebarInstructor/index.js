import './SidebarInstructor.scss'
// https://codepen.io/FlorinPop17/pen/EJKgKB
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
import { useParams } from 'react-router-dom'

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

const SidebarInstructor = () => {
    const params = useParams()
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [rating, setRating] = useState('')
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        const sendGet = async () => {
            await axios
                .get(
                    `https://ezdrivemain.herokuapp.com/instructors/${params.instructorId}`,
                )
                .then((res) => {
                    setPhone(res.data.data.phone)
                    setEmail(res.data.data.email)
                    setFirstName(res.data.data.first_name)
                    setLastName(res.data.data.last_name)
                    setRating(res.data.data.rating)
                    setPhoto(res.data.data.photo)
                })
                .catch((err) => {
                    alert(err)
                })
        }
        sendGet()
    }, [params.instructorId])

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
                        src={photo}
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
                    >
                        <p className={styles.statLabel}>Rating</p>
                        <p className={styles.statValue}>{rating}</p>
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
        </>
    )
}

export default SidebarInstructor
