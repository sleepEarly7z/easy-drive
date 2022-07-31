import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded'
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered'
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

const SidebarStudent = (props) => {
    const { info, followedInstructors } = props

    const { first_name, last_name, phone, email, photo } = info

    const [show, setShow] = useState(false)

    const handleFollowingList = (event) => {
        setShow(!show)
        console.log(show)
    }

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
                    <Avatar className={styles.avatar} src={photo} />
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
                        <p className={styles.statValue}>
                            {followedInstructors.length}
                        </p>
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
            <FollowingList
                followedInstructors={followedInstructors}
                showBoolean={show}
                onClose={() => setShow(false)}
            />
        </>
    )
}

export default SidebarStudent
