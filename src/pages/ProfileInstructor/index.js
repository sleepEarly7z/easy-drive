import './index.scss'
import SidebarInstructor from '../../components/SidebarInstructor'
import InformationInstructor from '../../components/InformationInstructor'
import InstructorViewedReviews from '../../components/InstructorViewedReviews'

const ProfileInstructor = () => {
  return (
      <>
        <div className='ProfileInstructor'>
            <h1>ProfileInstructor</h1>
        </div>
        <div className='sideAndInfo'>
            <SidebarInstructor />
            <div className='sideAndInfo2'>
            <InformationInstructor />
        </div>
        </div>
        
        {/* <div className='sideAndInfo' style="position:relative; left:80px; top:2px;">
            <InformationInstructor />
        </div> */}
      </>
  )
}

export default ProfileInstructor