import './index.scss'
import { NavLink } from 'react-router-dom'
import LinearStepper from '../../components/SignUpForm/LinearStepper'
import { CssBaseline, Container, Paper, Box } from '@material-ui/core'

const SignUpStudent = () => {
    return (
        <div className="SignUpStudent">
            <div className="SignUpTitle">Register As A Student</div>
            <CssBaseline />
            <Container component={Box} p={4}>
                <Paper component={Box} p={3}>
                    <LinearStepper />
                </Paper>
            </Container>
            <div className="SignUpRedirect">
                <div className="SignInRedirectLink">
                    <NavLink to="/sign-in">Sign in instead</NavLink>
                </div>
                <div className="SignUpRedirectLink">
                    <NavLink to="/sign-up-instructor">
                        Sign up as an instructor
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUpStudent
