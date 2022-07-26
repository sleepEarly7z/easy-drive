import './index.scss'
import SidebarInstructor from '../../components/SidebarInstructor'
import InformationInstructor from '../../components/InformationInstructor'
import InstructorViewedReviews from '../../components/InstructorViewedReviews'
import Reviews from '../../components/ReviewsList/Reviews'
import InstSideMenu from '../../components/InstSideMenu/InstSideMenu'
import ScrollToTop from '../../components/HomePageSections/SectionTwo/ScrollToTop'
import { useRef } from 'react'

const ProfileInstructor = () => {
    const information = useRef(null);

    return (
        <>  
            <ScrollToTop />
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
                    <InstSideMenu section1={information}/>
                    <div className="ProfileInstructor__information" ref={information}>
                        <InformationInstructor />
                    </div>
                </div>
                <Reviews idType={'instructorId'} page={"reviewPage"} />
            </div>
            {/* </div> */}
        </>
    )
}

export default ProfileInstructor
