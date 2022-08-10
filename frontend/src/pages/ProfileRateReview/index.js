import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReviewProfile from '../../components/ReviewProfile'

import { getInstructorByIdAsync } from '../../redux/instructors/thunks'

const ProfileRateReview = () => {
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(getInstructorByIdAsync(params.instructorId))
    }, [dispatch, params.instructorId])

    const currentInstructor = useSelector(
        (state) => state.instructors.viewCurrentInstructor,
    )

    return (
        <>
            <div className="ProfileRateReview">
                <ReviewProfile instructor={currentInstructor} />
            </div>
        </>
    )
}

export default ProfileRateReview
