import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReviewProfile from '../../components/ReviewProfile'

import { getInstructorsAsync } from '../../redux/instructors/thunks'

const ProfileRateReview = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const instructors = useSelector((state) => state.instructors.list)
    const instructor = instructors.find(
        (user) => user.id.$oid === params.instructorId,
    )

    useEffect(() => {
        dispatch(getInstructorsAsync())
    }, [])

    return (
        <>
            <div className="ProfileRateReview">
                <ReviewProfile instructor={instructor} />
            </div>
        </>
    )
}

export default ProfileRateReview
