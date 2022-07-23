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
            <div className="">
                {/* <div className="InstSideMenuProps"> */}
                {/* <div className='InstSideMenuSingle'> */}
                <div className="InstSideMenuProps">
                    <InstSideMenu />
                    <div className="ProfileInstructor__information">
                        <InformationInstructor />
                    </div>
                </div>
                <Reviews idType={'instructorId'} />
            </div>
            {/* </div> */}
        </>
    )
}

export default ProfileInstructor
