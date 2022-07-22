import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReviewProfile from '../../components/ReviewProfile'

import { getInstructorByIdAsync } from '../../redux/instructors/thunks'
import { getReviewsByIdAsync } from '../../redux/instructors/thunks'
import { getReviewsByInstructorIdAsync } from '../../redux/reviews/thunks'

const ProfileRateReview = () => {
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(getInstructorByIdAsync(params.instructorId))
        // dispatch(getReviewsByIdAsync(params.instructorId))
        dispatch(getReviewsByInstructorIdAsync(params.instructorId))
    }, [])

    const currentInstructor = useSelector(
        (state) => state.instructors.viewCurrentInstructor,
    )

    const currentInstructorReviews = useSelector(
        (state) => state.reviews.reviewsOfInstructor,
    )

    return (
        <>
            <div className="ProfileRateReview">
                <ReviewProfile
                    instructor={currentInstructor}
                    // reviews={currentInstructorReviews}
                />
            </div>
        </>
    )
}

export default ProfileRateReview
