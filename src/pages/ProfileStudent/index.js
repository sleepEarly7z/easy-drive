import './index.scss'
import SidebarStudent from '../../components/SidebarStudent'
import InformationStudent from '../../components/InformationStudent'

const ProfileStudent = () => {
  return (
      <>
        <div className='ProfileStudent'>
            <h1>ProfileStudent</h1>
            <SidebarStudent />
            <InformationStudent />
        </div>
      </>
  )
}

export default ProfileStudent