import './index.scss'
import SidebarInstructor from '../../components/SidebarInstructor'
import InformationInstructor from '../../components/InformationInstructor'

const ProfileInstructor = () => {
  return (
      <>
        <div className='ProfileInstructor'>
            <h1>ProfileInstructor</h1>
            <SidebarInstructor />
            <InformationInstructor />
        </div>
      </>
  )
}

export default ProfileInstructor