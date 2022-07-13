import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import ProfileRateReview from './pages/ProfileRateReview'
import About from './pages/About'
import ProfileStudent from './pages/ProfileStudent'
import ProfileInstructor from './pages/ProfileInstructor'
// import PrivateRoute from './pages/PrivateRouter';
import SignIn from './pages/SignInUp/SignIn'
// import SignUpInstructor from './pages/SignUp/SignUpInstructor'
// import SignUpStudent from './pages/SignUp/SignUpStudent'
import SignUp from './pages/SignInUp/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Explore from './pages/Explore'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="showProfileRating/:instructorId"
                        element={<ProfileRateReview />}
                    />
                    <Route path="explore" element={<Explore />} />

                    <Route path="about" element={<About />} />

                    {/* <Route path='/profilestudent' element={<PrivateRoute />}> */}
                    <Route
                        path="profile-student"
                        element={<ProfileStudent />}
                    />
                    {/* </Route> */}
                    {/* <Route path='/profileinstructor' element={<PrivateRoute />}> */}
                    <Route
                        path="profile-instructor"
                        element={<ProfileInstructor />}
                    />
                    {/* </Route> */}
                    <Route path="sign-in" element={<SignIn />} />
                    <Route
                        path="sign-up-instructor"
                        element={<SignUp role="instructor" />}
                    />
                    <Route
                        path="sign-up-student"
                        element={<SignUp role="student" />}
                    />
                    <Route
                        path="forgot-password"
                        element={<ForgotPassword />}
                    />
                </Route>
            </Routes>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        fontSize: '1rem',
                    },
                }}
            />
        </>
    )
}

export default App
