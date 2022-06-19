import './index.scss'
import LinearStepper from '../../components/SignUpForm/LinearStepper'
import { CssBaseline, Container, Paper, Box } from '@material-ui/core'

const SignUp = () => {
    return (
        <div className="SignUp">
            <div className='SignUpTitle'>Create An Account</div>
            <CssBaseline />
            <Container component={Box} p={4}>
                <Paper component={Box} p={3}>
                    <LinearStepper />
                </Paper>
            </Container>
        </div>
    )
}

export default SignUp
