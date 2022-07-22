import './index.scss'
import SidebarInstructor from '../../components/SidebarInstructor'
import InformationInstructor from '../../components/InformationInstructor'
import InstructorViewedReviews from '../../components/InstructorViewedReviews'
import Reviews from '../../components/ReviewsList/Reviews'
import InstSideMenu from '../../components/InstSideMenu/InstSideMenu'

const ProfileInstructor = () => {
    return (
        <>
            <div className="ProfileInstructor">
                <h1>ProfileInstructor</h1>
            </div>
            <div className="ProfileInstructor__sidebar">
                <SidebarInstructor />
            </div>
            <div className='InstSideMenuProps'>
                {/* <div className='InstSideMenuSingle'> */}
                <InstSideMenu/>
                {/* </div> */}
                <div className="ProfileInstructor__information">
                    <InformationInstructor />
                    {/* <Reviews/> */}
                </div>
            </div>

            
        </>
    )
}

export default ProfileInstructor
