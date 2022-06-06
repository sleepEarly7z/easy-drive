import './index.scss'
import SidebarStudent from '../../components/SidebarStudent'
import InformationStudent from '../../components/InformationStudent'

const ProfileStudent = () => {
  return (
      <>
        <div className='ProfileStudent'>
            <h1>ProfileStudent</h1>
        </div>
        <div className='sideAndInfo'>
            <SidebarStudent />
            <div className='sideAndInfo2'>
            <InformationStudent />
        </div>
        </div>
      </>
  )
}

export default ProfileStudent