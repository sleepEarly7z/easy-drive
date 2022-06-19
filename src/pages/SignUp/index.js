import './index.scss'
import LinearStepper from "../../components/SignUpForm";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";


const SignUp = () => {
    return (
        <>
        <CssBaseline />
        <Container component={Box} p={4}>
          <Paper component={Box} p={3}>
            <LinearStepper />
          </Paper>
        </Container>
        </>
    )
}

export default SignUp
