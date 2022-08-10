import './index.scss'
import SidebarStudent from '../../components/SidebarStudent'
import InformationStudent from '../../components/InformationStudent'
import ScrollToTop from '../../components/HomePageSections/SectionTwo/ScrollToTop'
import Reviews from '../../components/ReviewsList/Reviews'
import React, { useRef } from 'react'
import StuSideMenu from '../../components/StuSideMenu/StuSideMenu'
import StudentMap from '../../components/StudentMap/StudentMap'
import useStudent from '../../hooks/useStudent'
import toast from 'react-hot-toast'
import LinearLoading from '../../components/Animation/LinearLoading'
import { Navigate, useParams } from 'react-router-dom'

const ProfileStudent = () => {
    const information = useRef(null)
    const { studentId } = useParams();

    const {
        info,
        followedInstructors,
        loading,
        hasError
    } = useStudent(studentId);

    React.useEffect(() => {
        if (hasError) toast.error('Cannot load student information.');
    }, [hasError])


    return (
        <>
            {loading && <LinearLoading />}
            {hasError && <Navigate to='/' replace='true' />}

            {(!loading && !hasError) &&
                <>
                    <ScrollToTop />
                    <div className="ProfileStudent">
                        <h1>ProfileStudent</h1>
                    </div>
                    <div className="ProfileStudent__sidebar">
                        <SidebarStudent info={info} followedInstructors={followedInstructors} />
                    </div>

                    <div className="StuSideMenuProps">
                        <StuSideMenu section1={information} />
                        <div className="ProfileStudent__information" ref={information}>
                            <InformationStudent info={info} />
                            <Reviews idType={'studentId'} page={'profilePage'} />
                        </div>
                    </div>
                    <StudentMap />
                </>
            }
        </>
    )
}

export default ProfileStudent