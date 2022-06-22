import './index.scss'
import { NavLink } from 'react-router-dom'
import LinearStepper from '../../components/SignUpForm/LinearStepper'
import { CssBaseline, Container, Paper, Box } from '@material-ui/core'

const SignUpInstructor = () => {
    return (
        <div className="SignUpInstructor">
            <div className="SignUpTitle">Register As An Instructor</div>
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
                    <NavLink to="/sign-up-student">
                        Sign up as an student
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUpInstructor
