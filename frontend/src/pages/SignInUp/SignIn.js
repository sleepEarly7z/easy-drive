import SignInInstructor from '../../components/SignInForm/SignInInstructor'
import SignInStudent from '../../components/SignInForm/SignInStudent'

const SignIn = ({ role }) => {
    return role === 'instructor' ? (
        <div
            className="SignIn"
            style={{ marginTop: '120px', minHeight: '600px' }}
        >
            <SignInInstructor />
        </div>
    ) : (
        <div
            className="SignIn"
            style={{ marginTop: '120px', minHeight: '600px' }}
        >
            <SignInStudent />
        </div>
    )
}

export default SignIn
