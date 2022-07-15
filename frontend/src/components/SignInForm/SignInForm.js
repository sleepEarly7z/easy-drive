import * as React from 'react'
import toast from 'react-hot-toast'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink, useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getInstructorsAsync } from '../../redux/instructors/thunks'
import { reset } from '../../redux/authentication/reducer'
import { loginAsync } from '../../redux/authentication/thunks'

import Loading from '../Animation/Loading'

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme()

const useStyles = makeStyles((theme) => ({
    buttonRight: {
        backgroundColor: '#f4ca59',
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
        '&:hover': {
            backgroundColor: '#f4ca59',
        },
    },
}))

const SignInForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const classes = useStyles()

    // const list = useSelector((state) => state.instructors.list)

    useEffect(() => {
        dispatch(getInstructorsAsync())
    }, [dispatch])

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth,
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        // Redirect when logged in
        if (isSuccess || user) {
            setIsLoading(true)
            setTimeout(function () {
                navigate('/explore')
            }, 3000) //run this after 3 seconds
        }

        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formInputs = new FormData(event.currentTarget)
        console.log('formInputs: ')
        console.log(formInputs.get('email'))
        console.log(formInputs.get('password'))

        const userData = {
            email: formInputs.get('email'),
            password: formInputs.get('password'),
        }

        // let foundInstructor = list.find(
        //     (user) => user.email === formInputs.get('email'),
        // )

        // console.log(foundInstructor)
        // if (!foundInstructor) {
        //     toast.error('Username does not exist')
        //     return
        // }
        // if (foundInstructor.password !== formInputs.get('password')) {
        //     toast.error('Invalid combination of username and password')
        //     return
        // }
        console.log(userData)
        dispatch(loginAsync(userData))
    }

    return isLoading ? (
        <Loading />
    ) : (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#f4ca59' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value="billieeasd@gmail.com"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value="1asdj12"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            className={classes.buttonRight}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#f4ca59' }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <NavLink to="/" variant="body2">
                                    Forgot password?
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink
                                    to="/sign-up-instructor"
                                    variant="body2"
                                >
                                    {"Don't have an account? Sign Up"}
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

export default SignInForm
