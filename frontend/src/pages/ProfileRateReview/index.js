// import './index.scss'
// import ReviewForm from '../../components/ReviewForm'
// import ReviewList from '../../components/ReviewList'
// import ReviewProfile from '../../components/ReviewProfile'
// import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { useState, useEffect } from 'react'
// import { getInstructorsAsync } from '../../redux/instructors/thunks'

// const ProfileRateReview = () => {
    
//     const params = useParams()
//     const dispatch = useDispatch()

//     const instructors = useSelector((state) => state.instructors.list)
//     const instructor = instructors.find(
//         (user) => user.id.$oid === params.instructorId,
//     )

//     useEffect(() => {
//         dispatch(getInstructorsAsync())
//         console.log('useEffect')
//     }, [])

//     return (
//         <>
//             <div className="ProfileRateReview">
//                 <div className="ReviewProfile-top">
//                     <ReviewProfile instructor={instructor} />
//                 </div>
//                 <div>
//                     <ReviewForm />
//                     <ReviewList instructor={instructor} />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProfileRateReview

import './index.scss'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'
import ReviewProfile from '../../components/ReviewProfile'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getInstructorsAsync } from '../../redux/instructors/thunks'

const ProfileRateReview = () => {
    
    return (
        <>
            <div className="ProfileRateReview">
                <div className="ReviewProfile-top">
                    <ReviewProfile/>
                </div>
                <div>
                    <ReviewForm />
                    <ReviewList/>
                </div>
            </div>
        </>
    )
}

export default ProfileRateReview
