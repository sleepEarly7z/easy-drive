import SignUpFormInstructor from '../../components/SignUpForm/SignUpInstructor'
import SignUpFormStudent from '../../components/SignUpForm/SignUpInstructor'

const SignUp = ({ role }) => {
    return role === 'instructor' ? (
        <div
            style={{
                marginTop: '60px',
                marginBottom: '95px',
                minHeight: '560px',
            }}
        >
            <SignUpFormInstructor />
        </div>
    ) : (
        <div
            style={{
                marginTop: '60px',
                marginBottom: '95px',
                minHeight: '560px',
            }}
        >
            <SignUpFormStudent />
        </div>
    )
}

export default SignUp
