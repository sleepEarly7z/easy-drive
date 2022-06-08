import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import ProfileRateReview from './pages/ProfileRateReview';
import About from './pages/About';
import ProfileStudent from './pages/ProfileStudent';
import ProfileInstructor from './pages/ProfileInstructor';
// import PrivateRoute from './pages/PrivateRouter';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Explore from './pages/Explore';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile-ratereview' element={<ProfileRateReview />} />
          <Route path="explore" element={<Explore />} />

          <Route path="about" element={<About />} />

          {/* <Route path='/profilestudent' element={<PrivateRoute />}> */}
          <Route path='profile-student' element={<ProfileStudent />} />
          {/* </Route> */}
          {/* <Route path='/profileinstructor' element={<PrivateRoute />}> */}
          <Route path='profile-instructor' element={<ProfileInstructor />} />
          {/* </Route> */}
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
